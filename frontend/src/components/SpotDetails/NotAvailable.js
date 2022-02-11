import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';
import { deleteOneBooking } from '../../store/booking';

function NotAvailable ({spotNotAvail}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const { checkIn, setCheckIn, checkOut, setCheckOut, numOfGuests, setNumOfGuests } = useContext(BookingContext);

    const handleCancel = (e) => {
        e.preventDefault();
        dispatch(deleteOneBooking(spotNotAvail.id));
    }

    return (
        <>
            <h2>Spot not available on these dates.</h2>
                <p>Change your dates:</p>
                    <form>
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
                            <form onSubmit={handleCancel}>
                                <button id='cancel-book-button'>Cancel Booking</button>
                            </form>
                        </div>
                    )
            }
        </>
    );
}

export default NotAvailable;
