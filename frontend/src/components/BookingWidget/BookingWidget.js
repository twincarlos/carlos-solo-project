import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneBooking } from '../../store/booking';

import './BookingWidget.css';

function BookingWidget ({ booking }) {
    const dispatch = useDispatch();
    const bookingInfo = useSelector(state => state.booking.bookingInfo);

    useEffect(() => {
        dispatch(getOneBooking(booking?.id));
    }, [dispatch, booking?.id]);

    if (!bookingInfo) {
        return null;
    }

    const spot = bookingInfo.spot;
    const host = bookingInfo.host;

    return (
        <div className='booking-div'>
            <h3>Your stay at:</h3>
            <h2>{spot.name}</h2>
            <img src={spot.image} alt=''></img>
        </div>
    );
}

export default BookingWidget;
