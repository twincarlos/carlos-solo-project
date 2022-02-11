import { useDispatch, useSelector } from 'react-redux';
import { useState, useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';

function NotAvailable ({spotNotAvail}) {
    const sessionUser = useSelector(state => state.session.user);
    const { checkIn, setCheckIn, checkOut, setCheckOut, numOfGuests, setNumOfGuests } = useContext(BookingContext);
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const errArr = [];

        const now = Date.now();
        const checkinTime = (new Date(checkIn)).getTime();
        const checkoutTime = (new Date(checkOut)).getTime();

        if (checkinTime > checkoutTime || now > checkinTime) errArr.push('Enter a valid check-in and check-out time.');
        if (numOfGuests < 1) errArr.push('Enter at least 1 guest.');
        if (numOfGuests > spotNotAvail.numOfGuests) errArr.push(`Only ${spotNotAvail.numOfGuests} allowed.`);

        setErrors(errArr);

        if (!errArr.length) {
            const newBooking = {
                spotId: spotNotAvail.id,
                userId: sessionUser.id,
                checkIn,
                checkOut
            }
            // dispatch(createOneBooking(newBooking));
            console.log(newBooking);
        }
    }

    return (
        <>
            <h2>Spot not available on these dates.</h2>
                <p>Change your dates:</p>
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
                    </form>
            {
                (sessionUser?.id === spotNotAvail.userId) &&
                    (
                        <div id='booking-div'>
                            <p>Or cancel your booking:</p>
                            <button id='cancel-book-button'>Cancel Booking</button>
                        </div>
                    )
            }
        </>
    );
}

export default NotAvailable;
