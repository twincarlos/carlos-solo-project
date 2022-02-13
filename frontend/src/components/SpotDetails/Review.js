import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
        setError(false);
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
                <NavLink to={`/users/${author.id}`}>
                    <img className='author-image' src={author.image} alt=''></img>
                </NavLink>
                <span>
                    <h3>{author.firstName} {author.lastName}</h3>
                    <p><i className="far fa-clock"></i> {`${((new Date(updated)).toString()).split(' ')[1]} ${((new Date(updated)).toString()).split(' ')[2]}`}</p>
                </span>
            </div>
            {
                edit ?
                <div className='edit-review-div'>
                    {error && <p className='error'><i className="fas fa-exclamation"></i> Enter at least 5 characters</p>}
                    <textarea defaultValue={text} onChange={(e) => setText(e.target.value)}></textarea>
                    <span className='rating-range'>
                        <input type='range' defaultValue={rating} min={1} max={5} onChange={(e) => setRating(e.target.value)}></input>
                        <p>{rating}</p>
                    </span>
                </div>
                :
                <>
                    <p><i class="fas fa-quote-left"></i> {text}</p>
                    <p><i className="far fa-star"></i> {rating}</p>
                </>
            }
            {
                (sessionUser?.id === author.id) &&
                    (edit ?
                    <div className='edit-cancel-review'>
                        <button onClick={handleEdit}><i className="fas fa-check"></i></button>
                        <button onClick={cancelEdit}><i className="fas fa-times"></i></button>
                    </div>
                    :
                    (
                        remove ?
                        <div className='delete-cancel-review'>
                            <button onClick={handleDelete}><i className="fas fa-check"></i></button>
                            <button onClick={() => setRemove(false)}><i className="fas fa-times"></i></button>
                        </div>
                        :
                        <div className='edit-delete-review-button'>
                            <button className='edit-review-button' onClick={() => setEdit(true)}><i className="fas fa-edit"></i></button>
                            <button className='delete-review-button' onClick={() => setRemove(true)}><i className="far fa-trash-alt"></i></button>
                        </div>
                    ))
            }
        </div>)
    );
}

export default Review;
