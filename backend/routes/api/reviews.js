const express = require('express');
const ReviewRepository = require('../../db/review-repository');

const router = express.Router();

router.post('/', async (req, res) => {
    const { spotId, userId, reviewText, rating} = req.body;
    const newReview = await ReviewRepository.createReview({ spotId, userId, reviewText, rating});
    return res.json(newReview);
});

router.put('/', async (req, res) => {
    const { id, review, rating } = req.body;
    const newReview = await ReviewRepository.updateReview({ id, review, rating });
    return res.json(newReview);
});

router.delete('/:id', async (req, res) => {
    const review = await ReviewRepository.deleteReview(req.params.id);
    return res.json(review);
});

module.exports = router;