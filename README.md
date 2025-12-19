# Ice Breakup Monitor (Projet Gabriel)

This project is a real-time monitoring tool for river ice breakup, visualizing the relationship between discharge (Q) and cumulative thermal indices (DJGC and DJDC-5) to predict potential flooding risks.

## Project Structure

- **`index.html`**: The main entry point. It defines the layout, including the configuration sidebar and the main visualization area.
- **`src/`**: Contains the source code.
    - **`main.js`**: The application controller. It initializes the app, handles UI events (river selection, button clicks, shape editing), and orchestrates data loading and chart rendering.
    - **`style.css`**: The stylesheet. It uses a CSS variable-based design system for a dark/glassmorphism UI. It includes responsive styles for mobile devices.
    - **`river-data.js`**: Configuration file containing static data for each river (Label, Axis limits, Zone definitions for Green/Yellow/Red regions).
    - **`chart.js`**: The visualization engine using **D3.js**. It renders the two-panel chart (Freezing Index vs. Q, Thawing Index vs. Q) and handles the "zones" polygons and control points.
    - **`firestore-service.js`**: Client-side service that subscribes to real-time updates from Firebase Firestore.
    - **`data-import.js`**: Legacy utilities for local CSV processing (now largely superseded by Firestore data for real-time views).
    - **`firebase-config.js`**: Configuration for Firebase Analytics and Firestore.
- **`scripts/`**: Backend Python scripts for data fetching and processing.
    - **`poll_daily.py`**: The core data pipeline. Fetches weather data (ECCC/Open-Meteo) and discharge data (CEHQ), calculates thermal indices, forecasts future values, and updates Firestore.
- **`.github/workflows/`**: CI/CD automation.
    - **`poll_daily.yml`**: GitHub Action that runs `poll_daily.py` every day at 16:00 UTC to keep the data fresh.

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

### Backend Setup (Optional)

If you wish to run the data fetching scripts locally:

1.  **Environment Variables**:
    You must set the following environment variables (or provided in a `.env` file or `service-account.json` for local use):
    - `FIREBASE_SA_JSON_B64`: Base64 encoded Service Account JSON for Firebase Admin SDK.
    - `ECCC_CITY_ID`: City ID for Environment Canada weather data (default: `s0000635`).

2.  **Install Python Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

3.  **Run the Poll Script**:
    ```bash
    python scripts/poll_daily.py
    ```

## Data Architecture

The system operates on a **Serverless-Data-Push** model:

1.  **Ingestion**: The `poll_daily.py` script runs automatically via GitHub Actions.
2.  **Processing**: It fetches:
    - **Weather**: ECCC Datamart / Open-Meteo API.
    - **Discharge**: CEHQ (Quebec Hydrology).
    - Calculates the **DJGC** and **DJDC-5** indices based on the active season rules (see Algorithms below).
3.  **Storage**: Processed data (Historical series + 7-day Prediction) is stored in **Firebase Firestore** under `stations/{stationId}/seasons/{seasonId}`.
4.  **Presentation**: The frontend subscribes to this Firestore document. Updates are pushed instantly to connected clients.

## Configuration

River configurations are stored in `src/river-data.js`. To add a new river, add a new entry to the `riverConfigs` object with the required axis limits and zone coordinates.
