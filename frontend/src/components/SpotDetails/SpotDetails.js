import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneSpot } from '../../store/spot';
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BookMe from './BookMe';
import EditMe from './EditMe';
import Review from './Review';
import AddReviewModal from './AddReviewModal';

import './SpotDetails.css';

function SpotDetails() {
    const sessionUser = useSelector(state => state.session.user);
    const { spotId } = useParams();
    const spotInfo = useSelector(state => state.spot.spotInfo);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

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
                    <p>{spot.description}</p>
                </div>
                <div id='booking-div'>
                    {(sessionUser?.id === host.id) ? <EditMe spot={spot} /> : <BookMe spot={spot} />}
                </div>
            </div>
            <div id='reviews-div'>
                <h1 id='reviews-title'>Reviews</h1>
                {sessionUser && ((sessionUser?.id !== host.id) && (<button id='add-review-button' onClick={() => setShowModal(true)}>Add</button>))}
                { showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <AddReviewModal spotInfo={spotInfo}/>
                    </Modal>
                )}
                { reviews.map((review) =><Review key={`${review.review.id}`} review={review}/>) }
            </div>
            <div id='map-div'>
                <h1>Map</h1>
            </div>
        </div>
    );
}

export default SpotDetails;
