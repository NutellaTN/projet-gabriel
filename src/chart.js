import * as d3 from 'd3';
import { riverConfigs } from './river-data.js';
import { t } from './i18n.js';

const margin = { top: 20, right: 70, bottom: 60, left: 70 };
const midGap = 10;

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

function isSelectedPoint(selectedPoint, riverKey, panelKey, zone, segmentIndex, index) {
    return (
        selectedPoint &&
        selectedPoint.riverKey === riverKey &&
        selectedPoint.panelKey === panelKey &&
        selectedPoint.zone === zone &&
        selectedPoint.segmentIndex === segmentIndex &&
        selectedPoint.index === index
    );
}

function drawControlPoints(
    g,
    zones,
    x,
    y,
    riverKey,
    panelKey,
    selectedPoint,
    onPointSelect
) {
    if (!zones) return;

    const pointsGroup = g.append("g").attr("class", "control-points");
    // Support both legacy format (greenYellow/yellowRed) and explicit format (green/yellow/red)
    const hasExplicit = zones.green || zones.yellow || zones.red;
    const zoneKeys = hasExplicit
        ? ["green", "yellow", "red"]
        : ["greenYellow", "yellowRed"];

    // For explicit mode, build an extremity filter to hide polygon-closing anchor points
    let isExtremity = () => false;
    if (hasExplicit) {
        const cfg = riverConfigs[riverKey];
        const qMin = cfg.qMin;
        const qMax = cfg.qMax;
        const djMax = panelKey === "djgc" ? cfg.djgcMax : cfg.djdcMax;
        isExtremity = (p) =>
            (p.dj === 0 || p.dj === djMax) && (p.q === qMin || p.q === qMax);
    }
    // For explicit mode, build coordinate sets so we can determine which boundary a point sits on
    let greenCoords = new Set();
    let yellowCoords = new Set();
    let redCoords = new Set();
    if (hasExplicit) {
        const collectCoords = (rawZones) => {
            const s = new Set();
            if (!rawZones) return s;
            const arr = Array.isArray(rawZones[0]) ? rawZones : [rawZones];
            arr.forEach(poly => poly.forEach(p => s.add(`${p.dj},${p.q}`)));
            return s;
        };
        greenCoords = collectCoords(zones.green);
        yellowCoords = collectCoords(zones.yellow);
        redCoords = collectCoords(zones.red);
    }

    zoneKeys.forEach((zoneKey) => {
        const rawArr = zones[zoneKey];
        if (!rawArr || rawArr.length === 0) return;
        const segments = Array.isArray(rawArr[0]) ? rawArr : [rawArr];

        segments.forEach((arr, segIndex) => {
            pointsGroup
                .selectAll(`circle.point-${zoneKey}-${segIndex}`)
                .data(
                    arr
                        .map((p, index) => ({
                            ...p,
                            index,
                            segmentIndex: segIndex,
                            zoneKey,
                        }))
                        .filter((p) => !isExtremity(p))
                        .filter((p) => {
                            if (!hasExplicit) return true;
                            // Only show points shared between two zones
                            const key = `${p.dj},${p.q}`;
                            let count = 0;
                            if (greenCoords.has(key)) count++;
                            if (yellowCoords.has(key)) count++;
                            if (redCoords.has(key)) count++;
                            return count >= 2;
                        })
                )
                .enter()
                .append("circle")
                .attr("class", `point-${zoneKey}-${segIndex}`)
                .attr("cx", (d) => x(d.dj))
                .attr("cy", (d) => y(d.q))
                .attr("r", (d) =>
                    isSelectedPoint(selectedPoint, riverKey, panelKey, zoneKey, d.segmentIndex, d.index)
                        ? 6
                        : 4
                )
                .attr("fill", (d) => {
                    if (!hasExplicit) {
                        // Legacy mode: greenYellow = light blue, yellowRed = dark blue
                        return zoneKey === "greenYellow" ? "#2563eb" : "#1e3a8a";
                    }
                    // Explicit mode: color by boundary membership
                    const key = `${d.dj},${d.q}`;
                    const onGY = greenCoords.has(key) && yellowCoords.has(key);
                    const onYR = yellowCoords.has(key) && redCoords.has(key);
                    if (onYR) return "#1e3a8a"; // dark blue (yellow-red boundary)
                    return "#2563eb"; // light blue (green-yellow boundary or default)
                })
                .attr("stroke", (d) =>
                    isSelectedPoint(selectedPoint, riverKey, panelKey, zoneKey, d.segmentIndex, d.index)
                        ? "#f97316"
                        : "#ffffff"
                )
                .attr("stroke-width", 2)
                .style("cursor", "pointer")
                .style("pointer-events", "all")
                .on("click", (event, d) => {
                    event.stopPropagation();
                    const cfg = riverConfigs[riverKey];
                    const zonesLocal =
                        panelKey === "djgc" ? cfg.djgcZones : cfg.djdcZones;

                    const hasExplicitLocal = zonesLocal.green || zonesLocal.yellow || zonesLocal.red;
                    const allKeys = hasExplicitLocal
                        ? ["green", "yellow", "red"]
                        : ["greenYellow", "yellowRed"];

                    // collect ALL overlapping points in this panel (all boundaries)
                    const same = [];
                    allKeys.forEach((zKey) => {
                        const rawLocal = zonesLocal[zKey];
                        if (!rawLocal || rawLocal.length === 0) return;
                        const segmentsLocal = Array.isArray(rawLocal[0]) ? rawLocal : [rawLocal];

                        segmentsLocal.forEach((arrLocal, sIdx) => {
                            arrLocal.forEach((p, i) => {
                                if (p.dj === d.dj && p.q === d.q) {
                                    same.push({ zoneKey: zKey, segmentIndex: sIdx, index: i });
                                }
                            });
                        });
                    });

                    let chosen;
                    if (same.length === 0) {
                        chosen = { zoneKey: d.zoneKey, segmentIndex: d.segmentIndex, index: d.index };
                    } else if (same.length === 1) {
                        chosen = same[0];
                    } else {
                        if (
                            selectedPoint &&
                            selectedPoint.riverKey === riverKey &&
                            selectedPoint.panelKey === panelKey
                        ) {
                            const currentPos = same.findIndex(
                                (p) =>
                                    p.zoneKey === selectedPoint.zone &&
                                    p.segmentIndex === selectedPoint.segmentIndex &&
                                    p.index === selectedPoint.index
                            );
                            if (currentPos !== -1) {
                                chosen = same[(currentPos + 1) % same.length];
                            } else {
                                chosen = same[0];
                            }
                        } else {
                            chosen = same[0];
                        }
                    }

                    const newSelectedPoint = {
                        riverKey,
                        panelKey,
                        zone: chosen.zoneKey,
                        segmentIndex: chosen.segmentIndex,
                        index: chosen.index,
                    };

                    if (onPointSelect) {
                        onPointSelect(newSelectedPoint);
                    }
                });
        });
    });
}

function drawPanel(
    g,
    zones,
    x,
    y,
    panelWidth,
    panelHeight,
    xTicks,
    qMajorTicks,
    qGridTicks,
    qBank,
    showYAxisLabels,
    yAxisPosition = "left", // "left" or "right"
    clipPathId = null
) {
    // background
    g.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", panelWidth)
        .attr("height", panelHeight)
        .attr("fill", "#ffffff")
        .attr("stroke", "#000")
        .style("pointer-events", "none");

    // CLIPPED CONTENT GROUP
    const gClipped = g.append("g");
    if (clipPathId) {
        gClipped.attr("clip-path", `url(#${clipPathId})`);
    }

    // horizontal grid – minor (logarithmic)
    const gyMinor = gClipped.append("g").attr("class", "grid-y-minor");
    gyMinor
        .call(
            d3
                .axisLeft(y)
                .tickValues(qGridTicks)
                .tickSize(-panelWidth)
                .tickFormat("")
        );
    gyMinor.selectAll("line").attr("stroke", "#e5e7eb");
    gyMinor.select(".domain").remove();

    // horizontal grid – major
    const gyMajor = gClipped.append("g").attr("class", "grid-y-major");
    gyMajor
        .call(
            d3
                .axisLeft(y)
                .tickValues(qMajorTicks)
                .tickSize(-panelWidth)
                .tickFormat("")
        );
    gyMajor.selectAll("line")
        .attr("stroke", "#d1d5db")
        .attr("stroke-width", 1);
    gyMajor.select(".domain").remove();

    // zones (polygons)
    if (zones) {
        const lineGen = d3
            .line()
            .defined(d => !isNaN(d.dj) && !isNaN(d.q) && d.q > 0)
            .x((d) => x(d.dj))
            .y((d) => y(d.q));

        const rawGY = zones.greenYellow || [];
        const rawYR = zones.yellowRed || [];
        
        const segmentsGY = (rawGY.length > 0 && Array.isArray(rawGY[0])) ? rawGY : (rawGY.length > 0 ? [rawGY] : []);
        const segmentsYR = (rawYR.length > 0 && Array.isArray(rawYR[0])) ? rawYR : (rawYR.length > 0 ? [rawYR] : []);
        
        const maxSegments = Math.max(segmentsGY.length, segmentsYR.length);

        let greenPaths = "";
        let yellowPaths = "";
        let redPaths = "";

        if (zones.green || zones.yellow || zones.red) {
            const addExplicitPaths = (rawZones, pathStr) => {
                if (!rawZones || rawZones.length === 0) return pathStr;
                const arr = Array.isArray(rawZones[0]) ? rawZones : [rawZones];
                arr.forEach(poly => {
                    if (poly && poly.length > 0) {
                        pathStr += lineGen(poly) + "Z ";
                    }
                });
                return pathStr;
            };
            greenPaths = addExplicitPaths(zones.green, greenPaths);
            yellowPaths = addExplicitPaths(zones.yellow, yellowPaths);
            redPaths = addExplicitPaths(zones.red, redPaths);
        } else {
            // Bottom green area is below the very first GY segment
            if (segmentsGY.length > 0 && segmentsGY[0]) {
                const greenPoly = buildPolygonBelow(segmentsGY[0], y.domain()[0]);
                if (greenPoly.length > 0) {
                    greenPaths += lineGen(greenPoly) + "Z ";
                }
            }

            for (let i = 0; i < maxSegments; i++) {
                const gy = segmentsGY[i];
                const yr = segmentsYR[i];

                if (gy && yr) {
                    const yellowPoly = buildPolygonBetween(gy, yr);
                    if (yellowPoly.length > 0) {
                        yellowPaths += lineGen(yellowPoly) + "Z ";
                    }
                }

                if (yr) {
                    const nextGy = segmentsGY[i + 1];
                    if (nextGy) {
                        // Middle red area between current YR and next GY
                        const redPoly = buildPolygonBetween(yr, nextGy);
                        if (redPoly.length > 0) {
                            redPaths += lineGen(redPoly) + "Z ";
                        }
                    } else {
                        // Top red area above the final YR
                        const redPoly = buildPolygonAbove(yr, y.domain()[1]);
                        if (redPoly.length > 0) {
                            redPaths += lineGen(redPoly) + "Z ";
                        }
                    }
                }
            }
        }

        if (greenPaths) {
            gClipped.append("path")
                .attr("d", greenPaths.trim())
                .attr("fill", "rgba(29,211,29,0.53)")
                .attr("fill-rule", "nonzero")
                .style("pointer-events", "none");
        }
        if (yellowPaths) {
            gClipped.append("path")
                .attr("d", yellowPaths.trim())
                .attr("fill", "rgba(246,240,26,0.53)")
                .attr("fill-rule", "nonzero")
                .style("pointer-events", "none");
        }
        if (redPaths) {
            gClipped.append("path")
                .attr("d", redPaths.trim())
                .attr("fill", "rgba(255,0,0,0.53)")
                .attr("fill-rule", "nonzero")
                .style("pointer-events", "none");
        }
    }

    // vertical grid (linear in DJ)
    // Filter configured ticks to only those within the current domain (handles focus mode)
    const [xDomMin, xDomMax] = x.domain();
    const validXTicks = xTicks ? xTicks.filter(t => t >= xDomMin && t <= xDomMax) : [];
    const effectiveXTicks = validXTicks.length > 0 ? validXTicks : x.ticks(6);

    const gxGrid = gClipped
        .append("g")
        .attr("class", "grid-x")
        .attr("transform", `translate(0,${panelHeight})`);
    gxGrid
        .call(
            d3
                .axisBottom(x)
                .tickValues(effectiveXTicks)
                .tickSize(-panelHeight)
                .tickFormat("")
        );
    gxGrid.selectAll("line").attr("stroke", "#e5e7eb");
    gxGrid.select(".domain").remove();

    // X-axis (OUTSIDE CLIP)
    const xAxis = d3
        .axisBottom(x)
        .tickValues(effectiveXTicks)
        .tickFormat(d3.format("~g"));

    g.append("g")
        .attr("transform", `translate(0,${panelHeight})`)
        .call(xAxis);

    // Y-axis (OUTSIDE CLIP)
    let yAxis;
    if (yAxisPosition === "right") {
        yAxis = d3.axisRight(y);
    } else {
        yAxis = d3.axisLeft(y);
    }

    yAxis
        .tickValues(qMajorTicks)
        .tickFormat(showYAxisLabels ? d3.format("~g") : () => "");

    const yAxisGroup = g.append("g").call(yAxis);

    if (yAxisPosition === "right") {
        yAxisGroup.attr("transform", `translate(${panelWidth}, 0)`);
    }

    // reference line (bankfull Q) - INSIDE CLIP
    if (!isNaN(qBank)) {
        gClipped.append("line")
            .attr("x1", 0)
            .attr("x2", panelWidth)
            .attr("y1", y(qBank))
            .attr("y2", y(qBank))
            .attr("stroke", "#000")
            .attr("stroke-dasharray", "6,4");
    }

    return gClipped;
    // Return clipped group for adding overlay data like curves/points.
    // Important: We need this group to add the new content (scatter points / envelopes).
}

// Internal function to render a single chart
function renderChart(svgId, limits, data, showControlPoints, selectedPoint, onPointSelect, riverKey, cfg) {
    const svg = d3.select("#" + svgId);
    if (svg.empty()) return;

    const { qMin, qMax, djgcMin = 0, djgcMax, djdcMin = 0, djdcMax, qBank } = limits;

    // unpack data - might be old array format OR new object format
    let points = [];
    let envelopes = [];
    if (Array.isArray(data)) {
        points = data; // fallback for backward compatibility
    } else if (data && typeof data === 'object') {
        points = data.points || [];
        envelopes = data.envelopes || [];
    }

    // FILTER OUT INVALID POINTS to ensure continuous line
    // Log scale requires Q > 0. Remove NaNs.
    points = points.filter(d =>
        typeof d.q === 'number' && d.q > 0 && !isNaN(d.q) &&
        typeof d.djgc === 'number' && !isNaN(d.djgc)
    );

    let width = parseFloat(svg.attr("width"));
    let height = parseFloat(svg.attr("height"));

    if (isNaN(width) || isNaN(height)) {
        const viewBox = svg.attr("viewBox");
        if (viewBox) {
            const parts = viewBox.split(" ");
            width = parseFloat(parts[2]);
            height = parseFloat(parts[3]);
        } else {
            width = 900;
            height = 450;
        }
    }
    const panelWidth = (width - margin.left - margin.right - midGap) / 2;
    const panelHeight = height - margin.top - margin.bottom;

    svg.selectAll("*").remove();

    // Define Clip Path
    const clipId = "clip-" + svgId;
    svg.append("defs").append("clipPath")
        .attr("id", clipId)
        .append("rect")
        .attr("width", panelWidth)
        .attr("height", panelHeight);

    const gRoot = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Ensure qMin is positive for log scale
    const safeQMin = qMin > 0 ? qMin : 0.1;

    const y = d3
        .scaleLog()
        .domain([safeQMin, qMax])
        .range([panelHeight, 0]);

    // Major ticks: labels for 1, 2, 5
    const qMajorTicks = y.ticks(30).filter((v) => {
        if (v < safeQMin || v > qMax) return false;
        const log10 = Math.log10(v);
        const base = Math.pow(10, Math.floor(log10));
        const significant = Math.round(v / base);
        return [1, 2, 5].includes(significant);
    });

    // Grid ticks: more detailed (all 1-9)
    const qGridTicks = y.ticks(30).filter(
        (v) => v >= safeQMin && v <= qMax
    );

    const showYLabels = true;

    // Left panel (DJGC)
    const gLeft = gRoot.append("g").attr("transform", "translate(0,0)");
    const xDJGC = d3.scaleLinear().domain([djgcMin, djgcMax]).range([0, panelWidth]);

    const gLeftClipped = drawPanel(
        gLeft,
        cfg.djgcZones,
        xDJGC,
        y,
        panelWidth,
        panelHeight,
        cfg.djgcTicks,
        qMajorTicks,
        qGridTicks,
        qBank,
        showYLabels,
        "left",
        clipId
    );

    // Right panel (DJDC-5)
    const gRight = gRoot
        .append("g")
        .attr("transform", `translate(${panelWidth + midGap},0)`);
    const xDJDC = d3.scaleLinear().domain([djdcMin, djdcMax]).range([0, panelWidth]);

    const gRightClipped = drawPanel(
        gRight,
        cfg.djdcZones,
        xDJDC,
        y,
        panelWidth,
        panelHeight,
        cfg.djdcTicks,
        qMajorTicks,
        qGridTicks,
        qBank,
        showYLabels,
        "right",
        clipId
    );

    // --- DRAW DATA (New Structure: Historical, Latest, Prediction) ---

    // Unpack new structure (with safety check)
    const safeData = data || {};
    const historical = safeData.historical || [];
    const latest = safeData.latest || null;
    const prediction = safeData.prediction || [];

    // Helper to draw on correct panel based on phase
    const drawOnPanel = (item, type) => {
        // type: 'hist', 'latest', 'pred'
        if (!item) return;

        const phase = item.phase; // "DJGC" or "DJDC5"
        // Decide panel
        let panelG = null;
        let xScale = null;

        if (phase === "DJGC") {
            panelG = gLeftClipped;
            xScale = xDJGC;
        } else {
            panelG = gRightClipped;
            xScale = xDJDC;
        }

        if (!panelG) return;

        if (type === 'hist') {
            // No longer drawing individual circles for historical points
            // so it looks like a continuous line.
        } else if (type === 'latest') {
            panelG.append("circle")
                .attr("cx", xScale(item.dj))
                .attr("cy", y(item.q))
                .attr("r", 5)
                .attr("fill", "white")
                .attr("stroke", "#3b82f6") // Blue to match the line
                .attr("stroke-width", 2);
        }
    };

    // Combine historical and latest to draw a continuous line
    const allObserved = [...historical];
    if (latest) allObserved.push(latest);

    // Group allObserved by phase
    const obsByPhase = { DJGC: [], DJDC5: [] };
    allObserved.forEach(d => {
        if (d.phase === "DJGC") obsByPhase.DJGC.push(d);
        else if (d.phase === "DJDC5") obsByPhase.DJDC5.push(d);
    });

    // Draw connecting lines for observed points
    Object.keys(obsByPhase).forEach(phase => {
        const pts = obsByPhase[phase];
        if (pts.length > 1) {
            const pG = phase === "DJGC" ? gLeftClipped : gRightClipped;
            const pX = phase === "DJGC" ? xDJGC : xDJDC;

            const lineGen = d3.line()
                .defined(d => !isNaN(d.dj) && !isNaN(d.q) && d.q > 0)
                .x(d => pX(d.dj))
                .y(d => y(d.q));

            pG.append("path")
                .datum(pts)
                .attr("fill", "none")
                .attr("stroke", "#3b82f6") // Blue
                .attr("stroke-opacity", 1.0)
                .attr("stroke-width", 2)
                .attr("d", lineGen);
        }
    });

    // 1. Draw Historical (Black points)
    historical.forEach(d => drawOnPanel(d, 'hist'));

    // 2. Draw Latest (White point)
    if (latest) drawOnPanel(latest, 'latest');

    // 3. Draw Prediction (Blue Line + Area)
    // Prediction might cross phases? Usually 7-day is same phase. 
    // If it crosses, we'd need to split it. Assuming same phase for now as per `poll_daily` logic.
    if (prediction.length > 0) {
        let activePrediction = [...prediction];
        const predPhase = activePrediction[0].phase;

        let connectPt = null;
        if (latest && latest.phase === predPhase) {
            connectPt = latest;
        } else {
            const hPts = historical.filter(d => d.phase === predPhase);
            if (hPts.length > 0) {
                connectPt = hPts[hPts.length - 1];
            }
        }

        if (connectPt) {
            activePrediction.unshift({
                date: connectPt.date || "connect",
                dj: connectPt.dj,
                q: connectPt.q,
                q25: connectPt.q, // Narrow area to an exact point here
                q75: connectPt.q,
                phase: connectPt.phase
            });
        }

        let pG = null;
        let pX = null;
        if (predPhase === "DJGC") {
            pG = gLeftClipped;
            pX = xDJGC;
        } else {
            pG = gRightClipped;
            pX = xDJDC;
        }

        if (pG) {
            // Segment-by-segment band drawing to handle decreasing DJ values
            // and avoid the global self-folding polygon artifact caused by d3.area().
            for (let i = 0; i < activePrediction.length - 1; i++) {
                const a = activePrediction[i];
                const b = activePrediction[i + 1];

                const isValid = (pt) => !isNaN(pt.dj) && !isNaN(pt.q25) && !isNaN(pt.q75) && pt.q25 > 0 && pt.q75 > 0;

                if (isValid(a) && isValid(b)) {
                    const quad = [
                        { dj: a.dj, q: a.q25 },
                        { dj: b.dj, q: b.q25 },
                        { dj: b.dj, q: b.q75 },
                        { dj: a.dj, q: a.q75 }
                    ];

                    const quadPath = d3.line()
                        .x(d => pX(d.dj))
                        .y(d => y(d.q));

                    pG.append("path")
                        .datum(quad)
                        .attr("fill", "#3b82f6") // Blue-500
                        .attr("fill-opacity", 0.3)
                        .attr("d", quadPath(quad) + "Z")
                        .attr("stroke", "none");
                }
            }

            // Boundary line for q25
            const lineGenQ25 = d3.line()
                .defined(d => !isNaN(d.dj) && !isNaN(d.q25) && d.q25 > 0)
                .x(d => pX(d.dj))
                .y(d => y(d.q25));

            pG.append("path")
                .datum(activePrediction)
                .attr("fill", "none")
                .attr("stroke", "#3b82f6")
                .attr("stroke-opacity", 0.3)
                .attr("stroke-width", 1)
                .attr("d", lineGenQ25);

            // Boundary line for q75
            const lineGenQ75 = d3.line()
                .defined(d => !isNaN(d.dj) && !isNaN(d.q75) && d.q75 > 0)
                .x(d => pX(d.dj))
                .y(d => y(d.q75));

            pG.append("path")
                .datum(activePrediction)
                .attr("fill", "none")
                .attr("stroke", "#3b82f6")
                .attr("stroke-opacity", 0.3)
                .attr("stroke-width", 1)
                .attr("d", lineGenQ75);

            // Line (Median)
            const lineGen = d3.line()
                .defined(d => !isNaN(d.dj) && !isNaN(d.q) && d.q > 0)
                .x(d => pX(d.dj))
                .y(d => y(d.q));

            pG.append("path")
                .datum(activePrediction)
                .attr("fill", "none")
                .attr("stroke", "#000000") // Black colored median line
                .attr("stroke-width", 2)
                .attr("d", lineGen);
        }
    }

    if (showControlPoints) {
        // Control points
        drawControlPoints(gLeftClipped, cfg.djgcZones, xDJGC, y, riverKey, "djgc", selectedPoint, onPointSelect);
        drawControlPoints(gRightClipped, cfg.djdcZones, xDJDC, y, riverKey, "djdc", selectedPoint, onPointSelect);
    }

    // Axis titles
    gLeft
        .append("text")
        .attr("x", panelWidth / 2)
        .attr("y", panelHeight + 45)
        .attr("text-anchor", "middle")
        .attr("font-size", 12)
        .text(t("axis.djgc"));

    gRight
        .append("text")
        .attr("x", panelWidth / 2)
        .attr("y", panelHeight + 45)
        .attr("text-anchor", "middle")
        .attr("font-size", 12)
        .text(t("axis.djdc"));

    gLeft
        .append("text")
        .attr("transform", `rotate(-90)`)
        .attr("x", -panelHeight / 2)
        .attr("y", -50)
        .attr("text-anchor", "middle")
        .attr("font-size", 12)
        .text(t("axis.q"));

    // Title / Last updated text
    if (safeData && safeData.lastUpdated) {
        let displayTime = safeData.lastUpdated;
        const parts = displayTime.split(" ");
        if (parts.length === 2) {
            displayTime = t("chart.timeFormat", { date: parts[0], time: parts[1] });
        }
        gRoot.append("text")
            .attr("x", (panelWidth * 2 + midGap) / 2)
            .attr("y", -5)
            .attr("text-anchor", "middle")
            .attr("font-size", 14)
            .attr("fill", "#6b7280")
            .text(t("chart.lastUpdated", { time: displayTime }));
    }
}

export function drawDiagram(selectedPoint, showControlPoints, onPointSelect, data) {
    const riverKey = document.getElementById("riverSelect").value;
    const cfg = riverConfigs[riverKey];

    const configQMin = parseFloat(document.getElementById("qMin").value) || cfg.qMin;
    const configQMax = parseFloat(document.getElementById("qMax").value) || cfg.qMax;
    const configDJGCMax = parseFloat(document.getElementById("djgcMax").value) || cfg.djgcMax;
    const configDJDCMax = parseFloat(document.getElementById("djdcMax").value) || cfg.djdcMax;
    const configQBank = cfg.qBankfull;

    let limits = {
        qMin: configQMin, qMax: configQMax,
        djgcMin: 0, djgcMax: configDJGCMax,
        djdcMin: 0, djdcMax: configDJDCMax,
        qBank: configQBank
    };

    function filterLeadingZeros(pts) {
        if (!pts || pts.length === 0) return pts;
        const firstNonZero = pts.findIndex(p => p.dj !== 0);
        if (firstNonZero === -1) return pts.slice(-1);
        if (firstNonZero > 0) return pts.slice(firstNonZero - 1);
        return pts;
    }

    let chartData = data;
    if (data) {
        if (Array.isArray(data)) {
            const phases = [...new Set(data.map(d => d.phase))];
            chartData = phases.flatMap(phase => 
                filterLeadingZeros(data.filter(d => d.phase === phase))
            );
        } else if (typeof data === 'object' && data.historical) {
            const phases = [...new Set(data.historical.map(d => d.phase))];
            chartData = {
                ...data,
                historical: phases.flatMap(phase => 
                    filterLeadingZeros(data.historical.filter(d => d.phase === phase))
                )
            };
        }
    }

    const isFocused = document.getElementById("focusObservedBtn")?.classList.contains("active");

    if (isFocused && chartData) {
        const safeData = chartData || {};
        const all = Array.isArray(chartData) ? chartData : [
            ...(safeData.historical || []),
            ...(safeData.latest ? [safeData.latest] : []),
            // include median prediction line
            ...(safeData.prediction || []),
        ];

        const validQ = [];
        all.forEach(d => {
            if (d.q > 0 && !isNaN(d.q)) validQ.push(d.q);
            if (d.q25 > 0 && !isNaN(d.q25)) validQ.push(d.q25);
            if (d.q75 > 0 && !isNaN(d.q75)) validQ.push(d.q75);
        });

        const djgcPts = all.filter(d => d.phase === "DJGC").map(d => d.dj).filter(x => !isNaN(x));
        const djdcPts = all.filter(d => d.phase === "DJDC5").map(d => d.dj).filter(x => !isNaN(x));

        if (validQ.length > 0) {
            const rawMin = d3.min(validQ);
            const rawMax = d3.max(validQ);
            // Multiplicative padding on log scale
            limits.qMin = rawMin / 1.5;
            limits.qMax = rawMax * 1.5;
        }

        if (djgcPts.length > 0) {
            const rawMin = d3.min(djgcPts);
            const rawMax = d3.max(djgcPts);
            const pad = Math.max((rawMax - rawMin) * 0.15, 10);
            limits.djgcMin = Math.max(0, rawMin - pad);
            limits.djgcMax = Math.min(configDJGCMax, rawMax + pad);
        }

        if (djdcPts.length > 0) {
            const rawMin = d3.min(djdcPts);
            const rawMax = d3.max(djdcPts);
            const pad = Math.max((rawMax - rawMin) * 0.15, 5);
            limits.djdcMin = Math.max(0, rawMin - pad);
            limits.djdcMax = Math.min(configDJDCMax, rawMax + pad);
        }
    }

    renderChart("diagram", limits, chartData, showControlPoints, selectedPoint, onPointSelect, riverKey, cfg);
}
