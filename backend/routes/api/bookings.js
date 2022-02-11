const express = require('express');
const BookingRepository = require('../../db/booking-repository');

const router = express.Router();

router.get('/all/:userId', async (req, res) => {
    const bookingList = await BookingRepository.getBookingsFromUserId(req.params.userId);
    return res.json(bookingList);
});

router.get('/:id', async (req, res) => {
    const bookingInfo = await BookingRepository.getBookingByPk(req.params.id);
    return res.json(bookingInfo);
});

router.post('/', async (req, res) => {
    const { spotId, userId, checkIn, checkOut } = req.body;
    const newBooking = await BookingRepository.createBooking({ spotId, userId, checkIn, checkOut });
    return res.json(newBooking);
});

router.delete('/', async (req, res) => {
    const { id } = req.body;
    const booking = await BookingRepository.deleteBooking(id);
    return res.json(booking);
});

router.put('/', async (req, res) => {
    const { id } = req.body;
    const newBooking = await BookingRepository.updateBooking(id);
    return res.json(newBooking);
});

module.exports = router;
