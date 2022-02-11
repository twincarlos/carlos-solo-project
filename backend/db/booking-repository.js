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

async function createBooking(booking) {
    const { spotId, userId, checkIn, checkOut } = booking;

    const newBooking = await Booking.create({
        spotId,
        userId,
        checkIn,
        checkOut,
        status: 'upcoming'
    });

    return newBooking;
}

module.exports = { getBookingsFromUserId, getBookingByPk, createBooking };
