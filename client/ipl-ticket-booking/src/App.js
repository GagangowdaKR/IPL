// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/auth/Register'
import Login from './pages/auth/Login';
import UserDashboard from './pages/dashboard/UserDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import LocationMatch from './components/common/LocationMatch';
import UserProfile from './components/user/UserProfile'
import SearchMatch from './components/user/SearchMatch';
import Tickets from './components/user/Tickets'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Register' element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path='/locationMatch' element={<LocationMatch/>}/>
        <Route path='/user-profile' element={<UserProfile/>}/>
        <Route path='/search-match' element={<SearchMatch/>}/>
        <Route path='/view-booked-tickets' element={<Tickets/>} />

      </Routes>
    </Router>
  );
}

export default App;
