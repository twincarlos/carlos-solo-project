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
                <p><i className="fas fa-dollar-sign"></i> {spot.price} / night</p>
            </span>
            <p><i className="fas fa-map-marker-alt"></i> {`${spot.city}, ${spot.state}`}</p>
        </div>
    );
}

export default SpotWidget;
