import { useState } from 'react';
import './BookingSearchBar.css';

function BookingSearchBar () {
    const [activeClass, setActiveClass] = useState('');

    return (
        <form className='booking-form'>
            <label className={`booking-form ${activeClass === 'location' ? 'selected' : null}`} onClick={() => setActiveClass('location')}>
                Location
                <input
                    className='booking-form'
                    type='text'
                    placeholder='Where are you going?'
                />
            </label>
            <label className={`booking-form ${activeClass === 'checkIn' ? 'selected' : null}`} onClick={() => setActiveClass('checkIn')}>
                Check-in
                <input
                    className='booking-form'
                    type='date'
                />
            </label>
            <label className={`booking-form ${activeClass === 'checkOut' ? 'selected' : null}`} onClick={() => setActiveClass('checkOut')}>
                Check-out
                <input
                    className='booking-form'
                    type='date'
                />
            </label>
            <label className={`booking-form ${activeClass === 'guests' ? 'selected' : null}`} onClick={() => setActiveClass('guests')}>
                Guests
                <input
                    className='booking-form'
                    type='number'
                />
            </label>
            <button id='booking-bar-button' type='submit'>
                <i className="fas fa-search"/>
            </button>
        </form>
    );
}

export default BookingSearchBar;
