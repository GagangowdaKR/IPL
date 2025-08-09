import React, { useState } from 'react';
import UserNavbar from '../../components/user/UserNavbar';
import Latest from '../../components/common/Latest';
import MatchList from '../../components/common/MatchList';
import Footer from '../../components/common/Footer';
import ChatBot from '../../components/common/ChatBot';
import LocationMatch from '../../components/common/LocationMatch';
import UserSidebar from '../../components/user/UserSidebar';

function UserDashboard() {
  const [location, setLocation] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to track sidebar visibility

  // Handle location change from Navbar
  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  // Toggle sidebar visibility
  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar visibility
  };

  return (
    <div>
      {/* Conditionally render the sidebar based on the state */}
      <UserSidebar className={isSidebarOpen ? 'open' : ''} /> {/* Add 'open' class if sidebar is open */}
      <UserNavbar onLocationChange={handleLocationChange} handleSidebar={handleSidebar} />
      <Latest />
      <LocationMatch location={location} />
      <MatchList />
      <ChatBot />
      <Footer />
      
    </div>
  );
}

export default UserDashboard;
