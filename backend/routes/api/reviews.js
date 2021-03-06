const express = require('express');
const ReviewRepository = require('../../db/review-repository');

const router = express.Router();

router.get('/all/:userId', async (req, res) => {
    const reviewList = await ReviewRepository.allReviewsByUserId(req.params.userId);
    return res.json(reviewList);
});

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

router.delete('/', async (req, res) => {
    const { id } = req.body;
    const review = await ReviewRepository.deleteReview(id);
    return res.json(review);
});

module.exports = router;
