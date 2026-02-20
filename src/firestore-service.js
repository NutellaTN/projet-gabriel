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
            processSeasonData(data, onData);
        } else {
            console.log("No season data found for", seasonId);
            onData(null);
        }
    }, (error) => {
        console.error("Firestore subscription error:", error);
    });

    return unsubscribe;
}

function processSeasonData(data, callback) {
    // 1. Parse DJGC vs Q Points Array
    const pointsArray = data.djgc_q_points || [];
    
    const historical = [];
    let latest = null;

    pointsArray.forEach((ptData, index) => {
        const pt = {
            dj: ptData.djgc,
            q: ptData.q,
            phase: "DJGC" // We only have DJGC now
        };
        
        // Treat the last point as 'latest' for styling purposes
        if (index === pointsArray.length - 1) {
            latest = pt;
        } else {
            historical.push(pt);
        }
    });



    // 2. Parse Prediction
    const predData = data.prediction || {};
    const predValues = predData.values || {};

    const predictionPoints = Object.keys(predValues).sort().map(dateKey => {
        const item = predValues[dateKey];
        return {
            date: dateKey,
            dj: item.dj, // Predicted DJ
            q: item.q,   // Predicted Q (Median)
            q25: item.p25,
            q75: item.p75,
            phase: predData.phase // Assumes whole pred block has same phase? Or check if needed.
        };
    });

    callback({
        historical,
        latest,
        prediction: predictionPoints
    });
}
