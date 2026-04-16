import type { MapPoint } from './types/map.types';
import { ORLANDO_VIEW_STATE, ORLANDO_POINTS, ORLANDO_POLYGONS } from './data/orlandoMapData';
import {DeckGL, ScatterplotLayer, PolygonLayer} from "deck.gl";

import 'mapbox-gl/dist/mapbox-gl.css';
import './DeckGLMap.css';
import {Map} from "react-map-gl/mapbox-legacy";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN as string;

/**
 * Category -> color mapping for the scatterplot points.
 */
const CATEGORY_COLORS: Record<MapPoint['category'], [number, number, number]> = {
  park: [34, 197, 94],
  venue: [239, 68, 68],
  museum: [59, 130, 246],
  landmark: [234, 179, 8],
};

export function DeckGLMap() {

  // TODO: Create the ScatterplotLayer
  // TODO: Create the PolygonLayer

  // TODO: Return the DeckGL component with:
  //   - initialViewState: ORLANDO_VIEW_STATE
  //   - Enabled pan/zoom/rotate interactions)
  //   - Layers specified above

  return (
    <div className="p6-map-container">
      <p>replace this with map</p>
    </div>
  );
}
