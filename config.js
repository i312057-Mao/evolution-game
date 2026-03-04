'use strict';

// Game Configuration and Constants
const config = {
    gameTitle: 'Evolution Game',
    maxPlayers: 4,
    gameDuration: 60, // in minutes
    gridSize: 10,
    species: [
        'Wolf',
        'Deer',
        'Fruit',
        'Grass'
    ],
    initialResources: {
        food: 100,
        water: 100
    },
    // Other constants can be added here
};

module.exports = config;