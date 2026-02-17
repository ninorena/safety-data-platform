# Safety Data Platform Prototype

An interactive prototype of a data-driven safety platform for transportation engineers and city planners. This MVP demonstrates core capabilities for analyzing crash patterns, identifying high-risk intersections, and recommending evidence-based countermeasures.

## Overview

This prototype provides a clickable, functional interface for exploring traffic safety data. It's designed to support decision-making around crash prevention and Vision Zero initiatives using a safe systems approach.

## Features Implemented

### Dashboard
- **Summary Statistics** – Displays key metrics at a glance:
  - Total crashes in the analysis period
  - Injuries and fatalities
  - Serious injury event counts
- Real data sourced from structured crash records

### Interactive Crash Map
- **Map Visualization** – Geographic plot of all crash incidents using Leaflet and OpenStreetMap
- **Severity Color-Coding** – Crashes color-coded by severity:
  - Red: Fatal crashes
  - Orange: Serious injury crashes
  - Yellow: Injury crashes
  - Blue: Property damage only
- **Incident Details** – Click any marker to view crash specifics (date, time, location, injuries/fatalities)
- **Filtering by Severity** – Toggle visibility of different crash types
- **No API Key Required** – Uses free, open-source OpenStreetMap tiles

### Pattern Analysis
- **Temporal Patterns** – Identify when crashes occur most frequently:
  - Crashes by day of week
  - Crashes by time of day
- **Interactive Charts** – Recharts visualizations for easy pattern recognition

### High-Injury Network Identification
- **Top Intersections** – Ranked list of the most dangerous locations by injury severity score
- **Risk Metrics** – Shows total crashes, severity scores, and primary crash types for each intersection
- Supports prioritization of intervention efforts

### Evidence-Based Countermeasures
- **FHWA Proven Measures** – Database of proven safety countermeasures including:
  - Measure names and descriptions
  - Applicable crash types
  - Estimated crash reduction factors
  - Implementation costs
  - Sources and references
- Helps identify appropriate interventions for different crash patterns

### SS4A Grant Reporting
- **Key Metrics** – Tracks injuries, fatalities, and vulnerable road user crashes (pedestrians, cyclists)
- **Program Focus** – Outlines Vision Zero and safe systems approach principles
- **Grant Objectives** – Documents alignment with Safer Streets for All grant requirements

## Technology Stack

- **Frontend Framework:** React 19 with TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4.1 with PostCSS
- **Mapping:** Leaflet (free, open-source) + OpenStreetMap tiles
- **Charts:** Recharts 3
- **Node:** TypeScript 5.9

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation
```bash
cd safety-data-platform
npm install
```

### Running Locally
```bash
npm run dev
```

The prototype will open at `http://localhost:5173/` (or the next available port).

**No configuration required!** The app uses free, open-source OpenStreetMap tiles for mapping. No API keys or credit card information needed.

### Building for Production
```bash
npm run build
```

## Project Structure

```
src/
├── App.tsx                    # Main application with view routing
├── main.tsx                   # Entry point
├── index.css                  # Global styles
├── types.ts                   # TypeScript type definitions
├── context/
│   └── ViewContext.tsx        # View state management
├── components/
│   ├── layout/                # Page layout components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── PageWrapper.tsx
│   ├── dashboard/             # Dashboard view
│   │   ├── DashboardView.tsx
│   │   └── StatCard.tsx
│   ├── map/                   # Map visualization
│   │   ├── MapView.tsx
│   │   ├── LayerControls.tsx
│   │   └── CrashPopup.tsx
│   ├── charts/                # Chart components
│   │   └── BarChart.tsx
│   ├── analysis/              # Pattern analysis
│   │   └── PatternAnalysisView.tsx
│   ├── network/               # High-injury network
│   │   └── HighInjuryView.tsx
│   ├── countermeasures/       # Countermeasures
│   │   └── CountermeasureView.tsx
│   └── reporting/             # Grant reporting
│       └── SS4AReportingView.tsx
└── data/
    ├── crashes.json           # ~600 crash records with anonymized locations
    ├── high-injury-network.json   # Intersection severity data
    └── countermeasures.json   # Evidence-based interventions
```

## Data

All data is static and anonymized:
- **Crash Records** – Contains date, time, location (generic street names), severity, injuries, fatalities, and contributing factors
- **Intersections** – Generic street intersection names with crash counts and severity scores
- **Countermeasures** – FHWA-documented evidence-based safety treatments

No personal data, specific addresses, or location identifiers are included. All street names and coordinates are generic/placeholder values suitable for demonstration.

## How the Prototype Meets Requirements

| Requirement | Implementation |
|---|---|
| **Summary Statistics** | Dashboard view displays crashes, injuries, and fatalities |
| **Crash Visualization** | Interactive map with color-coded markers by severity |
| **Pattern Analysis** | Charts showing temporal patterns (day/time) |
| **High-Injury Networks** | Ranked table of top intersections by severity |
| **Countermeasures** | Evidence-based safety measures with cost and effectiveness data |
| **SS4A Reporting** | Grant metrics and program alignment documentation |
| **Anonymized Data** | All geographic references are generic/placeholder values |
| **Interactive UI** | Clickable navigation, filters, and hover details |
| **No Backend** | Entirely static JSON data; no API calls |

## Navigation

Use the sidebar to switch between views:
- **Dashboard** – Overview statistics
- **Crash Map** – Geographic visualization with filters
- **Pattern Analysis** – Temporal analysis charts
- **High-Injury Network** – Ranked intersection list
- **Countermeasures** – Safety intervention options
- **SS4A Reporting** – Grant program metrics

## Notes

- **Free Mapping:** Uses Leaflet and OpenStreetMap tiles – no API keys, tokens, or payment information required.
- All data is dummy/demonstration data suitable for prototyping.
- The prototype is fully functional and ready for stakeholder review and feedback.
- Map attribution: © OpenStreetMap contributors

## Future Enhancements

- Backend API integration for real data
- Advanced filtering and search capabilities
- Map clustering for dense areas
- Before/after impact metrics for implemented countermeasures
- Export functionality (CSV, PDF reports)
- User authentication and dashboards

## License

Internal prototype – Not for public distribution

## Questions?

Refer to `HANDOFF.md` for development notes and technical guidance.
