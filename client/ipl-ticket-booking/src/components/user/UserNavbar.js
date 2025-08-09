import React, { useState, useEffect } from 'react';
import './UserNavbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function UserNavbar({ onLocationChange, handleSidebar }) {
  const [userName, setUserName] = useState(""); // State to store the username

  // Fetch the username on component mount
  useEffect(() => {
    async function getUserName() {
      try {
        const response = await fetch(`http://localhost:8080/api/getUserName?aadhar=${localStorage.getItem('aadhar')}`);
        
        // The response is expected to be a plain string, so no need for .json()
        const data = await response.text();  // Use .text() instead of .json()

        setUserName(data); // Set the username string directly
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    
    getUserName();
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  const handleLocationChange = (event) => {
    const location = event.target.value;
    if (onLocationChange) {
      onLocationChange(location); // Notify the parent component with the selected location
    }
  };

  return (
    <nav className="navbar">
      {/* Left Section: IPL Logo */}
      <div className="navbar-logo">
        <Link to={'/user-dashboard'}>
          <img src={logo} alt="IPL Logo" />
        </Link>
      </div>

      {/* Display User's Name */}
      <h4>Welcome, {userName ? userName : 'Loading...'}</h4> {/* Display username or 'Loading...' if not yet fetched */}

      {/* Middle Section: Search Bar */}
      <div className="navbar-middle">
        <div className="navbar-search">
          <input type="text" placeholder="Search matches, teams..." />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* Right Section: Location & Menu Icon */}
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

        {/* Menu Icon to Open Sidebar */}
        <div className="navbar-menu">
          <button onClick={handleSidebar}>
            <i className="fas fa-bars"></i> {/* Menu Icon */}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
