import React from 'react';
import { Link } from 'react-router-dom';
import './UserSidebar.css';
import logo from '../../assets/logo.png'; // Assuming you have a logo image in this path

function UserSidebar({ className }) {
  const handleLogout = () => {
    localStorage.clear(); // Clear all data from local storage
    window.location.href = '/login'; // Redirect to login page after logout
  };

  return (
    <div className={`sidebar ${className}`}>
      {/* Sidebar Logo */}
      <div className="sidebar-header">
        <img src={logo} alt="IPL Logo" className="sidebar-logo" />
      </div>

      {/* Sidebar Menu */}
      <div className="sidebar-menu">
       <Link to="/user-profile" className="sidebar-item">
          <i className="fas fa-user"></i>
          <span className="sidebar-text">User Profile</span>
        </Link>
        
        <Link to="/search-match" className="sidebar-item">
          <i className="fas fa-search"></i>
          <span className="sidebar-text">Search Match</span>
        </Link>

        <Link to="/book-ticket" className="sidebar-item">
          <i className="fas fa-ticket-alt"></i>
          <span className="sidebar-text">Book Ticket</span>
        </Link>

        <Link to="/view-booked-tickets" className="sidebar-item">
          <i className="fas fa-list"></i>
          <span className="sidebar-text">View Booked Tickets</span>
        </Link>

        <Link to="/contact-us" className="sidebar-item">
          <i className="fas fa-envelope"></i>
          <span className="sidebar-text">Contact Us</span>
        </Link>

        <Link to="/help-center" className="sidebar-item">
          <i className="fas fa-question-circle"></i>
          <span className="sidebar-text">Help Center</span>
        </Link>

        {/* Logout button */}
        <div className="sidebar-item" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i>
          <span className="sidebar-text">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default UserSidebar;
