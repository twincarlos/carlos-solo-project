const { User, Spot, Booking } = require('./models');
const { updateReview } = require('./review-repository');

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

async function deleteBooking(id) {
    const booking = await Booking.findByPk(id);
    return await booking.destroy();
}

async function updateBooking(id) {
    const bookingToUpdate = await Booking.findByPk(id);
    const newBooking = await bookingToUpdate.update({ booked: true });
    return newBooking;
}

module.exports = { getBookingsFromUserId, getBookingByPk, createBooking, deleteBooking, updateBooking };
