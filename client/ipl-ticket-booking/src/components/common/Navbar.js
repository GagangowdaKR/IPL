import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

function Navbar({ onLocationChange }) {

  const handleLocationChange = (event) => {
    const location = event.target.value;
    if (onLocationChange) {
      onLocationChange(location);  // Notify the parent component with the selected location
    }
  };
  
  return (
    <nav className="navbar">
      {/* Left Section: IPL Logo */}
      <div className="navbar-logo">
        <Link to={'/'}>
        <img src={logo}
          // src="../logo.png" // Replace with the actual path to your IPL logo
          alt="IPL Logo"
        />
        </Link>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="navbar-middle">
        <div className="navbar-search">
          <input type="text" placeholder="Search matches, teams..." />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* Right Section: Location & Login */}
      <div className="navbar-right">
        <div className="navbar-location">
          <i className="fas fa-map-marker-alt"></i>
          <select onChange={handleLocationChange}>
            <option value="">Location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div className="navbar-login">
          <button onClick={() => (window.location.href = '/Login')}>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
