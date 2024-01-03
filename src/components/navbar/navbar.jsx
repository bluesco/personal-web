import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='navbar__leftside'>
        <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
      </div>

      <div className='navbar__rightside'>
        <p>, </p>
        <NavLink to="/about" activeClassName="active-link">About</NavLink>
        <p>, </p>
        <NavLink to="/projects" activeClassName="active-link">Projects</NavLink>
      </div>
      
    </div>
  );
};


export default Navbar;
