# Problem 6 — Deck.gl Map Integration

## Scenario

You are adding a map visualization to an existing React application. The application needs to display Orlando, FL landmarks and neighborhood boundaries using Deck.gl with a Mapbox base map.

The data, types, styles, and Mapbox token are already provided. Your task is to initialize Deck.gl with a Mapbox base map and configure two visualization layers.

Questions:

- What is the difference between `initialViewState` (uncontrolled) and `viewState` (controlled) in Deck.gl?
- Why does Deck.gl require accessor functions (`getPosition`, `getPolygon`) rather than a flat data format?
- What would you need to change to make the layers respond to hover or click events?

## Requirements

| Requirement          | Details                                                                  |
|----------------------|--------------------------------------------------------------------------|
| Base map             | Render a Mapbox map centered on Orlando, FL                              |
| View state           | Center on Orlando (~28.54, -81.38), zoom 13                             |
| ScatterplotLayer     | Render the 6 provided landmarks as colored circles                      |
| PolygonLayer         | Render the 2 provided neighborhood boundaries as semi-transparent fills |
| Interactivity        | Pan, zoom, and rotate should work (controller enabled)                  |
| CSS import           | Import the required `mapbox-gl` stylesheet                              |

---

## File structure

```
Problem-6-DeckGL-Map-Integration/
├── DeckGLMap.tsx              ← implement TODOs here
├── DeckGLMap.css              ← pre-written styles
├── README.md
├── data/
│   └── orlandoMapData.ts      ← pre-filled (do not modify)
└── types/
    └── map.types.ts           ← pre-filled (do not modify)
```
