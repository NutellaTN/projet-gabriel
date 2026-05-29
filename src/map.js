import './style.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { riverConfigs } from './river-data.js';
import { subscribeToSeasonData } from './firestore-service.js';
import { getRiverZone } from './zone-logic.js';
import { t, setLanguage, getCurrentLanguage, translateDOM } from './i18n.js';
import './firebase-config.js'; // Initialize Firebase

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(getCurrentLanguage());

    const map = L.map('map').setView([47.5, -71.5], 6);

    // CartoDB Voyager Tiles (Light Mode)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Load and add watersheds
    fetch('/data/watersheds.geojson')
        .then(response => response.json())
        .then(data => {
            // Sort features descending by bounding box area so smaller embedded/nested watersheds are drawn on top
            if (data && data.features) {
                const getBBoxArea = (feature) => {
                    if (!feature.geometry || !feature.geometry.coordinates) return Infinity;
                    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
                    
                    const processCoords = (coords) => {
                        if (typeof coords[0] === 'number') {
                            const [x, y] = coords;
                            if (x < minX) minX = x;
                            if (x > maxX) maxX = x;
                            if (y < minY) minY = y;
                            if (y > maxY) maxY = y;
                        } else {
                            coords.forEach(processCoords);
                        }
                    };
                    
                    processCoords(feature.geometry.coordinates);
                    return (maxX - minX) * (maxY - minY);
                };
                
                data.features.sort((a, b) => getBBoxArea(b) - getBBoxArea(a));
            }

            L.geoJSON(data, {
                interactive: false,
                style: {
                    color: '#000000', // solid dark black boundary
                    weight: 2.5,
                    opacity: 0.85,
                    fillOpacity: 0.02 // highly transparent fill so nested layers are perfectly visible
                }
            }).addTo(map);
        })
        .catch(error => console.error('Error loading watersheds:', error));

    // Load and add river paths
    fetch('/data/river_paths.geojson')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                interactive: false,
                style: {
                    color: '#38bdf8', // Sky blue for rivers
                    weight: 3,
                    opacity: 0.8
                }
            }).addTo(map);
        })
        .catch(error => console.error('Error loading river paths:', error));


    // Colors for the markers
    const zoneColors = {
        green: '#22c55e',
        yellow: '#eab308',
        red: '#ef4444',
        none: '#94a3b8' // gray
    };

    const markers = {};
    const listContainer = document.getElementById("riverStatusList");

    Object.keys(riverConfigs).forEach(riverKey => {
        const config = riverConfigs[riverKey];
        if (config.lat && config.lon) {
            const marker = L.circleMarker([config.lat, config.lon], {
                radius: 10,
                fillColor: zoneColors.none,
                color: '#fff',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.9
            }).addTo(map);

            marker.on('click', () => {
                window.location.href = `diagram.html?river=${riverKey}`;
            });

            // Add a tooltip/popup
            marker.bindTooltip(`<b>${config.label}</b><br>Chargement...`, { direction: 'top' });

            markers[riverKey] = marker;

            // Create Sidebar Item
            let sidebarItem = null;
            let sidebarQ = null;
            let sidebarDot = null;

            if (listContainer) {
                sidebarItem = document.createElement("div");
                sidebarItem.className = "river-status-item";
                sidebarItem.setAttribute("id", `sidebar-item-${riverKey}`);
                sidebarItem.setAttribute("title", t("legend.nodata")); // Default fallback

                const nameEl = document.createElement("span");
                nameEl.className = "river-name";
                nameEl.setAttribute("data-i18n", `river.${riverKey}`);
                nameEl.textContent = t(`river.${riverKey}`) || config.label;
                sidebarItem.appendChild(nameEl);

                const metaEl = document.createElement("div");
                metaEl.className = "river-meta";

                sidebarQ = document.createElement("span");
                sidebarQ.className = "river-q";
                sidebarQ.textContent = "- m³/s";
                metaEl.appendChild(sidebarQ);

                sidebarDot = document.createElement("span");
                sidebarDot.className = "dot gray";
                metaEl.appendChild(sidebarDot);

                sidebarItem.appendChild(metaEl);
                listContainer.appendChild(sidebarItem);

                // Sidebar item click action: fly-to on map and open its tooltip
                sidebarItem.addEventListener("click", () => {
                    map.flyTo([config.lat, config.lon], 9, {
                        animate: true,
                        duration: 1.2
                    });
                    marker.openTooltip();
                });
            }

            // Subscribe to data
            subscribeToSeasonData(riverKey, (data) => {
                const lang = getCurrentLanguage();
                const translatedName = t(`river.${riverKey}`) || config.label;
                
                if (data && data.latest) {
                    const zone = getRiverZone(riverKey, data.latest);
                    const color = zone ? zoneColors[zone] : zoneColors.none;
                    
                    marker.setStyle({ fillColor: color });
                    
                    let statusText = lang === 'fr' ? 'Hors de la zone' : 'Outside of the zone';
                    if (zone === 'green') statusText = lang === 'fr' ? 'Sécuritaire' : 'Safe';
                    if (zone === 'yellow') statusText = lang === 'fr' ? 'Surveiller' : 'Monitor';
                    if (zone === 'red') statusText = lang === 'fr' ? 'Critique' : 'Critical';
                    
                    marker.setTooltipContent(`<b>${translatedName}</b><br>Status: ${statusText}<br>Q: ${data.latest.q} m³/s`);
                    
                    // Update Sidebar
                    if (sidebarQ) sidebarQ.textContent = `${data.latest.q} m³/s`;
                    if (sidebarDot) sidebarDot.className = `dot ${zone || 'gray'}`;
                    if (sidebarItem) sidebarItem.setAttribute("title", `Status: ${statusText} | Q: ${data.latest.q} m³/s`);
                } else {
                    marker.setStyle({ fillColor: zoneColors.none });
                    marker.setTooltipContent(`<b>${translatedName}</b><br>${lang === 'fr' ? 'Hors de la zone' : 'Outside of the zone'}`);
                    
                    // Update Sidebar
                    if (sidebarQ) sidebarQ.textContent = t("map.sidebar.nodata");
                    if (sidebarDot) sidebarDot.className = "dot gray";
                    if (sidebarItem) sidebarItem.setAttribute("title", lang === 'fr' ? 'Hors de la zone' : 'Outside of the zone');
                }
            });
        }
    });

    // Translation toggle
    document.getElementById('langToggleBtn').addEventListener('click', () => {
        const nextLang = getCurrentLanguage() === 'fr' ? 'en' : 'fr';
        setLanguage(nextLang);
        translateDOM();
    });
});
