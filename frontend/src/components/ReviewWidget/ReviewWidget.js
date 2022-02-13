import './ReviewWidget.css';

function ReviewWidget ({ review }) {
    return (
        <div className='review-main'>
            <p className='review-p'><i className="fas fa-quote-left"></i> { review.review }</p>
            <p className='date-p'><i className="far fa-clock"></i> On: {`${(new Date(review.createdAt).toString()).split(' ')[1]} ${(new Date(review.createdAt).toString()).split(' ')[2]}, ${(new Date(review.createdAt).toString()).split(' ')[3]}`}</p>
        </div>
    );
}

export default ReviewWidget;
