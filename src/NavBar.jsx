import React from 'react';
import {NavLink} from 'react-router-dom';
import logoImage from './logojob.png';

export const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo" />
          <h4 className='logo-text'>Find your job</h4>
        </div>
        <div className="navLinks">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/jobs'>Jobs</NavLink>
        <NavLink to='/applied-jobs'>Applied Jobs</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        </div>
    </div >
  )
}
