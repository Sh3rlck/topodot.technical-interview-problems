/**
 * A point of interest on the map.
 */
export interface MapPoint {
  name: string;
  coordinates: [longitude: number, latitude: number];
  category: 'park' | 'venue' | 'museum' | 'landmark';
}

/**
 * A neighborhood polygon on the map.
 */
export interface MapPolygon {
  name: string;
  contour: [longitude: number, latitude: number][];
  fillColor: [r: number, g: number, b: number, a: number];
}
