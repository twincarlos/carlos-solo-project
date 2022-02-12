import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOneReview, deleteOneReview } from '../../store/review';

function Review ({ review }) {
    const dispatch = useDispatch();
    const myReview = review.review;
    const author = review.author;
    const [edit, setEdit] = useState(false);
    const [remove, setRemove] = useState(false);
    const [text, setText] = useState(myReview.review);
    const [rating, setRating] = useState(myReview.rating);
    const [updated, setUpdated] = useState(myReview.updatedAt);
    const [error, setError] = useState(false);
    const [keep, setKeep] = useState(true);
    const sessionUser = useSelector(state => state.session.user);

    const cancelEdit = () => {
        setText(myReview.review);
        setRating(myReview.rating);
        setEdit(false);
    }

    const handleEdit = () => {
        if (text.length >= 5) {
            setUpdated(`${((new Date()).toString()).split(' ')[1]} ${((new Date()).toString()).split(' ')[2]}`);
            setEdit(false);
            return dispatch(updateOneReview({id: myReview.id, review: text, rating: rating}));
        } else {
            setError(true);
        }
    }

    const handleDelete = () => {
        setText(null);
        setRating(null);
        setRemove(false);
        setKeep(false);
        return dispatch(deleteOneReview(myReview.id));
    }

    return (
        keep &&
        (<div className='review-container'>
            <div className='author-review'>
                <img className='author-image' src={author.image}></img>
                <span>
                    <h3>{author.firstName} {author.lastName}</h3>
                    <p>{`${((new Date(updated)).toString()).split(' ')[1]} ${((new Date(updated)).toString()).split(' ')[2]}`}</p>
                </span>
            </div>
            {
                edit ?
                <div className='edit-review-div'>
                    {error && <p>Enter at least 5 characters</p>}
                    <textarea defaultValue={text} onChange={(e) => setText(e.target.value)}></textarea>
                    <span className='rating-range'>
                        <input type='range' defaultValue={rating} min={1} max={5} onChange={(e) => setRating(e.target.value)}></input>
                        <p>{rating}</p>
                    </span>
                </div>
                :
                <>
                    <p>{text}</p>
                    <p><i className="fas fa-star"></i> {rating}</p>
                </>
            }
            {
                (sessionUser?.id === author.id) &&
                    (edit ?
                    <>
                        <button onClick={handleEdit}>Done</button>
                        <button onClick={cancelEdit}>Cancel</button>
                    </>
                    :
                    (
                        remove ?
                        <>
                            <button onClick={handleDelete}>Done</button>
                            <button onClick={() => setRemove(false)}>Cancel</button>
                        </>
                        :
                        <>
                            <button onClick={() => setEdit(true)}>Edit</button>
                            <button onClick={() => setRemove(true)}>Delete</button>
                        </>
                    ))
            }
        </div>)
    );
}

export default Review;
