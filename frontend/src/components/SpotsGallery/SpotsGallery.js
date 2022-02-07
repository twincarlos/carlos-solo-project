import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSpots } from '../../store/spot';

import './SpotsGallery.css';

function SpotsGallery() {
    const dispatch = useDispatch();
    const spotList = useSelector((state) => Object.values(state.spot));
    console.log(spotList);

    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch]);

    return (
        <>
            <h1>Spots Gallery</h1>
            <div id='states-nav'>
                
            </div>
        </>
    );
}

export default SpotsGallery;
