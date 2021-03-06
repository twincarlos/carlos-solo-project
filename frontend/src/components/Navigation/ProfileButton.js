import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button id='profile-button' onClick={openMenu}>
        <p><i className="fas fa-bars"></i> {user.firstName} {user.lastName}</p>
        <img src={user.image} alt=''></img>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li><NavLink to={`/users/${user.id}`}><i className="far fa-user"></i> {user.firstName} {user.lastName}</NavLink></li>
          <li>
            <button onClick={logout}><i className="fas fa-sign-out-alt"></i> Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
