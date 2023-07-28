import { CardinalDirectionsType, RotationDirectionType, Environment } from "./types";

export default class Rover {
  constructor(public x: number, public y: number, public direction: CardinalDirectionsType, private environment: Environment) {}
  
  public runFullInput(input: string) {
    for(const char of input) {
      switch (char) {
        case 'M':
          this.moveForward();
          break;
        case 'L':
        case 'R':
          this.rotate(char);
          break;
        default:
          break;
      }
    }
  }
  
  private moveForward() {
    switch (this.direction) {
      case 'N':
        if(this.y + 1 <= this.environment.maxYBound) 
          this.y += 1;
        break;
      case 'E':
        if(this.x + 1 <= this.environment.maxXBound)
          this.x += 1;
        break;
      case 'S':
        if(this.y - 1 >= 0)
          this.y -= 1;
        break;
      case 'W':
        if(this.x - 1 >= 0)
          this.x -= 1;
        break;
      default:
        break;
    }
  }

  private rotate(direction: RotationDirectionType) {
    if (direction != 'L' && direction != 'R')
      return
    switch(this.direction) {
      case 'N':
        direction === 'L' ? this.direction = 'W' : this.direction = 'E';
        break;
      case 'E':
        direction === 'L' ? this.direction = 'N' : this.direction = 'S';
        break;
      case 'S':
        direction === 'L' ? this.direction = 'E' : this.direction = 'W';
        break;
      case 'W':
        direction === 'L' ? this.direction = 'S' : this.direction = 'N';
        break;
      default:
        break;
    }
  }
}
