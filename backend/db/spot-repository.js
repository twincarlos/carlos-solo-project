const { Spot } = require('./models');

function positiveOrNegative() {
    const min = 0;
    const max = 2;
    const rand = Math.floor(Math.random() * (max - min) + min);

    return [1, -1][rand];
}

function randCoordinates() {
    const lat = (Math.random() * 100) * positiveOrNegative();
    const lng = (Math.random() * 100) * positiveOrNegative();

    return { lat, lng };
}

async function allSpots() {
    return await Spot.findAll();
}

async function getSpotByPk(id) {
    return await Spot.findByPk(id);
}

async function addSpot(spot,) {
    const { name, userId, address, city, state, price, numOfGuests, description, image } = spot;

    const newSpot = await Spot.create({
        name,
        userId,
        address,
        city,
        state,
        country: 'United States',
        lat: randCoordinates().lat,
        lng: randCoordinates().lng,
        price,
        numOfGuests,
        rating: 4.00,
        description,
        image
    });

    return await newSpot.save();
}

module.exports = { allSpots, getSpotByPk, addSpot };
