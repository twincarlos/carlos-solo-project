import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BookingContext } from '../../context/BookingContext';

import './BookingSearchBar.css';

function BookingSearchBar () {
    const [activeClass, setActiveClass] = useState('');
    const [location, setLocation] = useState('');
    const { checkIn, setCheckIn, checkOut, setCheckOut, numOfGuests, setNumOfGuests, errors, setErrors } = useContext(BookingContext);
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const errArr = [];

        const now = Date.now();
        const checkinTime = (new Date(checkIn)).getTime();
        const checkoutTime = (new Date(checkOut)).getTime();

        if (location.length === 0) errArr.push('Enter a valid location.');
        if (checkinTime > checkoutTime || now > checkinTime) errArr.push('Enter a valid check-in and check-out time.');
        if (numOfGuests < 1) errArr.push('Enter at least 1 guest.');

        setErrors(errArr);

        if (errArr.length === 0) {
            history.push('/spots');
        }
    }

    return (
        <form className='booking-form' onSubmit={handleSubmit}>
            {errors.length > 0 ? <ul>{ errors.map((err, i) => <li key={i}>{err}</li>) }</ul> : null}
            <label className={`booking-form ${activeClass === 'location' ? 'selected' : null}`} onClick={() => setActiveClass('location')}>
                Location
                <input
                    className='booking-form'
                    type='text'
                    placeholder='Where are you going?'
                    onChange={(e) => setLocation(e.target.value)}
                />
            </label>
            <label className={`booking-form ${activeClass === 'checkIn' ? 'selected' : null}`} onClick={() => setActiveClass('checkIn')}>
                Check-in
                <input
                    className='booking-form'
                    type='datetime-local'
                    onChange={(e) => setCheckIn(e.target.value)}
                    value={checkIn}
                />
            </label>
            <label className={`booking-form ${activeClass === 'checkOut' ? 'selected' : null}`} onClick={() => setActiveClass('checkOut')}>
                Check-out
                <input
                    className='booking-form'
                    type='datetime-local'
                    onChange={(e) => setCheckOut(e.target.value)}
                    value={checkOut}
                />
            </label>
            <label className={`booking-form ${activeClass === 'guests' ? 'selected' : null}`} onClick={() => setActiveClass('guests')}>
                Guests
                <input
                    className='booking-form'
                    type='number'
                    placeholder='1 guest'
                    onChange={(e) => setNumOfGuests(e.target.value)}
                    value={numOfGuests}
                />
            </label>
            <button id='booking-bar-button' type='submit'>
                <i className="fas fa-search"/>
            </button>
        </form>
    );
}

export default BookingSearchBar;
