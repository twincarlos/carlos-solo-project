import { useParams, NavLink } from 'react-router-dom';
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
import Maps from '../Maps/Maps';

import './SpotDetails.css';

function SpotDetails() {
    const sessionUser = useSelector(state => state.session.user);
    const { spotId } = useParams();
    const spotInfo = useSelector(state => state.spot.spotInfo);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const { newName, newDescription, newImage } = useContext(SpotContext);
    const [render, setRender] = useState(false);
;
    let renderReviewsList = () => null;
    let renderBookingForm = () => null;
    useEffect(() => {
        dispatch(getOneSpot(spotId));
        renderReviewsList();
    }, [dispatch, spotId, render]);


    if (!spotInfo) {
        return null;
    }

    const spot = spotInfo.spot;
    const host = spotInfo.host;
    const reviews = spotInfo.reviews;
    const bookedSpot = spotInfo.bookedSpot;

    renderReviewsList = () => {
        return (
        <div id='reviews-list'>
            { reviews.map((review) =><Review key={`${review.review.id}`} review={review}/>) }
        </div>
        );
    }

    renderBookingForm = () => {
        return (
            <div id='booking-div'>
                { (sessionUser?.id === host.id) ? <EditMe spot={spot} /> : <BookMe spot={spot} bookedSpot={bookedSpot} render={render} setRender={setRender}/> }
            </div>
        );
    }

    return (
        <div id='main-div'>
            <div id='title-div'>
                <h1>{newName ? newName : spot.name}</h1>
                <span id='price-rating'>
                    <p><i className="fas fa-dollar-sign"></i> {spot.price} /night</p>
                    <p><i className="fas fa-star"></i> {spot.rating}</p>
                    <p><i className="far fa-grin-stars"></i> {spot.numOfGuests}</p>
                </span>
            </div>
            <div id='img-div'>
                <img src={newImage ? newImage : spot.image} alt=''></img>
            </div>
            <div id='details-div'>
                <div id='details'>
                    <span>
                        <p>Hosted by:</p>
                        <span id='host-details'>
                            <NavLink to={`/users/${host.id}`}>
                                <img id='host-profile' src={host.image}/>
                            </NavLink>
                            <span>
                                <h2>{host.firstName}</h2>
                                <h2>{host.lastName}</h2>
                            </span>
                        </span>
                    </span>
                    <p>{newDescription ? newDescription : spot.description}</p>
                </div>
                {renderBookingForm()}
            </div>
            <div id='reviews-div'>
                <div id='reviews-title'>
                    <h1>Reviews</h1>
                    {sessionUser && ((sessionUser?.id !== host.id) && (<button onClick={() => setShowModal(true)}>Add</button>))}
                </div>
                { showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <AddReviewModal render={render} setRender={setRender} spotInfo={spotInfo} setShowModal={setShowModal}/>
                    </Modal>
                )}
                {renderReviewsList()}
            </div>
            <div id='map-div'>
                <h1>Map</h1>
                <Maps apiKey={'AIzaSyBcyvJYujCeWKA8XBlxtnPxZV6HvU4CEhc'} center={{ lat: parseInt(spot.lat, 10), lng: parseInt(spot.lng, 10) }}/>
            </div>
        </div>
    );
}

export default SpotDetails;
