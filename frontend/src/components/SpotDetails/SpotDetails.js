import { useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneSpot } from '../../store/spot';
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BookMe from './BookMe';
import EditMe from './EditMe';
import Review from './Review';
import AddReviewModal from './AddReviewModal';
import { SpotContext } from '../../context/SpotContext';

import './SpotDetails.css';

function SpotDetails() {
    const sessionUser = useSelector(state => state.session.user);
    const { spotId } = useParams();
    const spotInfo = useSelector(state => state.spot.spotInfo);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const { newName, newDescription, newImage } = useContext(SpotContext);
    const [render, setRender] = useState(false);

    let renderList = () => null;

    useEffect(() => {
        dispatch(getOneSpot(spotId));
        renderList();
    }, [dispatch, spotId, render]);


    if (!spotInfo) {
        return null;
    }

    const spot = spotInfo.spot;
    const host = spotInfo.host;
    const reviews = spotInfo.reviews;

    renderList = () => {
        return (
        <div id='reviews-list'>
            { reviews.map((review) =><Review key={`${review.review.id}`} review={review}/>) }
        </div>
        );
    }

    return (
        <div id='main-div'>
            <div id='title-div'>
                <h1>{newName ? newName : spot.name}</h1>
            </div>
            <div id='img-div'>
                <img src={newImage ? newImage : spot.image} alt=''></img>
            </div>
            <div id='details-div'>
                <div id='details'>
                    <h1>Hosted by: {host.firstName} {host.lastName}</h1>
                    <p>{newDescription ? newDescription : spot.description}</p>
                </div>
                <div id='booking-div'>
                    {(sessionUser?.id === host.id) ? <EditMe spot={spot} /> : <BookMe spot={spot} />}
                </div>
            </div>
            <div id='reviews-div'>
                <div id='reviews-title'>
                    <h1>Reviews</h1>
                    {sessionUser && ((sessionUser?.id !== host.id) && (<button onClick={() => setShowModal(true)}>Add</button>))}
                </div>
                { showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <AddReviewModal render={render} setRender={setRender} spotInfo={spotInfo}/>
                    </Modal>
                )}
                {renderList()}
            </div>
            <div id='map-div'>
                <h1>Map</h1>
            </div>
        </div>
    );
}

export default SpotDetails;
