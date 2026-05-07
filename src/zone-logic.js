import { riverConfigs } from './river-data.js';

function pointInPolygon(point, vs) {
    const x = point[0], y = point[1];
    let inside = false;
    for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        const xi = vs[i][0], yi = vs[i][1];
        const xj = vs[j][0], yj = vs[j][1];
        const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}

function buildPolygonBelow(boundary, qBottom) {
    if (!boundary || boundary.length < 2) return [];
    const pts = [];
    pts.push({ dj: boundary[0].dj, q: qBottom });
    pts.push({ dj: boundary[boundary.length - 1].dj, q: qBottom });
    for (let i = boundary.length - 1; i >= 0; i--) {
        pts.push({ dj: boundary[i].dj, q: boundary[i].q });
    }
    return pts;
}

function buildPolygonBetween(lower, upper) {
    if (!lower || !upper || lower.length < 2 || upper.length < 2) return [];
    const pts = [];
    lower.forEach((p) => pts.push({ dj: p.dj, q: p.q }));
    for (let i = upper.length - 1; i >= 0; i--) {
        pts.push({ dj: upper[i].dj, q: upper[i].q });
    }
    return pts;
}

function buildPolygonAbove(boundary, qTop) {
    if (!boundary || boundary.length < 2) return [];
    const pts = [];
    pts.push({ dj: boundary[0].dj, q: qTop });
    pts.push({ dj: boundary[boundary.length - 1].dj, q: qTop });
    for (let i = boundary.length - 1; i >= 0; i--) {
        pts.push({ dj: boundary[i].dj, q: boundary[i].q });
    }
    return pts;
}

export function getRiverZone(riverKey, pt) {
    if (!pt || typeof pt.dj !== 'number' || typeof pt.q !== 'number') return null;

    const cfg = riverConfigs[riverKey];
    if (!cfg) return null;

    const zones = pt.phase === "DJGC" ? cfg.djgcZones : cfg.djdcZones;
    if (!zones) return null;

    const targetPoint = [pt.dj, pt.q];

    const checkPoly = (polyArray) => {
        if (!polyArray || polyArray.length === 0) return false;
        const arr = Array.isArray(polyArray[0]) ? polyArray : [polyArray];
        for (const poly of arr) {
            if (poly && poly.length > 0) {
                const vs = poly.map(p => [p.dj, p.q]);
                if (pointInPolygon(targetPoint, vs)) return true;
            }
        }
        return false;
    };

    if (zones.green || zones.yellow || zones.red) {
        if (checkPoly(zones.red)) return "red";
        if (checkPoly(zones.yellow)) return "yellow";
        if (checkPoly(zones.green)) return "green";
        return null;
    }

    // Legacy mode
    const rawGY = zones.greenYellow || [];
    const rawYR = zones.yellowRed || [];
    
    const segmentsGY = (rawGY.length > 0 && Array.isArray(rawGY[0])) ? rawGY : (rawGY.length > 0 ? [rawGY] : []);
    const segmentsYR = (rawYR.length > 0 && Array.isArray(rawYR[0])) ? rawYR : (rawYR.length > 0 ? [rawYR] : []);
    
    const maxSegments = Math.max(segmentsGY.length, segmentsYR.length);

    // Q domain top and bottom based on config
    const qBottom = cfg.qMin || 0;
    const qTop = cfg.qMax || 10000;

    // Check green
    if (segmentsGY.length > 0 && segmentsGY[0]) {
        const greenPoly = buildPolygonBelow(segmentsGY[0], qBottom);
        if (greenPoly.length > 0 && pointInPolygon(targetPoint, greenPoly.map(p => [p.dj, p.q]))) return "green";
    }

    for (let i = 0; i < maxSegments; i++) {
        const gy = segmentsGY[i];
        const yr = segmentsYR[i];

        if (gy && yr) {
            const yellowPoly = buildPolygonBetween(gy, yr);
            if (yellowPoly.length > 0 && pointInPolygon(targetPoint, yellowPoly.map(p => [p.dj, p.q]))) return "yellow";
        }

        if (yr) {
            const nextGy = segmentsGY[i + 1];
            if (nextGy) {
                const redPoly = buildPolygonBetween(yr, nextGy);
                if (redPoly.length > 0 && pointInPolygon(targetPoint, redPoly.map(p => [p.dj, p.q]))) return "red";
            } else {
                const redPoly = buildPolygonAbove(yr, qTop);
                if (redPoly.length > 0 && pointInPolygon(targetPoint, redPoly.map(p => [p.dj, p.q]))) return "red";
            }
        }
    }

    return null;
}
