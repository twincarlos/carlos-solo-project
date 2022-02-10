import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOneReview } from '../../store/review';

function AddReviewModal ({ spotInfo }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(1);

    const handleSubmit = () => {
        const newReview = {
            spotId: spotInfo.spot.id,
            userId: sessionUser.id,
            reviewText,
            rating
        }

        return dispatch(createOneReview(newReview));
    }

    return (
        <div className="add-review-div">
            <h1>Add me!</h1>
            <textarea placeholder="Tell us about your stay" onChange={(e) => setReviewText(e.target.value)}></textarea>
            <input type='number' onChange={(e) => setRating(e.target.value)} value={rating}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default AddReviewModal;
