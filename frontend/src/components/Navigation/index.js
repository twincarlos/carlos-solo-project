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
import icon from '../../airbnb-deluxe-assets/icon.png';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const user = useSelector(state => state.user.user);
  const { render, setRender } = useContext(BookingContext);

  const loginDemo = () => {
    dispatch(sessionActions.login({ credential: 'jeff@bezos.io', password: 'password' }));
    return setRender(!render);
  }

  useEffect(() => {
    if (sessionUser) dispatch(getOneUser(sessionUser?.id));
  }, [dispatch, render]);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        {((user?.isHost || sessionUser?.isHost) ? null : <a id='become-host' href='/host'>Become a Host</a>)}
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
          <NavLink id='home' exact to="/"><img src={icon} alt=''></img></NavLink>
          <BookingSearchBar />
          {isLoaded && sessionLinks}
        </li>
      </ul>
      <ProfileLinks />
    </>
  );
}

export default Navigation;
