import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useContext, useState } from 'react';
import { getAllSpots } from '../../store/spot';
import { BookingContext } from '../../context/BookingContext';

import './SpotsGallery.css';

function StateList () {
    const dispatch = useDispatch();
    const { location, setLocation } = useContext(BookingContext);
    const spotList = useSelector((state) => Object.values(state.spot));
    const [more, setMore] = useState(false);

    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch]);

    return (
        <ul id='states-nav'>
            <li className={(location === '') ? 'active-li' : null} onClick={() => setLocation('')}>All</li>
            {spotList.map((spot, idx) => (more || idx < 10) ? <li key={`${spot.id}`} onClick={() => setLocation(spot.state)} className={(location === spot.state) ? 'active-li' : null}>{spot.state}</li> : null)}
            <li onClick={() => setMore(!more)}>{more ? 'Hide' : 'More'}</li>
        </ul>
    );
}

export default StateList;
