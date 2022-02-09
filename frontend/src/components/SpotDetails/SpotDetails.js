import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneSpot } from '../../store/spot';
import BookMe from './BookMe';
import EditMe from './EditMe';
import Review from './Review';

import './SpotDetails.css';

function SpotDetails() {
    const sessionUser = useSelector(state => state.session.user);
    const { spotId } = useParams();
    const spotInfo = useSelector(state => state.spot.spotInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneSpot(spotId));
    }, [dispatch, spotId]);


    if (!spotInfo) {
        return null;
    }

    const spot = spotInfo.spot;
    const host = spotInfo.host;
    const reviews = spotInfo.reviews;

    return (
        <div id='main-div'>
            <div id='title-div'>
                <h1>{spot.name}</h1>
            </div>
            <div id='img-div'>
                <img src={spot.image} alt=''></img>
            </div>
            <div id='details-div'>
                <div id='details'>
                    <h1>Hosted by: {host.firstName} {host.lastName}</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupispotInfot non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div id='booking-div'>
                    {(sessionUser.id === host.id) ? <EditMe spot={spot} /> : <BookMe spot={spot} />}
                </div>
            </div>
            <div id='reviews-div'>
                {reviews.length ? reviews.map((review) => <Review key={review.id} review={review}/>) : <h2>No reviews yet</h2>}
            </div>
            <div id='map-div'>
                <h1>Map</h1>
            </div>
        </div>
    );
}

export default SpotDetails;
