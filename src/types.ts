export interface Environment {
  maxXBound: number;
  maxYBound: number;
}

export interface RoverPosition {
  x: number;
  y: number;
  direction: CardinalDirectionsType;
}

export type CardinalDirectionsType = 'N' | 'E' | 'S' | 'W';

export type RotationDirectionType = 'L' | 'R';
