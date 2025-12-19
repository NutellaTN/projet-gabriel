# Ice Breakup Monitor (Projet Gabriel)

This project is a real-time monitoring tool for river ice breakup, visualizing the relationship between discharge (Q) and cumulative thermal indices (DJGC and DJDC-5) to predict potential flooding risks.

## Project Structure

- **`index.html`**: The main entry point. It defines the layout, including the configuration sidebar and the main visualization area.
- **`src/`**: Contains the source code.
    - **`main.js`**: The application controller. It initializes the app, handles UI events (river selection, button clicks, shape editing), and orchestrates data loading and chart rendering.
    - **`style.css`**: The stylesheet. It uses a CSS variable-based design system for a dark/glassmorphism UI. It includes responsive styles for mobile devices.
    - **`river-data.js`**: Configuration file containing static data for each river (Label, Axis limits, Zone definitions for Green/Yellow/Red regions).
    - **`chart.js`**: The visualization engine using **D3.js**. It renders the two-panel chart (Freezing Index vs. Q, Thawing Index vs. Q) and handles the "zones" polygons and control points.
    - **`data-import.js`**: Utilities for fetching and processing raw data (Discharge and Temperature). It contains the core algorithms for calculating thermal indices.
    - **`firebase-config.js`**: Configuration for Firebase Analytics.

## Algorithms

### Thermal Indices Calculation (`data-import.js`)

The application calculates two key indices from daily mean temperature ($T_{mean}$) to assess ice cover stability, using **separate start dates**:

1.  **DJGC (Degrés-Jours de Gel Cumulés - Cumulative Freezing Degree-Days)**:
    - Measures the severity of the winter.
    - **Start Date**: typically Oct 15.
    - **Formula**:
        - If $T_{mean} < 0$: Add $|T_{mean}|$ to the cumulative sum.
        - If $T_{mean} > 0$: Subtract $T_{mean}$ from the sum (bounded at 0).
    - This index generally increases during winter and decreases as spring approaches.

2.  **DJDC-5 (Degrés-Jours de Dégel Cumulés > -5°C - Cumulative Thawing Degree-Days)**:
    - Measures the intensity of the thaw/melting period relative to a threshold of -5°C.
    - **Start Date**: typically Feb 15.
    - **Formula**:
        - Calculate $\Delta = T_{mean} - (-5)$.
        - If $\Delta > 0$: Add $\Delta$ to the cumulative sum.
        - If $\Delta < 0$: Subtract $|\Delta|$ from the sum (bounded at 0).
    - Before the start date, this index is forced to 0.

### Visualization (`chart.js`)

The chart is a dual-panel logarithmic plot:
- **Left Panel**: Discharge ($Q$) vs. DJGC. (Winter phase)
- **Right Panel**: Discharge ($Q$) vs. DJDC-5. (Spring/Breakup phase)

Both panels include:
- **Zones**: Defined by polygons (Green = Safe, Yellow = Monitor, Red = Critical).
- **Control Points**: Draggable vertices that define the boundaries between zones (when enabled).
- **Historical Data**: Real-time or historical series plotted as a line.

## Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run the development server:
    ```bash
    npm run dev
    ```
3.  Open the local URL (usually `http://localhost:5173`).

## Configuration

River configurations are stored in `src/river-data.js`. To add a new river, add a new entry to the `riverConfigs` object with the required axis limits and zone coordinates.
