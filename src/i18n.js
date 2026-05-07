import { riverConfigs } from './river-data.js';

export const translations = {
    fr: {
        // Navbar
        "app.title": "Surveillance de la Débâcle",

        // Sidebar Headers
        "sidebar.config": "Configuration",
        "sidebar.pipeline": "Pipeline de données",
        "sidebar.viewMode": "Mode d'affichage",
        "sidebar.pointEditor": "Éditeur de formes",

        // Config Section
        "config.riverSelect": "Sélectionner la rivière",
        "config.axisParams": "Paramètres des axes",
        "config.qMin": "Q min",
        "config.qMax": "Q max",
        "config.djgcMax": "DJGC max",
        "config.djdcMax": "DJDC-5 max",
        "config.qBankfull": "Q de référence (plein bord)",

        // Pipeline Section
        "pipeline.startBtn": "▶ Lancer la collecte",
        "pipeline.status.pending": "Envoi en cours…",
        "pipeline.status.starting": "Démarrage (recherche de la tâche)…",
        "pipeline.status.running": "Statut : {status}…",
        "pipeline.status.success": "✓ Collecte terminée avec succès !",
        "pipeline.status.failure": "✗ Échec de la collecte ({conclusion})",
        "pipeline.status.error": "✗ Erreur : {message}",
        "pipeline.status.notoken": "⚠ VITE_GITHUB_PAT not set in .env",

        // Redraw Button
        "btn.redraw": "↻ Redessiner le graphique",

        // View Mode Section
        "viewMode.focus": "Focus : Observées",
        "viewMode.reset": "Réinitialiser / Toutes les zones",

        // Point Editor Section
        "editor.showPoints": "Afficher les points",
        "editor.hidePoints": "Masquer",
        "editor.ptDj": "Point DJ",
        "editor.ptQ": "Point Q",
        "editor.updateBtn": "Mettre à jour le point",
        "editor.updateLineBtn": "Mettre à jour la ligne",
        "editor.status.none": "Aucun point sélectionné.",
        "editor.status.selected": "Sélectionné : {river} – {panel}, {zone}, point #{index}",
        "editor.zone.greenYellow": "limite vert/jaune",
        "editor.zone.yellowRed": "limite jaune/rouge",
        "editor.panel.djgc": "Panneau DJGC–Q",
        "editor.panel.djdc": "Panneau DJDC-5–Q",
        "editor.alert.none": "Aucun point sélectionné.",
        "editor.alert.invalid": "Veuillez entrer des valeurs numériques valides pour DJ et Q.",
        "editor.alert.error": "Erreur interne : point introuvable.",

        // Chart & Legend
        "chart.title": "Diagramme de Débâcle",
        "chart.lastUpdated": "Dernière mise à jour : {time}",
        "chart.timeFormat": "{date} à {time}",
        "legend.safe": "Sécuritaire",
        "legend.monitor": "Surveiller",
        "legend.critical": "Critique",
        "legend.observed": "Observées",
        "axis.djgc": "DJGC (°C·d)",
        "axis.djdc": "DJDC -5 °C (°C·d)",
        "axis.q": "Q (m³/s)",

        // Rivers
        "river.lassomption": "Rivière L'Assomption",
        "river.montmorency": "Rivière Montmorency",
        "river.chaudiere": "Rivière Chaudière",
        "river.chateauguay": "Rivière Châteauguay",
        "river.matane": "Rivière Matane",
        "river.matapedia": "Rivière Matapédia",
        "river.mistassini": "Rivière Mistassini",
        "river.saintfrancois": "Rivière Saint-François",
        "river.sainteanne": "Rivière Sainte-Anne",
        "river.beaurivage": "Rivière Beaurivage",
        "river.becancour": "Rivière Bécancour",
        "river.eaton": "Rivière Eaton",
        "river.etchemin": "Rivière Etchemin",
        "river.saintcharles": "Rivière Saint-Charles"
    },
    en: {
        // Navbar
        "app.title": "Ice Breakup Monitoring",

        // Sidebar Headers
        "sidebar.config": "Configuration",
        "sidebar.pipeline": "Data Pipeline",
        "sidebar.viewMode": "View Mode",
        "sidebar.pointEditor": "Shape Editor",

        // Config Section
        "config.riverSelect": "Select River",
        "config.axisParams": "Axis Parameters",
        "config.qMin": "Q min",
        "config.qMax": "Q max",
        "config.djgcMax": "Max DJGC",
        "config.djdcMax": "Max DJDC-5",
        "config.qBankfull": "Reference Q (Bankfull)",

        // Pipeline Section
        "pipeline.startBtn": "▶ Run Data Collection",
        "pipeline.status.pending": "Sending request…",
        "pipeline.status.starting": "Starting (locating task)…",
        "pipeline.status.running": "Status: {status}…",
        "pipeline.status.success": "✓ Collection completed successfully!",
        "pipeline.status.failure": "✗ Collection failed ({conclusion})",
        "pipeline.status.error": "✗ Error: {message}",
        "pipeline.status.notoken": "⚠ VITE_GITHUB_PAT not set in .env",

        // Redraw Button
        "btn.redraw": "↻ Redraw Chart",

        // View Mode Section
        "viewMode.focus": "Focus: Observed",
        "viewMode.reset": "Reset / All Zones",

        // Point Editor Section
        "editor.showPoints": "Show Points",
        "editor.hidePoints": "Hide",
        "editor.ptDj": "DJ Point",
        "editor.ptQ": "Q Point",
        "editor.updateBtn": "Update Point",
        "editor.updateLineBtn": "Update Line",
        "editor.status.none": "No point selected.",
        "editor.status.selected": "Selected: {river} – {panel}, {zone}, point #{index}",
        "editor.zone.greenYellow": "green/yellow boundary",
        "editor.zone.yellowRed": "yellow/red boundary",
        "editor.panel.djgc": "DJGC–Q Panel",
        "editor.panel.djdc": "DJDC-5–Q Panel",
        "editor.alert.none": "No point selected.",
        "editor.alert.invalid": "Please enter valid numeric values for DJ and Q.",
        "editor.alert.error": "Internal error: point not found.",

        // Chart & Legend
        "chart.title": "Breakup Diagram",
        "chart.lastUpdated": "Last updated: {time}",
        "chart.timeFormat": "{date} at {time}",
        "legend.safe": "Safe",
        "legend.monitor": "Monitor",
        "legend.critical": "Critical",
        "legend.observed": "Observed",
        "axis.djgc": "DJGC (°C·d)",
        "axis.djdc": "DJDC -5 °C (°C·d)",
        "axis.q": "Q (m³/s)",

        // Rivers
        "river.lassomption": "L'Assomption River",
        "river.montmorency": "Montmorency River",
        "river.steanne": "Ste-Anne River",
        "river.chateauguay": "Châteauguay River",
        "river.matane": "Matane River",
        "river.matapedia": "Matapédia River",
        "river.mistassini": "Mistassini River",
        "river.saintfrancois": "Saint-François River",
        "river.sainteanne": "Sainte-Anne River",
        "river.beaurivage": "Beaurivage River",
        "river.becancour": "Bécancour River",
        "river.eaton": "Eaton River",
        "river.etchemin": "Etchemin River",
        "river.saintcharles": "Saint-Charles River"
    }
};

let currentLang = 'fr'; // Default

export function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        translateDOM();
        updateLanguageButton();
    }
}

export function getCurrentLanguage() {
    return currentLang;
}

export function t(key, params = {}) {
    let text = translations[currentLang][key] || key;
    for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, v);
    }
    return text;
}

export function translateDOM() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        // Handle input placeholders
        if (el.tagName === 'INPUT' && el.hasAttribute('placeholder') && el.getAttribute('placeholder') !== '-') {
            // In this app, only inputs have a placeholder of '-' which we shouldn't overwrite, 
            // but we don't have placeholders to translate anyway.
        } else {
            // To preserve inner elements like SVGs or icons inside buttons, 
            // we should only replace text nodes, but for our simple case, 
            // we can use innerHTML if we format our keys carefully, or structure the HTML.
            // Actually, letting innerHTML handle it is fine if html contains the icon.
            // But a safer way is to have the data-i18n span inside the button.
            el.textContent = t(key);
        }
    });

    // Special case for options in select if they don't have data-i18n
    // Our index.html options will have data-i18n.

    // Update document title
    document.title = t("chart.title") + " – " + (currentLang === 'fr' ? "Surveillance en Temps Réel" : "Real-time Monitoring");
}

function updateLanguageButton() {
    const btn = document.getElementById('langToggleBtn');
    if (btn) {
        btn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
    }
}
