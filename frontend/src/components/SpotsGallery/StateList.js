import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useContext } from 'react';
import { getAllSpots } from '../../store/spot';
import { BookingContext } from '../../context/BookingContext';

import './SpotsGallery.css';

function StateList () {
    const dispatch = useDispatch();
    const { setLocation } = useContext(BookingContext);
    const spotList = useSelector((state) => Object.values(state.spot));

    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch]);

    return (
        <ul id='states-nav'>
            <li>All</li>
            { spotList && spotList.map((spot, i) => (i < 10) && (<li key={i} onClick={() => setLocation(spot.state)}>{spot.state}</li>))}
            <li>Filters</li>
        </ul>
    );
}

export default StateList;
