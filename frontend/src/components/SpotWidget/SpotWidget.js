import { NavLink } from 'react-router-dom';

import './SpotWidget.css';

function SpotWidget ({ spot }) {
    return (
        <div className='spot-widget'>
            <NavLink to={`/spots/${spot.id}`}>
                <img className='widget-img' src={spot.image} alt=''/>
            </NavLink>
            <span>
                <h3>{spot.name}</h3>
                <p>${spot.price} / night</p>
            </span>
        </div>
    );
}

export default SpotWidget;
