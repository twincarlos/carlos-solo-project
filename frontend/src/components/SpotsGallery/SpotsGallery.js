import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSpots } from '../../store/spot';
import { getAllSpotsByLocation } from '../../store/spot';
import { BookingContext } from '../../context/BookingContext';
import SpotWidget from '../SpotWidget/SpotWidget';

import './SpotsGallery.css';

function SpotsGallery() {
    const { location, setLocation, checkIn, setCheckIn, checkOut, setCheckOut, numOfGuests, setNumOfGuests, errors, setErrors } = useContext(BookingContext);
    const dispatch = useDispatch();
    const spotList = useSelector((state) => Object.values(state.spot));

    useEffect(() => {
        if (!location.length) dispatch(getAllSpots());
        else dispatch(getAllSpotsByLocation(location));
    }, [dispatch]);

    return (
        <>
            <h1>Spots Gallery</h1>
            <ul id='states-nav'>
                <li>All</li>
                {spotList && spotList?.map((spot, idx) => (idx < 10) && (spot && (<li key={`${spot.id}`}>{spot.state}</li>)))}
                <li>Filters</li>
            </ul>
            <div className='spots-container'>
                {spotList.map(spot => spot && (<SpotWidget key={`${spot.id}`} spot={spot}/>))}
            </div>
        </>
    );
}

export default SpotsGallery;
