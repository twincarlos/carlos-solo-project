const express = require('express');
const ReviewRepository = require('../../db/review-repository');

const router = express.Router();

router.put('/', async (req, res) => {
    const { id, review, rating } = req.body;
    const newReview = await ReviewRepository.updateReview({ id, review, rating });
    return res.json(newReview);
});

module.exports = router;
