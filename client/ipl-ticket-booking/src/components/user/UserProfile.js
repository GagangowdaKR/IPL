import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import Footer
 from "../common/Footer";
const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const aadhar = localStorage.getItem("aadhar");
    fetch(`http://localhost:8080/api/get-user-by-aadhar?aadhar=${aadhar}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div className="user-profile-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">
          <i className="fa fa-user" /> User Profile
        </h1>
        <Link to="/user-dashboard" className="nav-link">
        <i className="fa-solid fa-columns" /> Dashboard
        </Link>
      </nav>

      {/* Profile Section */}
      <div className="profile-content">
        <div className="profile-card">
          {/* Profile Photo */}
          <div className="profile-photo">
            <img
              src="https://via.placeholder.com/150"
              alt="User"
              className="photo-circle"
            />
          </div>

          {/* User Details */}
          {userData ? (
            <div className="profile-details">
              <h2 className="user-name">
                <i className="fa fa-id-card" /> {userData.firstName} {userData.lastName}
              </h2>
              <p className="user-title">Professional Details</p>
              <div className="details-grid">
                <div className="details-item">
                  <label>
                    <i className="fa fa-user-circle" /> Username:
                  </label>
                  <span>{userData.username}</span>
                </div>
                <div className="details-item">
                  <label>
                    <i className="fa fa-envelope" /> Email:
                  </label>
                  <span>{userData.email}</span>
                </div>
                <div className="details-item">
                  <label>
                    <i className="fa fa-phone" /> Mobile:
                  </label>
                  <span>{userData.mobileNumber}</span>
                </div>
                <div className="details-item">
                  <label>
                    <i className="fa fa-venus-mars" /> Gender:
                  </label>
                  <span>{userData.gender}</span>
                </div>
                <div className="details-item">
                  <label>
                    <i className="fa fa-home" /> Address:
                  </label>
                  <span>
                    {userData.address}, {userData.city}, {userData.state} -{" "}
                    {userData.pincode}
                  </span>
                </div>
                <div className="details-item">
                  <label>
                    <i className="fa fa-id-badge" /> Aadhar:
                  </label>
                  <span>{userData.aadhar}</span>
                </div>
              </div>
            </div>
          ) : (
            <p className="loading">
              <i className="fa fa-spinner fa-spin" /> Loading user data...
            </p>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default UserProfile;
