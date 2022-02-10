const { User, Spot, Booking } = require('./models');

async function getBookingsFromUserId (userId) {
    return await Booking.findAll({ where: { userId } });
}

async function getBookingByPk(id) {
    const booking = await Booking.findByPk(id);
    const spot = await Spot.findByPk(booking.spotId);
    const host = await User.findByPk(spot.userId);

    return { booking, host, spot };
}

module.exports = { getBookingsFromUserId, getBookingByPk };
