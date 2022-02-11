const { User, Spot, Booking } = require('./models');

async function getBookingsFromUserId (userId) {
    const bookings = await Booking.findAll({ where: { userId }});
    return await Promise.all(bookings.map(async (booking) => await getBookingByPk(booking.id)));
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
        booked: false
    });

    return newBooking;
}

module.exports = { getBookingsFromUserId, getBookingByPk, createBooking };
