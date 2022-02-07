const { Spot } = require('./models');

async function allSpots() {
    return await Spot.findAll();
}

module.exports = { allSpots };
