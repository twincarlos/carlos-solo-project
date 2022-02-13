import { useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BookingContext } from '../../context/BookingContext';
import { getAllSpotsByLocation } from '../../store/spot';

import './BookingSearchBar.css';

function BookingSearchBar () {
    const dispatch = useDispatch();
    const [go, setGo] = useState(false);
    const { location, setLocation, checkIn, setCheckIn, checkOut, setCheckOut, numOfGuests, setNumOfGuests, errors, setErrors } = useContext(BookingContext);
    const [myLoc, setMyLoc] = useState(location);
    let history = useHistory();

    useEffect(() => {
        setGo(false);
    }, [myLoc, checkIn, checkOut, numOfGuests])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (go) {
            setLocation('');
            setErrors([]);
            return history.push('/spots');
            // return null;
        }

        const errArr = [];

        const now = Date.now();
        const checkinTime = (new Date(checkIn)).getTime();
        const checkoutTime = (new Date(checkOut)).getTime();

        if (myLoc.length === 0) errArr.push('Enter a valid location.');
        if (checkinTime > checkoutTime || now > checkinTime) errArr.push('Enter a valid check-in and check-out time.');
        if (numOfGuests < 1) errArr.push('Enter at least 1 guest.');

        setErrors(errArr);

        if (errArr.length === 0) {
            setLocation(myLoc);
            dispatch(getAllSpotsByLocation(location));
            history.push('/spots');
        }
    }

    return (
            <form className='booking-form' onSubmit={handleSubmit}>
                <button id='booking-free-button' onClick={() => setGo(true)}>
                    <i className="fas fa-rocket"></i>
                </button>
                {errors.length > 0 ? <ul>{ errors.map((err, i) => <li key={i}>{err}</li>) }</ul> : null}
                <label className='booking-form'>
                    Location
                    <input
                        className='booking-form'
                        type='text'
                        placeholder='Where are you going?'
                        value={myLoc}
                        onChange={(e) => setMyLoc(e.target.value)}
                    />
                </label>
                <label className='booking-form'>
                    Check-in
                    <input
                        className='booking-form'
                        type='datetime-local'
                        onChange={(e) => setCheckIn(e.target.value)}
                        value={checkIn}
                    />
                </label>
                <label className='booking-form'>
                    Check-out
                    <input
                        className='booking-form'
                        type='datetime-local'
                        onChange={(e) => setCheckOut(e.target.value)}
                        value={checkOut}
                    />
                </label>
                <label className='booking-form'>
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
