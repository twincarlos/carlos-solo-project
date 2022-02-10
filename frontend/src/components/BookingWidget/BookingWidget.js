import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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

    const checkInFullDate = ((new Date(booking.checkIn)).toString()).split(' ');
    const checkIn = `${checkInFullDate[1]} ${checkInFullDate[2]}, ${checkInFullDate[3]}`;
    const checkOutFullDate = ((new Date(booking.checkOut)).toString()).split(' ');
    const checkOut = `${checkOutFullDate[1]} ${checkOutFullDate[2]}, ${checkOutFullDate[3]}`;

    return (
        <div className='booking-div'>
            <h3>Your stay at:</h3>
            <h2>{spot.name}</h2>
            <NavLink to={`/spots/${spot.id}`}>
                <img className='booking-img' src={spot.image} alt=''></img>
            </NavLink>
            <h3 className='booking-h3'>Hosted by {host.firstName} {host.lastName}</h3>
            <h3 className='booking-h3'>{checkIn} - {checkOut}</h3>
        </div>
    );
}

export default BookingWidget;
