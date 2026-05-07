import { db } from './firebase-config';
import { doc, onSnapshot } from "firebase/firestore";

/**
 * Returns the current season ID dynamically based on Date.
 * (Syncs with Python logic: Oct 15 cutoff)
 */
function getSeasonId(date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (month > 10 || (month === 10 && day >= 15)) {
        return `${year}_${String(year + 1).slice(2)}`;
    } else {
        return `${year - 1}_${String(year).slice(2)}`;
    }
}

/**
 * Subscribes to the active season's data.
 * Returns an unsubscribe function.
 * @param {string} stationId 
 * @param {function} onData Callback receiving { historical, latest, prediction }
 */
export function subscribeToSeasonData(stationId, onData) {
    const seasonId = getSeasonId();
    // Default to 'lassomption' logic for now
    // Path: stations/{stationId}/seasons/{seasonId}
    const docRef = doc(db, "stations", stationId, "seasons", seasonId);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();
            processSeasonData(stationId, data, onData);
        } else {
            console.log("No season data found for", seasonId);
            onData(null);
        }
    }, (error) => {
        console.error("Firestore subscription error:", error);
    });

    return unsubscribe;
}

function processSeasonData(stationId, data, callback) {
    const historical = [];

    // 1. DJGC Points (Winter)
    if (data.djgc_q_points) {
        let lastDate = null;
        data.djgc_q_points.forEach(pt => {
            if (stationId === 'matapedia' && lastDate && lastDate <= '2025-12-25' && pt.date >= '2026-02-11') {
                historical.push({ dj: NaN, q: NaN, phase: "DJGC" });
            }
            historical.push({
                dj: pt.djgc,
                q: pt.q,
                phase: "DJGC"
            });
            lastDate = pt.date;
        });
    }

    // 2. DJDC-5 Points (Spring Thaw)
    if (data.djdc_q_points) {
        data.djdc_q_points.forEach(pt => {
            historical.push({
                dj: pt.djdc,
                q: pt.q,
                phase: "DJDC5"
            });
        });
    }

    // 3. Latest observed point
    const latest = data.latest || null;

    // 4. Prediction Points
    const predData = data.prediction || {};
    const predValues = predData.values || {};

    const predictionPoints = Object.keys(predValues).sort().map(dateKey => {
        const item = predValues[dateKey];
        return {
            date: dateKey,
            dj: item.dj,
            q: item.q,
            q25: item.p25 !== undefined ? item.p25 : item.q,
            q75: item.p75 !== undefined ? item.p75 : item.q,
            phase: predData.phase || "DJDC5"
        };
    });

    callback({
        historical,
        latest,
        prediction: predictionPoints,
        lastUpdated: data.last_updated || null
    });
}
