import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';
import './BookingWidget.css';

function BookingWidget ({ bookingInfo }) {
    const { setCheckIn, setCheckOut } = useContext(BookingContext);
    const booking = bookingInfo.booking;
    const spot = bookingInfo.spot;
    const host = bookingInfo.host;

    const checkInFullDate = ((new Date(booking.checkIn)).toString()).split(' ');
    const checkIn = `${checkInFullDate[1]} ${checkInFullDate[2]}, ${checkInFullDate[3]}`;
    const checkOutFullDate = ((new Date(booking.checkOut)).toString()).split(' ');
    const checkOut = `${checkOutFullDate[1]} ${checkOutFullDate[2]}, ${checkOutFullDate[3]}`;

    const handleClick = () => {
       setCheckIn(booking.checkIn.slice(0, 16));
       setCheckOut(booking.checkOut.slice(0, 16));
    }

    return (
        <div className='booking-div'>
            <h3>Your stay at:</h3>
            <h2>{spot.name}</h2>
            <NavLink to={`/spots/${spot.id}`} onClick={handleClick}>
                <img className='booking-img' src={spot.image} alt=''></img>
            </NavLink>
            <h3 className='booking-h3'>Hosted by {host.firstName} {host.lastName}</h3>
            <h3 className='booking-h3'>{checkIn} - {checkOut}</h3>
        </div>
    );
}

export default BookingWidget;
