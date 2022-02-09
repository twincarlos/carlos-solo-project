function Review ({ review }) {

    return (
        <div className='review-container'>
            <h3>User said:</h3>
            <p>{review.review}</p>
            <p>{review.rating}</p>
        </div>
    );
}

export default Review;
