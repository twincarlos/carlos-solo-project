const { Review } = require('./models');

async function createReview (review) {
    const { spotId, userId, reviewText, rating } = review;

    const newReview = await Review.create({
        spotId,
        userId,
        review: reviewText,
        rating
    });

    return await newReview.save();
}

async function allReviewsByUserId(userId) {
    const allReviews = await Review.findAll({ where: { userId } });
    return allReviews;
}

async function updateReview(data) {
    const { id, review, rating } = data;
    const reviewToEdit = await Review.findByPk(id);

    const newReview = await reviewToEdit.update({ review, rating });
    return newReview;
}

async function deleteReview(id) {
    const review = await Review.findByPk(id);
    return await review.destroy();
}

module.exports = { allReviewsByUserId, createReview, updateReview, deleteReview };
