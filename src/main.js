import './style.css';
import { riverConfigs } from './river-data.js';
import { drawDiagram } from './chart.js';
import { subscribeToSeasonData } from './firestore-service.js';

import './firebase-config.js'; // Initialize Firebase

let showControlPoints = false;
// selectedPoint: { riverKey, panelKey: 'djgc'|'djdc', zone: 'greenYellow'|'yellowRed', index }
let selectedPoint = null;
let currentSeries = null;

function updatePointEditorStatus() {
    const statusEl = document.getElementById("pointStatus");
    if (!selectedPoint) {
        statusEl.textContent = "No point selected.";
        document.getElementById("ptDj").value = "";
        document.getElementById("ptQ").value = "";
        return;
    }

    const cfg = riverConfigs[selectedPoint.riverKey];
    const panelLabel =
        selectedPoint.panelKey === "djgc" ? "DJGC–Q panel" : "DJDC-5–Q panel";
    const zoneLabel =
        selectedPoint.zone === "greenYellow"
            ? "green/yellow boundary"
            : "yellow/red boundary";

    statusEl.textContent =
        `Selected: ${cfg.label} – ${panelLabel}, ${zoneLabel}, point #${selectedPoint.index + 1
        }`;
}

function onPointSelect(pt) {
    selectedPoint = pt;
    const cfg = riverConfigs[pt.riverKey];
    const zones = pt.panelKey === "djgc" ? cfg.djgcZones : cfg.djdcZones;
    const arr = zones[pt.zone];
    const pointData = arr[pt.index];

    document.getElementById("ptDj").value = pointData.dj;
    document.getElementById("ptQ").value = pointData.q;

    updatePointEditorStatus();
    drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
}

async function loadRiverConfig(key) {
    const cfg = riverConfigs[key];
    if (!cfg) return;
    document.getElementById("qMin").value = cfg.qMin;
    document.getElementById("qMax").value = cfg.qMax;
    document.getElementById("djgcMax").value = cfg.djgcMax;
    document.getElementById("djdcMax").value = cfg.djdcMax;
    document.getElementById("qBankfull").value = cfg.qBankfull;
    selectedPoint = null;
    updatePointEditorStatus();

    if (key === 'lassomption') {
        const unsubscribe = subscribeToSeasonData(key, (data) => {
            currentSeries = data;
            drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
        });
        // Note: unsubscribe is not handled on river switch in this simple version, 
        // but for a single river app it's fine.
    } else {
        currentSeries = null;
    }

    drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial river: L'Assomption
    loadRiverConfig("lassomption");

    document
        .getElementById("riverSelect")
        .addEventListener("change", (e) => loadRiverConfig(e.target.value));

    document.getElementById("drawBtn").addEventListener("click", () => {
        drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
    });

    document.getElementById("showPointsBtn")
        .addEventListener("click", () => {
            showControlPoints = true;
            drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
        });

    document
        .getElementById("hidePointsBtn")
        .addEventListener("click", () => {
            showControlPoints = false;
            selectedPoint = null;
            updatePointEditorStatus();
            drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
        });

    // --- View Mode ---
    document.getElementById("focusObservedBtn").addEventListener("click", () => {
        document.getElementById("focusObservedBtn").classList.add("active");
        document.getElementById("resetViewBtn").classList.remove("active");
        drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
    });
    document.getElementById("resetViewBtn").addEventListener("click", () => {
        document.getElementById("resetViewBtn").classList.add("active");
        document.getElementById("focusObservedBtn").classList.remove("active");
        drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
    });

    // --- Data Pipeline: Manual Trigger ---
    document.getElementById("runPollBtn").addEventListener("click", async () => {
        const statusEl = document.getElementById("pollStatus");
        const btn = document.getElementById("runPollBtn");

        // GitHub repo config (hard-coded — not a secret)
        const OWNER = "NutellaTN";
        const REPO = "projet-gabriel";
        const WORKFLOW = "poll_daily.yml";

        // PAT must be set in a .env file as VITE_GITHUB_PAT (repo scope)
        const token = import.meta.env.VITE_GITHUB_PAT;
        if (!token) {
            statusEl.style.color = "#f87171";
            statusEl.textContent = "⚠ VITE_GITHUB_PAT not set in .env";
            return;
        }

        btn.disabled = true;
        statusEl.style.color = "#94a3b8";
        statusEl.textContent = "Dispatching…";

        try {
            const res = await fetch(
                `https://api.github.com/repos/${OWNER}/${REPO}/actions/workflows/${WORKFLOW}/dispatches`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/vnd.github+json",
                        "X-GitHub-Api-Version": "2022-11-28",
                    },
                    body: JSON.stringify({ ref: "main" }),
                }
            );
            if (res.status === 204) {
                statusEl.style.color = "#4ade80";
                statusEl.textContent = "✓ Running on GitHub Actions!";
            } else {
                const body = await res.json().catch(() => ({}));
                statusEl.style.color = "#f87171";
                statusEl.textContent = `✗ ${res.status}: ${body.message || "Unknown error"}`;
            }
        } catch (err) {
            statusEl.style.color = "#f87171";
            statusEl.textContent = `✗ Network error: ${err.message}`;
        } finally {
            btn.disabled = false;
        }
    });

    document
        .getElementById("updatePointBtn")
        .addEventListener("click", () => {
            if (!selectedPoint) {
                alert("No point selected.");
                return;
            }
            const newDj = parseFloat(document.getElementById("ptDj").value);
            const newQ = parseFloat(document.getElementById("ptQ").value);
            if (isNaN(newDj) || isNaN(newQ)) {
                alert("Please enter valid numeric values for DJ and Q.");
                return;
            }

            const cfg = riverConfigs[selectedPoint.riverKey];
            const zones =
                selectedPoint.panelKey === "djgc"
                    ? cfg.djgcZones
                    : cfg.djdcZones;
            const arr = zones[selectedPoint.zone];
            if (!arr || selectedPoint.index < 0 || selectedPoint.index >= arr.length) {
                alert("Internal error: point not found.");
                return;
            }
            // update in place, keep order
            arr[selectedPoint.index] = { dj: newDj, q: newQ };
            drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
        });

    document
        .getElementById("moveLeftBtn")
        .addEventListener("click", () => {
            if (!selectedPoint) return;
            if (selectedPoint.index > 0) {
                onPointSelect({ ...selectedPoint, index: selectedPoint.index - 1 });
            }
        });

    document
        .getElementById("moveRightBtn")
        .addEventListener("click", () => {
            if (!selectedPoint) return;
            const cfg = riverConfigs[selectedPoint.riverKey];
            const zones = selectedPoint.panelKey === "djgc" ? cfg.djgcZones : cfg.djdcZones;
            const arr = zones[selectedPoint.zone];

            if (arr && selectedPoint.index < arr.length - 1) {
                onPointSelect({ ...selectedPoint, index: selectedPoint.index + 1 });
            }
        });

});
