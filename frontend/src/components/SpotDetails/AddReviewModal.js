import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOneReview } from '../../store/review';

function AddReviewModal({ render, setRender, spotInfo, setShowModal }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(1);
    const [error, setError] = useState(false);

    const handleSubmit = () => {
        const newReview = {
            spotId: spotInfo.spot.id,
            userId: sessionUser.id,
            reviewText,
            rating
        }

        if (reviewText.length < 5) {
            setError(true);
        } else {
            setShowModal(false);
            setRender(!render);
            return dispatch(createOneReview(newReview));
        }
    }

    return (
        <div id="add-review-div">
            <h1>How was your experience?</h1>
                {error && <p id='error'><i className="fas fa-exclamation"></i> Please enter at least 5 characters</p>}
            <textarea placeholder="Tell us about your stay" onChange={(e) => setReviewText(e.target.value)}></textarea>
            <span>
                <input type='range' min={1} max={5} onChange={(e) => setRating(e.target.value)} value={rating}></input>
                <p>{rating}</p>
            </span>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default AddReviewModal;
