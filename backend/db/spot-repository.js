const { Spot, User, Review } = require('./models');

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
    const spot = await Spot.findByPk(id);
    const host = await User.findByPk(spot.userId);
    const data = await Review.findAll({ where: { spotId: id } });
    const reviews = [];

    for (let i = 0; i < data.length; i++) {
        const author = await User.findByPk(data[i].userId);
        reviews.push({
            review: data[i],
            author
        });
    }

    return { spot, host, reviews };
}

async function addSpot(spot) {
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

async function updateSpot(data) {
    const { id, name, price, numOfGuests, description, image } = data;
    const spot = await Spot.findByPk(id);
    const newSpot = await spot.update({
        name,
        price,
        numOfGuests,
        description,
        image
    });
    return newSpot;
}

async function deleteSpot(spotId) {
    const spot = await Spot.findByPk(spotId);

    // await Item.destroy({ where: { id: item.id }});
    return await spot.destroy();
}

module.exports = { allSpots, getSpotByPk, addSpot, updateSpot, deleteSpot };
