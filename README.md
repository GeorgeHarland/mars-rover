# MarsRover

A Mars Rover simulator that takes a Rover's command sequence as input and returns it's end position.

This is build using Node, TypeScript, and the Jest testing framework with Babel.

## Instructions

Follow the run guide below, then type the following inputs:
- Set the max x and y bounds for the environment. It starts from (0,0) at the bottom-left, so the width and height will be the input+1 each
- Set the number of rovers in the area
- For each rover, input it's starting position and direction (eg. 1 2 N) and a string of it's commands consisting of 'L', 'R', 'M' (eg. LMLMMRM). These are case sensitive and other characters in the string will be ignored. 

The environment starts at (0,0) from the bottom left. The first input is to set the width and height of the simulation area in the format: '5 5'.

## Run

First install dependancies with 'npm i'
Run with 'npm start'
Run tests with 'npm test'

## file structure

Within /src:
- index.ts is the entry point for the user and npm start. Output is handled here.
- rover.ts handles the Rover class and it's movement
- types.ts contains the TypeScript types and interfaces
- /testing contains the Jest tests
