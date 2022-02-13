const { Op } = require('sequelize');
const { Spot, User, Review, Booking, Sequelize } = require('./models');

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

async function allSpotsByUserId(userId) {
    return await Spot.findAll({ where: { userId } });
}

async function allSpotsByLocation(location) {
    const spotList = await Spot.findAll({
        where: {
            [Op.or]: [ { name: { [Op.or]: [{ [Op.substring]: location }, { [Op.startsWith]: location[0].toLowerCase() + location.slice(1) }, { [Op.startsWith]: location[0].toUpperCase() + location.slice(1) }, { [Op.iLike]: `%${location}` }] } }, { city: { [Op.or]: [{ [Op.substring]: location }, { [Op.startsWith]: location[0].toLowerCase() + location.slice(1) }, { [Op.startsWith]: location[0].toUpperCase() + location.slice(1) }, { [Op.iLike]: `%${location}` }] } }, { state: { [Op.or]: [{ [Op.substring]: location }, { [Op.startsWith]: location[0].toLowerCase() + location.slice(1) }, { [Op.startsWith]: location[0].toUpperCase() + location.slice(1) }, { [Op.iLike]: `%${location}` }] } } ]
        }
    })

    return spotList;
}

async function getSpotByPk(id) {
    const spot = await Spot.findByPk(id);
    const host = await User.findByPk(spot.userId);
    const bookedSpot = await Booking.findAll({ where: {
        spotId: id,
        booked: false
     } });
    const data = await Review.findAll({ where: { spotId: id } });
    const reviews = [];

    for (let i = 0; i < data.length; i++) {
        const author = await User.findByPk(data[i].userId);
        reviews.push({
            review: data[i],
            author
        });
    }

    return { spot, host, reviews, bookedSpot };
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

    return await spot.destroy();
}

module.exports = { allSpots, allSpotsByLocation, allSpotsByUserId, getSpotByPk, addSpot, updateSpot, deleteSpot };
