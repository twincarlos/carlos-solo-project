import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateOneReview } from '../../store/review';

function Review ({ review }) {
    const dispatch = useDispatch();
    const myReview = review.review;
    const author = review.author;
    const [edit, setEdit] = useState(false);
    const [remove, setRemove] = useState(false);
    const [text, setText] = useState(myReview.review);
    const [rating, setRating] = useState(myReview.rating);
    const [error, setError] = useState(false);

    const handleEdit = () => {
        if (text.length >= 5) {
            setEdit(false);
            return dispatch(updateOneReview({id: myReview.id, review: text, rating: rating}));
        } else {
            setError(true);
        }
    }

    return (
        <div className='review-container'>
            <h3>{author.firstName} {author.lastName} said:</h3>
            {
                edit ?
                <>
                    {error ? <p>Enter at least 5 characters</p> : null}
                    <textarea defaultValue={myReview.review} onChange={(e) => setText(e.target.value)}></textarea>
                    <input type='number' defaultValue={myReview.rating} onChange={(e) => setRating(e.target.value)}></input>
                </>
                :
                <>
                    <p>{text}</p>
                    <p>{rating}</p>
                </>
            }
            {
                edit ?
                <>
                    <button onClick={handleEdit}>Done</button>
                    <button onClick={() => setEdit(false)}>Cancel</button>
                </>
                :
                (
                    remove ?
                    <>
                        <button>Done</button>
                        <button onClick={() => setRemove(false)}>Cancel</button>
                    </>
                    :
                    <>
                        <button onClick={() => setEdit(true)}>Edit</button>
                        <button onClick={() => setRemove(true)}>Delete</button>
                    </>
                )
            }
        </div>
    );
}

export default Review;
