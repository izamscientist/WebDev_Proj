import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import iconwave from './imgs/wave.png';
import DropdownMenu from './dropdown2.js'; // Import your dropdown menu component
import './style.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='bg-blue-500 p-4'>
      <nav className='navbar flex items-center'>
        <div className='logo flex'>
          <img src={iconwave} className='w-32 h-'></img>
          BLUESEA
        </div>
        <div className='list-cont flex justify-end'>
          <ul className='nav-items hidden md:flex'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/booking">Booking</Link></li>
          </ul>
          {/* Dropdown Menu Button */}
          <button
            className="md:hidden ml-4 focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {/* Dropdown Menu Component */}
      {showMenu && <DropdownMenu />}
    </header>
  );
};

export default Navbar;