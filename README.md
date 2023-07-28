# MarsRover

A Mars Rover simulator that takes a Rover's command sequence as input and returns it's end position.

This is built using Node, TypeScript, Jest.

## Instructions

Follow the run guide below, then type the following inputs:
- Set the max x and y bounds for the environment (eg. 5 5). It starts from (0,0) at the bottom-left, so the width and height will be the input+1 each.
- Set the number of rovers in the area (eg. 2)
- For each rover, input it's starting position and direction (eg. 1 2 N) and a string of it's commands consisting of 'L', 'R', 'M' (eg. LMLMMRM). These are case sensitive and other characters in the string will be ignored. 

## Run

First install dependancies with 'npm i'

Run with 'npm start'

Run tests with 'npm test'

## Assumptions

- Rovers can move past each other's spaces (assuming each square is 1km or so)
- Rovers can not move past the boundaries of the environment, skipping any action that attempts to do so

## File structure

Within /src:
- index.ts is the entry point for the user and npm start. Output is handled here.
- rover.ts handles the Rover class and it's movement
- types.ts contains the TypeScript types and interfaces
- /testing contains the Jest tests

## Extensions

Future work would include:
- Adding validation to the user inputs. A validation function can be sent into askQuestion
- Throw or log errors
- Tests could be added to go through the user input process and check invalid inputs etc.
