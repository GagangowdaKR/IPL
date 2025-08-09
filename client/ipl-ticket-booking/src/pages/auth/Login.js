import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [loginType, setLoginType] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = (type) => {
    setLoginType(type);
    setUsername('');
    setPassword('');
    setMessage('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const endpoint = loginType === 'user' ? '/api/login' : '/api/admin-login';
    const query = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

    fetch(`http://localhost:8080${endpoint}?${query}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setMessage(
            `<div class="alert alert-success"><strong>Success!</strong> Logged in successfully.</div>`
          );

          // Store details in localStorage
          localStorage.setItem('type', loginType);
          localStorage.setItem('aadhar', data.message);

          // Navigate to the appropriate dashboard
          if (loginType === 'user') {
            navigate('/user-dashboard');
          } else {
            navigate('/admin-dashboard');
          }
        } else {
          setMessage(
            `<div class="alert alert-danger"><strong>Error!</strong> Invalid username or password.</div>`
          );
        }
      })
      .catch(() => {
        setMessage(
          `<div class="alert alert-danger"><strong>Error!</strong> Unable to connect to the server. Please try again later.</div>`
        );
      });
  };

  return (
    <div className="login-page">
      <span className="back-icon" onClick={() => navigate('/')}>
        &#x21A9; {/* Bent left arrow (↩) */}
      </span>
      {!loginType ? (
        <div className="login-choice">
          <h2>Welcome to IPL Ticket Booking</h2>
          <p>Choose your login type:</p>
          <div className="login-buttons">
            <button className="choice-button" onClick={() => handleLoginClick('user')}>
              User Login
            </button>
            <button className="choice-button" onClick={() => handleLoginClick('admin')}>
              Admin Login
            </button>
          </div>
        </div>
      ) : (
        <div className={`login-form ${loginType}-form`}>
          <span className="back-icon" onClick={() => setLoginType(null)}>
            &#x21A9; {/* Bent left arrow (↩) */}
          </span>
          <h2>{loginType === 'user' ? 'User Login' : 'Admin Login'}</h2>

          <form onSubmit={handleLoginSubmit}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>

          {/* Message Container */}
          <div
            id="messageContainer"
            dangerouslySetInnerHTML={{ __html: message }}
          ></div>

          {loginType === 'user' && (
            <p className="register-link">
              <br></br>
              Don't have an account?{' '}
              <span
                className="register-link-text"
                onClick={() => navigate('/register')}
              >
                Register here
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Login;
