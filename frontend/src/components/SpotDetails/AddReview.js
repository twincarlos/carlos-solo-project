import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createOneReview } from '../../store/review';

function AddReview () {
    const dispatch = useDispatch();
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(1);
    const sessionUser = useSelector(state => state.session.user);
    const { spotId } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            spotId,
            userId: sessionUser.id,
            reviewText,
            rating
        }

        return dispatch(createOneReview(newReview));
    }

    return (
        <div className="review-container">
            <h1>Add yours :)</h1>
            <form onSubmit={handleSubmit}>
                <textarea placeholder="Tell us about your stay" onChange={(e) => setReviewText(e.target.value)} value={reviewText}></textarea>
                <input type='number' placeholder="Rate your stay" onChange={(e) => setRating(e.target.value)} value={rating}></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddReview;
