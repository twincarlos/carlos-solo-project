import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOneReview } from '../../store/review';

function AddReviewModal({ render, setRender, spotInfo, setShowModal }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(1);
    const [errors, setErrors] = useState([]);

    const handleSubmit = () => {
        const err = [];

        const newReview = {
            spotId: spotInfo.spot.id,
            userId: sessionUser.id,
            reviewText,
            rating
        }

        if (reviewText.length < 5) err.push('Enter at least 5 characters.');


        if (!err.length) {
            setShowModal(false);
            setRender(!render);
            return dispatch(createOneReview(newReview));
        } else {
            setErrors(err);
        }

    }

    return (
        <div className="add-review-div">
            <h1>Add me!</h1>
            {errors &&
                <ul>
                    {errors.map((error, i) => <li key={i}>{error}</li>)}
                </ul>}
            <textarea placeholder="Tell us about your stay" onChange={(e) => setReviewText(e.target.value)}></textarea>
            <input type='number' onChange={(e) => setRating(e.target.value)} value={rating}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default AddReviewModal;
