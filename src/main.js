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
    const GITHUB_OWNER = "NutellaTN";
    const GITHUB_REPO = "projet-gabriel";
    const GITHUB_WORKFLOW = "poll_daily.yml";

    async function pollGitHubRunStatus(runId, headers, initialStatus) {
        const statusEl = document.getElementById("pollStatus");
        const btn = document.getElementById("runPollBtn");
        const progressEl = document.getElementById("pollProgress");

        btn.disabled = true;
        progressEl.style.display = "block";
        statusEl.style.color = "#94a3b8";

        let status = initialStatus;
        let conclusion = null;

        try {
            while (status !== "completed") {
                statusEl.textContent = `Status: ${status.replace("_", " ")}…`;
                await new Promise((r) => setTimeout(r, 5000)); // Poll every 5s

                const pollRes = await fetch(
                    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/actions/runs/${runId}`,
                    { headers }
                );
                const pollData = await pollRes.json();
                status = pollData.status;
                conclusion = pollData.conclusion;
            }

            if (conclusion === "success") {
                statusEl.style.color = "#4ade80";
                statusEl.textContent = "✓ Poll Completed successfully!";
            } else {
                statusEl.style.color = "#f87171";
                statusEl.textContent = `✗ Poll failed (${conclusion})`;
            }
        } catch (err) {
            statusEl.style.color = "#f87171";
            statusEl.textContent = `✗ Error: ${err.message}`;
        } finally {
            btn.disabled = false;
            progressEl.style.display = "none";
        }
    }

    // Immediately check if a run is already active on page load
    (async function checkActivePollRun() {
        const token = import.meta.env.VITE_GITHUB_PAT;
        if (!token) return;

        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
        };

        try {
            const res = await fetch(
                `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/actions/workflows/${GITHUB_WORKFLOW}/runs?per_page=1`,
                { headers }
            );
            const data = await res.json();
            const run = data.workflow_runs?.[0];
            if (run && (run.status === "in_progress" || run.status === "queued" || run.status === "pending")) {
                pollGitHubRunStatus(run.id, headers, run.status);
            }
        } catch (e) {
            console.error("Failed to check active poll runs on load:", e);
        }
    })();

    document.getElementById("runPollBtn").addEventListener("click", async () => {
        const statusEl = document.getElementById("pollStatus");
        const btn = document.getElementById("runPollBtn");
        const progressEl = document.getElementById("pollProgress");

        const token = import.meta.env.VITE_GITHUB_PAT;
        if (!token) {
            statusEl.style.color = "#f87171";
            statusEl.textContent = "⚠ VITE_GITHUB_PAT not set in .env";
            return;
        }

        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
        };

        // UI Optimistic Update
        btn.disabled = true;
        progressEl.style.display = "block";
        statusEl.style.color = "#94a3b8";
        statusEl.textContent = "Dispatching…";

        try {
            // 1. Dispatch the workflow
            const dispatchRes = await fetch(
                `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/actions/workflows/${GITHUB_WORKFLOW}/dispatches`,
                { method: "POST", headers, body: JSON.stringify({ ref: "main" }) }
            );

            if (dispatchRes.status !== 204) {
                const body = await dispatchRes.json().catch(() => ({}));
                throw new Error(`Dispatch failed: ${dispatchRes.status} ${body.message || ""}`);
            }

            statusEl.textContent = "Starting run (locating job)…";
            // Wait 2 seconds for GitHub to assign an ID
            await new Promise((r) => setTimeout(r, 2000));

            // 2. Find the newly created run
            const runsRes = await fetch(
                `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/actions/workflows/${GITHUB_WORKFLOW}/runs?per_page=1`,
                { headers }
            );
            const runsData = await runsRes.json();
            const run = runsData.workflow_runs?.[0];

            if (!run) {
                throw new Error("Could not locate the workflow run.");
            }

            // 3. Hand off to the polling loop
            pollGitHubRunStatus(run.id, headers, run.status);

        } catch (err) {
            btn.disabled = false;
            progressEl.style.display = "none";
            statusEl.style.color = "#f87171";
            statusEl.textContent = `✗ Error: ${err.message}`;
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
