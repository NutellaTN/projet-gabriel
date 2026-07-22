import './style.css';
import { riverConfigs } from './river-data.js';
import { drawDiagram } from './chart.js';
import { subscribeToSeasonData } from './firestore-service.js';
import { t, setLanguage, getCurrentLanguage, translateDOM } from './i18n.js';

import './firebase-config.js'; // Initialize Firebase
import { db, auth } from './firebase-config.js';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

let showControlPoints = false;
// selectedPoint: { riverKey, panelKey: 'djgc'|'djdc', zone: 'greenYellow'|'yellowRed', index }
let selectedPoint = null;
let currentSeries = null;

function updatePointEditorStatus() {
    const statusEl = document.getElementById("pointStatus");
    if (!selectedPoint) {
        statusEl.textContent = t("editor.status.none");
        document.getElementById("ptDj").value = "";
        document.getElementById("ptQ").value = "";
        return;
    }

    const cfg = riverConfigs[selectedPoint.riverKey];
    const riverName = t(`river.${selectedPoint.riverKey}`) || cfg.label;

    const panelLabel =
        selectedPoint.panelKey === "djgc" ? t("editor.panel.djgc") : t("editor.panel.djdc");
    const zoneLabels = {
        greenYellow: t("editor.zone.greenYellow"),
        yellowRed: t("editor.zone.yellowRed"),
        green: "Green",
        yellow: "Yellow",
        red: "Red",
    };
    const zoneLabel = zoneLabels[selectedPoint.zone] || selectedPoint.zone;

    statusEl.textContent = t("editor.status.selected", {
        river: riverName,
        panel: panelLabel,
        zone: zoneLabel,
        index: selectedPoint.index + 1
    });
}

function getZoneSegment(zones, zone, segmentIndex) {
    const raw = zones[zone];
    if (!raw || raw.length === 0) return raw;
    // Explicit format: array of segment arrays
    if (Array.isArray(raw[0])) {
        return raw[segmentIndex !== undefined ? segmentIndex : 0];
    }
    // Legacy format: flat array of points
    return raw;
}

function onPointSelect(pt) {
    console.log("onPointSelect called with:", JSON.stringify(pt));
    selectedPoint = pt;
    const cfg = riverConfigs[pt.riverKey];
    const zones = pt.panelKey === "djgc" ? cfg.djgcZones : cfg.djdcZones;
    console.log("zones keys:", Object.keys(zones));
    const arr = getZoneSegment(zones, pt.zone, pt.segmentIndex);
    console.log("arr:", arr, "index:", pt.index);
    const pointData = arr[pt.index];
    console.log("pointData:", pointData);

    document.getElementById("ptDj").value = pointData.dj;
    document.getElementById("ptQ").value = pointData.q;

    updatePointEditorStatus();
    drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
}

async function loadRiverConfig(key) {
    const cfg = riverConfigs[key];
    if (!cfg) return;

    // Reset editor UI
    document.getElementById("qMin").value = cfg.qMin;
    document.getElementById("qMax").value = cfg.qMax;
    document.getElementById("djgcMax").value = cfg.djgcMax;
    document.getElementById("djdcMax").value = cfg.djdcMax;
    document.getElementById("qBankfull").value = cfg.qBankfull;
    selectedPoint = null;
    updatePointEditorStatus();

    // Reset current series to clear the chart before the new data arrives
    currentSeries = null;

    // Unsubscribe from previous listener if it exists
    if (window.currentFirebaseListener) {
        window.currentFirebaseListener();
    }

    // Subscribe to the new river's Firestore document
    window.currentFirebaseListener = subscribeToSeasonData(key, (data) => {
        currentSeries = data;
        drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
    });

    // Initial draw while waiting for Firebase payload
    drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
}

document.addEventListener('DOMContentLoaded', () => {
    // Internationalization initialization
    translateDOM();

    document.getElementById("langToggleBtn").addEventListener("click", () => {
        const nextLang = getCurrentLanguage() === 'fr' ? 'en' : 'fr';
        setLanguage(nextLang);
        updatePointEditorStatus();
        drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
    });

    // Initial river from URL or default
    const urlParams = new URLSearchParams(window.location.search);
    const riverParam = urlParams.get('river');
    const initialRiver = (riverParam && riverConfigs[riverParam]) ? riverParam : "lassomption";
    
    const riverSelect = document.getElementById("riverSelect");
    if (riverSelect) riverSelect.value = initialRiver;
    
    loadRiverConfig(initialRiver);

    document
        .getElementById("riverSelect")
        .addEventListener("change", (e) => loadRiverConfig(e.target.value));

    document.getElementById("drawBtn").addEventListener("click", () => {
        drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
    });

    document.getElementById("updateQBankfullBtn").addEventListener("click", () => {
        const qBankfullVal = parseFloat(document.getElementById("qBankfull").value);
        if (!isNaN(qBankfullVal)) {
            riverConfigs[document.getElementById("riverSelect").value].qBankfull = qBankfullVal;
        }
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
        const progressEl = document.getElementById("pollProgress");

        // 1. Prompt user for Passcode
        const promptMsg = t("pipeline.prompt.passcode") || "Veuillez entrer le code d'accès administrateur :";
        const passcode = prompt(promptMsg);
        if (!passcode) return; // User cancelled or entered empty string

        const OWNER = "NutellaTN";
        const REPO = "projet-gabriel";
        const WORKFLOW = "poll_daily.yml";

        btn.disabled = true;
        progressEl.style.display = "block";
        statusEl.style.color = "#94a3b8";
        statusEl.textContent = t("pipeline.status.authenticating") || "Vérification du code d'accès…";

        try {
            // 2. Authenticate with Firebase Auth using passcode
            try {
                await signInWithEmailAndPassword(auth, "admin@projet-gabriel.local", passcode);
            } catch (authErr) {
                statusEl.style.color = "#f87171";
                statusEl.textContent = t("pipeline.status.invalidcode") || "✗ Code d'accès incorrect.";
                return;
            }

            // 3. Fetch secret PAT from Firestore (only allowed when authenticated)
            statusEl.textContent = t("pipeline.status.pending");
            const secretSnap = await getDoc(doc(db, "secrets", "github"));
            if (!secretSnap.exists() || !secretSnap.data()?.token) {
                statusEl.style.color = "#f87171";
                statusEl.textContent = t("pipeline.status.notoken");
                return;
            }
            const token = secretSnap.data().token;

            const headers = {
                Authorization: `Bearer ${token}`,
                Accept: "application/vnd.github+json",
                "X-GitHub-Api-Version": "2022-11-28",
            };

            // 4. Dispatch the workflow
            const dispatchRes = await fetch(
                `https://api.github.com/repos/${OWNER}/${REPO}/actions/workflows/${WORKFLOW}/dispatches`,
                { method: "POST", headers, body: JSON.stringify({ ref: "main" }) }
            );

            if (dispatchRes.status !== 204) {
                const body = await dispatchRes.json().catch(() => ({}));
                throw new Error(`Dispatch failed: ${dispatchRes.status} ${body.message || ""}`);
            }

            statusEl.textContent = t("pipeline.status.starting");
            await new Promise((r) => setTimeout(r, 2000));

            // 5. Find run & poll until completed
            const runsRes = await fetch(
                `https://api.github.com/repos/${OWNER}/${REPO}/actions/workflows/${WORKFLOW}/runs?per_page=1`,
                { headers }
            );
            const runsData = await runsRes.json();
            const run = runsData.workflow_runs?.[0];

            if (!run) {
                throw new Error("Could not locate the workflow run.");
            }

            let runId = run.id;
            let status = run.status;
            let conclusion = run.conclusion;

            while (status !== "completed") {
                statusEl.textContent = t("pipeline.status.running", { status: status.replace("_", " ") });
                await new Promise((r) => setTimeout(r, 5000));

                const pollRes = await fetch(
                    `https://api.github.com/repos/${OWNER}/${REPO}/actions/runs/${runId}`,
                    { headers }
                );
                const pollData = await pollRes.json();
                status = pollData.status;
                conclusion = pollData.conclusion;
            }

            if (conclusion === "success") {
                statusEl.style.color = "#4ade80";
                statusEl.textContent = t("pipeline.status.success");
            } else {
                statusEl.style.color = "#f87171";
                statusEl.textContent = t("pipeline.status.failure", { conclusion });
            }

        } catch (err) {
            statusEl.style.color = "#f87171";
            statusEl.textContent = t("pipeline.status.error", { message: err.message });
        } finally {
            // Sign out immediately so session is closed
            await signOut(auth).catch(() => {});
            btn.disabled = false;
            progressEl.style.display = "none";
        }
    });

    document
        .getElementById("updatePointBtn")
        .addEventListener("click", () => {
            if (!selectedPoint) {
                alert(t("editor.alert.none"));
                return;
            }
            const newDj = parseFloat(document.getElementById("ptDj").value);
            const newQ = parseFloat(document.getElementById("ptQ").value);
            if (isNaN(newDj) || isNaN(newQ)) {
                alert(t("editor.alert.invalid"));
                return;
            }

            const cfg = riverConfigs[selectedPoint.riverKey];
            const zones =
                selectedPoint.panelKey === "djgc"
                    ? cfg.djgcZones
                    : cfg.djdcZones;
            const arr = getZoneSegment(zones, selectedPoint.zone, selectedPoint.segmentIndex);
            if (!arr || selectedPoint.index < 0 || selectedPoint.index >= arr.length) {
                alert(t("editor.alert.error"));
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
            const arr = getZoneSegment(zones, selectedPoint.zone, selectedPoint.segmentIndex);

            if (arr && selectedPoint.index < arr.length - 1) {
                onPointSelect({ ...selectedPoint, index: selectedPoint.index + 1 });
            }
        });

    // Dynamic window resize handling to redraw the chart fluidly
    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (currentSeries) {
                drawDiagram(selectedPoint, showControlPoints, onPointSelect, currentSeries);
            }
        }, 200);
    });

});
