import { riverConfigs } from './river-data.js';

function isPointOnSegment(p, p1, p2) {
    const x = p[0], y = p[1];
    const x1 = p1[0], y1 = p1[1];
    const x2 = p2[0], y2 = p2[1];
    const minX = Math.min(x1, x2), maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2), maxY = Math.max(y1, y2);
    if (x < minX || x > maxX || y < minY || y > maxY) return false;
    const crossProduct = (y - y1) * (x2 - x1) - (x - x1) * (y2 - y1);
    return Math.abs(crossProduct) < 1e-5;
}

function pointInPolygon(point, vs) {
    const x = point[0], y = point[1];
    let inside = false;
    for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        if (isPointOnSegment(point, vs[i], vs[j])) return true;
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

    // Use logarithmic scale for Q to match visual D3 chart scaling
    const targetPoint = [pt.dj, pt.q > 0 ? Math.log(pt.q) : -100];

    const checkPoly = (polyArray) => {
        if (!polyArray || polyArray.length === 0) return false;
        const arr = Array.isArray(polyArray[0]) ? polyArray : [polyArray];
        for (const poly of arr) {
            if (poly && poly.length > 0) {
                const vs = poly.map(p => [p.dj, p.q > 0 ? Math.log(p.q) : -100]);
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

    // Collect legacy polygons
    const redPolys = [];
    const yellowPolys = [];
    const greenPolys = [];

    if (segmentsGY.length > 0 && segmentsGY[0]) {
        greenPolys.push(buildPolygonBelow(segmentsGY[0], qBottom));
    }

    for (let i = 0; i < maxSegments; i++) {
        const gy = segmentsGY[i];
        const yr = segmentsYR[i];

        if (gy && yr) {
            yellowPolys.push(buildPolygonBetween(gy, yr));
        }

        if (yr) {
            const nextGy = segmentsGY[i + 1];
            if (nextGy) {
                redPolys.push(buildPolygonBetween(yr, nextGy));
            } else {
                redPolys.push(buildPolygonAbove(yr, qTop));
            }
        }
    }

    // Check polygons in priority order: Red -> Yellow -> Green
    for (const poly of redPolys) {
        if (poly.length > 0 && pointInPolygon(targetPoint, poly.map(p => [p.dj, p.q > 0 ? Math.log(p.q) : -100]))) return "red";
    }
    for (const poly of yellowPolys) {
        if (poly.length > 0 && pointInPolygon(targetPoint, poly.map(p => [p.dj, p.q > 0 ? Math.log(p.q) : -100]))) return "yellow";
    }
    for (const poly of greenPolys) {
        if (poly.length > 0 && pointInPolygon(targetPoint, poly.map(p => [p.dj, p.q > 0 ? Math.log(p.q) : -100]))) return "green";
    }

    return null;
}

