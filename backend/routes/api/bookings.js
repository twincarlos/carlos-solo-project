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

module.exports = router;
