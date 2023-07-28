import * as readline from 'readline';
import { CardinalDirectionsType, Environment } from './types';
import Rover from './rover';

const askQuestion = async (question: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => rl.question(question, (ans) => {
    rl.close();
    resolve(ans);
  }));
};

const handleUserInput = async () => {
  const environmentBounds = await askQuestion('Enter the upper environment bounds (eg. 5 5): ')
  const [envX, envY] = environmentBounds.split(' ').map(Number);
  const environment: Environment = { maxXBound: envX, maxYBound: envY };
  
  const numRovers = parseInt(await askQuestion('Enter the number of rovers (eg. 2): '));
  const outputs: string[] = []
  for (let i = 0; i < numRovers; i++) {
    const roverPosition = await askQuestion('Enter start position and direction string for rover ' + i+1 + ' (e.g., "1 2 N"): ');
    const [roverX, roverY, roverDir] = roverPosition.split(' ');
    const numX = parseInt(roverX);
    const numY = parseInt(roverY);
    const rover = new Rover(numX, numY, roverDir as CardinalDirectionsType, environment);
    console.log(rover.x, rover.y, rover.direction);
    const roverCommands = await askQuestion('Enter the command string for the rover (eg. LMRM): ');
    const finalPosition = rover.runFullInput(roverCommands);
    console.log(finalPosition)
    outputs.push(finalPosition.x.toString() + ' ' + finalPosition.y.toString() + ' ' + finalPosition.direction);
  }

  outputs.forEach((position, index) => {
    console.log('Final position for Rover ' + index+1 + ': ');
    console.log(position);
  });
}

handleUserInput();
