import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/care"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Care
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
