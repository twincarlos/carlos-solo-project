import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import BookingSearchBar from '../BookingSearchBar/BookingSearchBar';
import ProfileLinks from '../ProfileLinks';
import * as sessionActions from "../../store/session";
import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const loginDemo = () => {
    return dispatch(sessionActions.login({ credential: 'jeff@bezos.io', password: 'password' }));
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        {sessionUser.isHost ? null : <a id='become-host' href='/host'>Become a Host</a>}
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink id='navlink' to="/signup">Sign Up</NavLink>
        <button id='demo-login' type='submit' onClick={() => loginDemo()}>Demo</button>
      </>
    );
  }

  return (
    <>
      <ul id='nav'>
        <li>
          <NavLink id='home' exact to="/">Home</NavLink>
          <BookingSearchBar />
          {isLoaded && sessionLinks}
        </li>
      </ul>
      <ProfileLinks />
    </>
  );
}

export default Navigation;
