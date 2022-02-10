const { Review } = require('./models');

async function updateReview(data) {
    const { id, review, rating } = data;
    const reviewToEdit = await Review.findByPk(id);

    const newReview = await reviewToEdit.update({ review, rating });
    return newReview;
}

module.exports = { updateReview };
