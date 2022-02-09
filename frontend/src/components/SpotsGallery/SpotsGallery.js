import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSpots } from '../../store/spot';
import SpotWidget from '../SpotWidget/SpotWidget';

import './SpotsGallery.css';

function SpotsGallery() {
    const dispatch = useDispatch();
    const spotList = useSelector((state) => Object.values(state.spot));

    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch]);

    return (
        <>
            <h1>Spots Gallery</h1>
            <ul id='states-nav'>
                <li key='all'>All</li>
                {spotList.map(spot => <li key={spot.id}>{spot.state}</li>)}
                <li key='filters'>Filters</li>
            </ul>
            <div className='spots-container'>
                { spotList.map(spot => <SpotWidget key={spot.id} spot={spot}/>) }
            </div>
        </>
    );
}

export default SpotsGallery;
