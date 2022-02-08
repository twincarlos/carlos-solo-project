const { Spot } = require('./models');

async function allSpots() {
    return await Spot.findAll();
}

async function getSpotByPk(id) {
    return await Spot.findByPk(id);
}

module.exports = { allSpots, getSpotByPk };
