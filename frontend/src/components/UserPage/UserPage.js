import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import CreateSpotModal from '../SpotModals/CreateSpotModal';
import { getOneUser } from '../../store/user';
import { getAllSpotsByUserId } from '../../store/spot';
import { getAllBookingsFromUserId } from '../../store/booking';
import { getAllReviewsFromUserId } from '../../store/review';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SpotWidget from '../SpotWidget/SpotWidget';
import BookingWidget from '../BookingWidget/BookingWidget';
import ReviewWidget from '../ReviewWidget/ReviewWidget';

import './UserPage.css'

function UserPage() {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const spotList = useSelector(state => state.spot.spotList);
    const bookingList = useSelector(state => state.booking.bookingList);
    const reviewList = useSelector(state => state.review.reviewList);
    const user = useSelector(state => state.user.user);
    const [showModal, setShowModal] = useState(false);
    const [render, setRender] = useState(false);

    let renderSpotList =  null;
    let renderBookingList = null;
    let renderReviewList = null;

    useEffect(() => {
        dispatch(getOneUser(userId));
        dispatch(getAllSpotsByUserId(userId));
        dispatch(getAllBookingsFromUserId(userId));
        dispatch(getAllReviewsFromUserId(userId));
        renderSpotList && renderSpotList();
    },[dispatch, userId, render, renderSpotList]);

    if (!user) {
        return null;
    }

    renderSpotList = () => {
        return (
            <ul>
                { spotList.map((spot) => <SpotWidget key={`${spot.id}`} spot={spot}/>) }
            </ul>
        );
    }

    renderBookingList = () => {
        return (
            <ul>
                { bookingList.map((bookingInfo) => <BookingWidget key={`${bookingInfo.booking.id}`} bookingInfo={bookingInfo}/>) }
            </ul>
        );
    }

    renderReviewList = () => {
        return (
            <ul>
                { reviewList?.map((review) => <ReviewWidget key={`${review.id}`} review={review}/>) }
            </ul>
        );
    }

    return (
        <div id='user-main-div'>
            <div id='user-header'>
                <h1>{user.firstName} {user.lastName}</h1>
                <button onClick={() => setShowModal(true)}>Create Spot</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateSpotModal render={render} setRender={setRender} setShowModal={setShowModal} />
                    </Modal>
                )}
            </div>
            <div id='user-body'>
                <div id='spot-list'>
                    <h2>Your spots</h2>
                    {spotList && (renderSpotList())}
                </div>
                <div id='booking-list'>
                    <h2>Your bookings</h2>
                    {bookingList && (renderBookingList())}
                </div>
                <div id='review-list'>
                    <h2>Your reviews</h2>
                    {renderReviewList && (renderReviewList())}
                </div>
            </div>
        </div>
    );
}

export default UserPage;
