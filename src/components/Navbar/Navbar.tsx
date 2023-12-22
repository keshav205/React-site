import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navbar.scss';

const Navbar = () => (
  <nav className='navbar'>
    <div className='navbar__left'>
      <Link to='/' className='navbar__link'>
        {/* <img alt='logo' src='' className='navbar__img' /> */}
      </Link>
    </div>
    <div className='navbar__right'>
      <ul className='navbar__list'>
        <li className='navbar__items'>
          <HashLink to='/#about' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>01.</span>
            ABOUT US
          </HashLink>
        </li>
        <li className='navbar__items'>
          <HashLink to='/#projects' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>02.</span>
            PROJECTS
          </HashLink>
        </li>
        <li className='navbar__items'>
          <HashLink to='/#work' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>03.</span>
            CORE
          </HashLink>
        </li>
        <li className='navbar__items'>
          <NavLink to='/contact' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>04.</span>
            CONTACT US
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
