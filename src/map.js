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

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Colors for the markers
    const zoneColors = {
        green: '#22c55e',
        yellow: '#eab308',
        red: '#ef4444',
        none: '#94a3b8' // gray
    };

    const markers = {};

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

            // Subscribe to data
            subscribeToSeasonData(riverKey, (data) => {
                const lang = getCurrentLanguage();
                if (data && data.latest) {
                    const zone = getRiverZone(riverKey, data.latest);
                    const color = zone ? zoneColors[zone] : zoneColors.none;
                    
                    marker.setStyle({ fillColor: color });
                    
                    let statusText = lang === 'fr' ? 'Aucune donnée' : 'No active zone';
                    if (zone === 'green') statusText = lang === 'fr' ? 'Sécuritaire' : 'Safe';
                    if (zone === 'yellow') statusText = lang === 'fr' ? 'Surveiller' : 'Monitor';
                    if (zone === 'red') statusText = lang === 'fr' ? 'Critique' : 'Critical';
                    
                    marker.setTooltipContent(`<b>${config.label}</b><br>Status: ${statusText}<br>Q: ${data.latest.q} m³/s`);
                } else {
                    marker.setStyle({ fillColor: zoneColors.none });
                    marker.setTooltipContent(`<b>${config.label}</b><br>${lang === 'fr' ? 'Aucune donnée récente' : 'No recent data'}`);
                }
            });
        }
    });

    // Translation toggle
    document.getElementById('langToggleBtn').addEventListener('click', () => {
        const nextLang = getCurrentLanguage() === 'fr' ? 'en' : 'fr';
        setLanguage(nextLang);
        // Tooltips will re-render on next hover naturally or on data update, 
        // to force them we'd need to re-assign all tooltips. For simplicity, it's ok.
    });
});
