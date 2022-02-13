// import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useContext } from 'react';
import { getAllSpots } from '../../store/spot';
import { getAllSpotsByLocation } from '../../store/spot';
import { BookingContext } from '../../context/BookingContext';
import SpotWidget from '../SpotWidget/SpotWidget';
import StateList from './StateList';

import './SpotsGallery.css';

function SpotsGallery() {
    const { location } = useContext(BookingContext);
    const dispatch = useDispatch();
    const spotList = useSelector((state) => Object.values(state.spot));
    const spotListByLocation = useSelector((state) => state.spot?.spotList);

    useEffect(() => {
        if (location.length) dispatch(getAllSpotsByLocation(location))
        else dispatch(getAllSpots());
    }, [dispatch, location]);

    return (
        <>
            <h1>Spots Gallery</h1>
            <StateList />
            <div className='spots-container'>
                {spotListByLocation !== undefined ? (spotListByLocation?.length > 0 ? <h1>Location</h1> : <h2>Nothing found</h2>) : (spotList.map(spot => spot && (<SpotWidget key={`${spot.id}`} spot={spot}/>)))}
            </div>
        </>
    );
}

export default SpotsGallery;
