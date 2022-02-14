import React, { useState, useEffect, useContext } from 'react';
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
import { BookingContext } from '../../context/BookingContext';

import './UserPage.css'

function UserPage() {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const spotList = useSelector(state => state.spot.spotList);
    const bookingList = useSelector(state => state.booking.bookingList);
    const reviewList = useSelector(state => state.review.reviewList);
    const user = useSelector(state => state.user.user);
    const [showModal, setShowModal] = useState(false);
    const {render, setRender} = useContext(BookingContext)

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

    const userJoined = (new Date(user?.createdAt)).toString();
    const userUpdated = (new Date(user?.updatedAt)).toString();

    renderSpotList = () => {
        return (
            <>
                { ((user.id === sessionUser?.id) && (sessionUser?.isHost)) &&  <button id='create-spot-button' onClick={() => setShowModal(true)}><i className="fas fa-hammer"></i> Create Spot</button>}
                <ul>
                    { spotList?.map((spot) => <SpotWidget key={`${spot.id}`} spot={spot}/>) }
                </ul>
            </>
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
                <span>
                    <h1>{user.firstName} {user.lastName}</h1>
                    <h2>Joined on {`${userJoined.split(' ')[1]} ${userJoined.split(' ')[2]}, ${userJoined.split(' ')[3]}`}</h2>
                    {user.isHost && <h2><i className="fas fa-user-check"></i> Host since {`${userUpdated.split(' ')[1]} ${userUpdated.split(' ')[2]}, ${userUpdated.split(' ')[3]}`}</h2>}
                </span>
                <img src={user.image} alt=''></img>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateSpotModal render={render} setRender={setRender} setShowModal={setShowModal} />
                    </Modal>
                )}
            </div>
            <div id='user-body'>
                <div id='spot-list'>
                    <h2><i className="fas fa-home"></i> Your spots</h2>
                    {spotList && (renderSpotList())}
                </div>
                <div id='booking-list'>
                    <h2 id='your-bookings'><i className="fas fa-history"></i> Your bookings</h2>
                    {bookingList && (renderBookingList())}
                </div>
                <div id='review-list'>
                    <h2><i className="far fa-star"></i> Your reviews</h2>
                    {renderReviewList && (renderReviewList())}
                </div>
            </div>
        </div>
    );
}

export default UserPage;
