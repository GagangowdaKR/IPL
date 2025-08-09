import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    aadhar: "",
    email: "",
    mobileNumber: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    gender: "Male",
    password: "",
    confirmPassword: "",
    confirm: false,
  });

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if city and state are selected
    if (!formData.city || !formData.state) {
      alert("Please select both the city and state.");
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const requestData = {
        username: formData.username,
        firstName: formData.firstName,
        lastName: formData.lastName,
        aadhar: formData.aadhar,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        address: formData.address,
        pincode: formData.pincode,
        city: formData.city,
        state: formData.state,
        gender: formData.gender,
        password: formData.password,
      };

      // const response = await axios.post("http://localhost:8080/api/register", requestData);

      const queryString = new URLSearchParams(requestData).toString();
      const response = await axios.get(`http://localhost:8080/api/register?${queryString}`);

      if (response.data.status === 400) {
        alert("Registration failed: " + response.data.message);
      } else {
        setSuccess(true);
        setTimeout(() => {
          navigate("/Login");
        }, 2000);
      }
    } catch (error) {
      alert("Registration failed: " + (error.response?.data || error.message));
    }
  };

  return (
    <div className="register-page">
      <form id="registerForm" className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-grid">
          {[
            { label: "Username", name: "username", type: "text" },
            { label: "First Name", name: "firstName", type: "text" },
            { label: "Last Name", name: "lastName", type: "text" },
            { label: "Aadhar Card Number", name: "aadhar", type: "text" },
            { label: "Email ID", name: "email", type: "email" },
            { label: "Mobile Number", name: "mobileNumber", type: "text" },
            { label: "Address", name: "address", type: "text" },
            { label: "Pincode", name: "pincode", type: "text" },
          ].map(({ label, name, type }) => (
            <div className="form-group" key={name}>
              <label htmlFor={name}>{label}:</label>
              <input
                type={type}
                className="form-control"
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}
          <div className="form-group">
            <label>City:</label>
            <select
              name="city"
              className="form-control"
              value={formData.city}
              onChange={handleInputChange}
              required
            >
              <option value="">Select City</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>
          <div className="form-group">
            <label>State:</label>
            <select
              name="state"
              className="form-control"
              value={formData.state}
              onChange={handleInputChange}
              required
            >
              <option value="">Select State</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Karnataka">Karnataka</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group full-width">
            <label>Gender:</label>
            {["Male", "Female", "Transgender"].map((gender) => (
              <label
                key={gender}
                className="radio-inline"
                style={{ marginLeft: "15px" }}
              >
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={handleInputChange}
                />
                {gender}
              </label>
            ))}
          </div>
          <div className="form-group full-width">
            <label>
              <input
                type="checkbox"
                name="confirm"
                checked={formData.confirm}
                onChange={handleInputChange}
              />
              Please confirm the above details are true to your knowledge
            </label>
          </div>
        </div>
        <button type="submit" className="btn-primary">
          Register
        </button>
      </form>
      {success && (
        <div className="success-message">
          <strong>Success!</strong> Registration completed successfully.
        </div>
      )}
    </div>
  );
};

export default Register;
