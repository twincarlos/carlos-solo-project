import { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookingContext } from '../../context/BookingContext';
import { createOneBooking } from '../../store/booking';
import NotAvailable from './NotAvailable';

function BookMe ({ spot, bookedSpot }) {
    const { checkIn, setCheckIn, checkOut, setCheckOut, numOfGuests, setNumOfGuests } = useContext(BookingContext);
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const checkBookedSpot = () => {
        if (bookedSpot.length === 0) {
            return true;
        }
        for (let i = 0; i < bookedSpot.length; i++) {
            const bookedCheckInTime = (new Date(bookedSpot[i].checkIn)).getTime();
            const bookedCheckOutTime = (new Date(bookedSpot[i].checkOut)).getTime();
            const desiredCheckInTime = (new Date(checkIn)).getTime();
            const desiredCheckOutTime = (new Date(checkOut)).getTime();

            if (((desiredCheckInTime >= bookedCheckInTime) && (desiredCheckInTime <= bookedCheckOutTime)) || ((desiredCheckOutTime <= bookedCheckOutTime) && (desiredCheckOutTime >= bookedCheckInTime))) {
                return false;
            } else {
                return true;
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errArr = [];

        const now = Date.now();
        const checkinTime = (new Date(checkIn)).getTime();
        const checkoutTime = (new Date(checkOut)).getTime();

        if (checkinTime > checkoutTime || now > checkinTime) errArr.push('Enter a valid check-in and check-out time.');
        if (numOfGuests < 1) errArr.push('Enter at least 1 guest.');

        setErrors(errArr);

        if (!errArr.length) {
            const newBooking = {
                spotId: spot.id,
                userId: sessionUser.id,
                checkIn,
                checkOut
            }
            dispatch(createOneBooking(newBooking));
        }
    }

    return (
        checkBookedSpot() ?
            (<>
                <span id='price-rating'>
                    <h2>{spot.price}</h2>
                    <h2>{spot.rating}</h2>
                </span>
                {errors && (<ul>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</ul>)}
                <form onSubmit={handleSubmit}>
                    <span id='upper-form'>
                        <label id='check-in'>
                            Check-in
                            <input type='datetime-local' onChange={(e) => setCheckIn(e.target.value)} value={checkIn}></input>
                        </label>
                        <label id='check-out'>
                            Check-out
                            <input type='datetime-local' onChange={(e) => setCheckOut(e.target.value)} value={checkOut}></input>
                        </label>
                    </span>
                    <input id='lower-form' type='number' placeholder='1 guest' onChange={(e) => setNumOfGuests(e.target.value)} value={numOfGuests}></input>
                    <button id='book-button' disabled={!sessionUser}>Book</button>
                </form>
                <h3 id='your-total'>Your total is: ${(((new Date(checkOut)).getTime()) - ((new Date(checkIn)).getTime())) * (spot.price / 86400000)}</h3>
            </>)
            :
            <NotAvailable />
    );
}

export default BookMe;
