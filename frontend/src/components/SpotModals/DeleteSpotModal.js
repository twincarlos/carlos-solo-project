import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { removeOneSpot } from '../../store/spot';

function DeleteSpotModal({ spot }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const deleteSpot = () => {
        history.push('/spots');
        return dispatch(removeOneSpot(spot.spot.id));
    }
    return(
        <div id='delete-form-modal'>
            <h1>Are you sure you want to delete this spot?</h1>
            <button onClick={deleteSpot}>Delete</button>
            <button>Cancel</button>
        </div>
    );
}

export default DeleteSpotModal;
