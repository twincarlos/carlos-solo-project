import { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllSpots } from '../../store/spot';
import { BookingContext } from '../../context/BookingContext';
import logo from '../../airbnb-deluxe-assets/logo.png'

import './WhereToGo.css';

function WhereToGo() {
    const history = useHistory();
    const { setCheckIn, setCheckOut, setNumOfGuests, setErrors } = useContext(BookingContext);
    const dispatch = useDispatch();

    const reset = () => {
        const now = new Date(Date.now());
        const tomorrow = new Date(86400000 + now.getTime());
        const afterTomorrow = new Date(86400000 + tomorrow.getTime());

        setCheckIn(`${tomorrow.getFullYear()}-${((tomorrow.getMonth() + 1).toString()).length > 1 ? (tomorrow.getMonth() + 1) : `0${(tomorrow.getMonth() + 1)}`}-${((tomorrow.getDate()).toString()).length > 1 ? (tomorrow.getDate()) : `0${(tomorrow.getDate())}`}T${((tomorrow.getHours()).toString()).length > 1 ? (tomorrow.getHours()) : `0${(tomorrow.getHours())}`}:${((tomorrow.getMinutes()).toString()).length > 1 ? (tomorrow.getMinutes()) : `0${(tomorrow.getMinutes())}`}`);
        setCheckOut(`${afterTomorrow.getFullYear()}-${((afterTomorrow.getMonth() + 1).toString()).length > 1 ? (afterTomorrow.getMonth() + 1) : `0${(afterTomorrow.getMonth() + 1)}`}-${((afterTomorrow.getDate()).toString()).length > 1 ? (afterTomorrow.getDate()) : `0${(afterTomorrow.getDate())}`}T${((afterTomorrow.getHours()).toString()).length > 1 ? (afterTomorrow.getHours()) : `0${(afterTomorrow.getHours())}`}:${((afterTomorrow.getMinutes()).toString()).length > 1 ? (afterTomorrow.getMinutes()) : `0${(afterTomorrow.getMinutes())}`}`);
        setNumOfGuests(1);
        setErrors([]);
    }

    const handleSubmit = () => {
        reset();
        dispatch(getAllSpots());
        history.push('/spots');
    }

    return (
        <div id='where-to-go'>
            <NavLink id='im-rich-button' to='/spots' onClick={handleSubmit}>I'm rich</NavLink>
            <h1>Not sure where to go?</h1>
            <img id='deluxe-logo' src={logo} alt=''></img>
            <img id='mansion' src='https://www.sbidawards.com/wp-content/uploads/2020/08/0c2107c787a7815480dd1c833d285ef2a7c89183.jpg' alt=''/>
        </div>
    );
}

export default WhereToGo;
