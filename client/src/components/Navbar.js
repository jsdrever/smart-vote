import React from 'react';
import Auth from "../utils/auth";
import { Link } from 'react-router-dom';

function Navbar() {
  // const data = Auth.getProfile();
  // console.log(data)
  return (
      <>
      {/* { Auth.loggedIn() && (<div> Hello, {data.data.email} </div>)} */}
    <nav className="bg-red-800 text-white border-y-2 border-black">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/senators" className="hover:text-gray-300">
              Senators
            </Link>
          </li>
          <li>
            <Link to="/bills" className="hover:text-gray-300">
              Bills
            </Link>
          </li>
          <li>
            <Link to="/donation" className="hover:text-gray-300">
              Donation
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <Link to="/signup" className="hover:text-gray-300">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
      </>
  );
}
export default Navbar;


