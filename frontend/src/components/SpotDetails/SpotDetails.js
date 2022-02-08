import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneSpot } from '../../store/spot';

import './SpotDetails.css';

function SpotDetails () {
    const { spotId } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state) => Object.values(state.spot));
    const spot = data[0];

    useEffect(() => {
        dispatch(getOneSpot(spotId));
    }, [dispatch, spotId]);

    return (
        <div id='main-div'>
            <div id='title-div'>
                <h1>{spot?.name}</h1>
            </div>
            <div id='img-div'>
                <img src={spot?.image} alt=''></img>
            </div>
            <div id='details-div'>
                <div id='details'>
                    <h1>Hosted by: User name</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div id='booking-div'>
                    <span id='price-rating'>
                        <h2>{spot?.price}</h2>
                        <h2>{spot?.rating}</h2>
                    </span>
                    <form>
                        <span id='upper-form'>
                            <label id='check-in'>
                                Check-in
                                <input type='date'></input>
                            </label>
                            <label id='check-out'>
                                Check-out
                                <input type='date'></input>
                            </label>
                        </span>
                        <input id='lower-form' type='number' placeholder='1 guest'></input>
                        <button id='book-button'>Book</button>
                    </form>
                    <h3 id='your-total'>Your total is: $total</h3>
                </div>
            </div>
            <div id='reviews-div'>
                <h1>Reviews</h1>
            </div>
            <div id='map-div'>
                <h1>Map</h1>
            </div>
        </div>
    );
}

export default SpotDetails;
