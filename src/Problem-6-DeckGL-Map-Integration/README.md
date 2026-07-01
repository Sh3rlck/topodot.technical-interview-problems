# Problem 6 — Deck.gl Map Integration

## Scenario

You are adding a map visualization to an existing React application. The application needs to display Orlando, FL landmarks and neighborhood boundaries using Deck.gl with a Mapbox base map.
The data, styles, and Mapbox token are already provided. Your task is to initialize Deck.gl with a Mapbox base map and configure two visualization layers.

## Requirements

| Requirement          | Details                                                                  |
|----------------------|--------------------------------------------------------------------------|
| Base map             | Render a Mapbox map centered on Orlando, FL                              |
| View state           | Center on Orlando (~28.54, -81.38), zoom 13                             |
| ScatterplotLayer     | Render the 6 provided landmarks as colored circles                      |
| PolygonLayer         | Render the 2 provided neighborhood boundaries as semi-transparent fills |
| Interactivity        | Pan, zoom, and rotate should work (controller enabled)                  |
| CSS import           | Import the required `mapbox-gl` stylesheet                              |


## Notes
You can use the following style for the map "mapbox://styles/mapbox/dark-v11"

A Mapbox access token is required. Provide it in `.env.local` as `VITE_MAPBOX_TOKEN` (see `.env.local.example`).