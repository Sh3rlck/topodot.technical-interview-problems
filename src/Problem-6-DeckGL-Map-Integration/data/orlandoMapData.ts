import type { MapPoint, MapPolygon } from '../types/map.types';

/**
 * Initial view state centered on downtown Orlando, FL.
 */
export const ORLANDO_VIEW_STATE = {
  longitude: -81.3792,
  latitude: 28.5383,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

/**
 * Six Orlando landmarks as scatter-plot points.
 */
export const ORLANDO_POINTS: MapPoint[] = [
  {
    name: 'Lake Eola Park',
    coordinates: [-81.3731, 28.5432],
    category: 'park',
  },
  {
    name: 'Amway Center',
    coordinates: [-81.3839, 28.5392],
    category: 'venue',
  },
  {
    name: 'Orlando Science Center',
    coordinates: [-81.3683, 28.5721],
    category: 'museum',
  },
  {
    name: 'Dr. Phillips Center for the Performing Arts',
    coordinates: [-81.3791, 28.5372],
    category: 'venue',
  },
  {
    name: 'Harry P. Leu Gardens',
    coordinates: [-81.3545, 28.5696],
    category: 'park',
  },
  {
    name: 'Church Street Station',
    coordinates: [-81.3810, 28.5397],
    category: 'landmark',
  },
];

/**
 * Two Orlando neighborhood polygons.
 * Coordinates approximate the district boundaries.
 */
export const ORLANDO_POLYGONS: MapPolygon[] = [
  {
    name: 'Downtown Orlando',
    contour: [
      [-81.3880, 28.5450],
      [-81.3740, 28.5450],
      [-81.3740, 28.5340],
      [-81.3880, 28.5340],
    ],
    fillColor: [0, 128, 255, 100],
  },
  {
    name: 'Thornton Park District',
    contour: [
      [-81.3735, 28.5440],
      [-81.3660, 28.5440],
      [-81.3660, 28.5370],
      [-81.3735, 28.5370],
    ],
    fillColor: [34, 197, 94, 100],
  },
];
