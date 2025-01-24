import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  return (
    <div className="md:hidden absolute top-16 right-0 bg-white border shadow-md">
      <ul className="py-2">
        <li>
          <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/booking" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Booking
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
