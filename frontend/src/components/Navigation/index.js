import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import { getOneUser } from '../../store/user';
import BookingSearchBar from '../BookingSearchBar/BookingSearchBar';
import { BookingContext } from '../../context/BookingContext';
import ProfileLinks from '../ProfileLinks';
import * as sessionActions from "../../store/session";
import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const user = useSelector(state => state.user.user);
  const { render } = useContext(BookingContext);

  const loginDemo = () => {
    return dispatch(sessionActions.login({ credential: 'jeff@bezos.io', password: 'password' }));
  }

  useEffect(() => {
    dispatch(getOneUser(sessionUser?.id));
  }, [dispatch, render]);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        {(user?.isHost ? null : <a id='become-host' href='/host'>Become a Host</a>)}
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
