function Review ({ review }) {
    const myReview = review.review;
    const author = review.author;
    return (
        <div className='review-container'>
            <h3>{author.firstName} {author.lastName} said:</h3>
            <p>{myReview.review}</p>
            <p>{myReview.rating}</p>
        </div>
    );
}

export default Review;
