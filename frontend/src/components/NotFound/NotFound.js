import { NavLink } from 'react-router-dom';

import './NotFound.css';

function NotFound () {
    return (
        <div id='div-not-found'>
            <h1 id='text-not-found'>Well... that was awkward.</h1>
            <h1 id='text-not-found'>We couldn'd find what you're looking for.</h1>
            <h1 id='text-not-found'>Click the magic bell to return home.</h1>
            <NavLink to='/'><i className="fas fa-concierge-bell"></i></NavLink>
        </div>
    );
}

export default NotFound;
