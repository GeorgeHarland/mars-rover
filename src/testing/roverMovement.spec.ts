import Rover from './../rover'

describe('Rover Tests', () => {
  const environment = { maxXBound: 5, maxYBound: 5 };

  it('Rover 1', () => {
    const rover = new Rover(1, 2, 'N', environment);
    rover.runFullInput('LMLMLMLMM');
    expect([rover.x, rover.y, rover.direction]).toEqual([1, 3, 'N']);
  });

  it('Rover 2', () => {
    const rover = new Rover(3, 3, 'E', environment);
    rover.runFullInput('MMRMMRMRRM');
    expect([rover.x, rover.y, rover.direction]).toEqual([5, 1, 'E']);
  });

  it('Rover should stop at environment edge', () => {
    const rover = new Rover(5, 5, 'N', environment);
    rover.runFullInput('NNNNNN');
    expect([rover.x, rover.y, rover.direction]).toEqual([5, 5, 'N']);
  })

  it('Rover should not move with zero commands', () => {
    const rover = new Rover(5, 5, 'W', environment);
    rover.runFullInput('');
    expect([rover.x, rover.y, rover.direction]).toEqual([5, 5, 'W']);
  })

  it('Rover should skip invalid commands', () => {
    const rover = new Rover(2, 2, 'E', environment);
    rover.runFullInput('fdsaflklrrLM423423LM'); // LMLM are the only valid commands here
    expect([rover.x, rover.y, rover.direction]).toEqual([1, 3, 'W']);
  })
});
