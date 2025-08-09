import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Latest from '../../components/common/Latest';
import MatchList from '../../components/common/MatchList';
import LocationMatch from '../../components/common/LocationMatch';
import Footer from '../../components/common/Footer';
import ChatBot from '../../components/common/ChatBot';

function Home() {
  const [location, setLocation] = useState('');

  // Handle location change from Navbar
  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div>
      <Navbar onLocationChange={handleLocationChange} />
      <Latest />
      <LocationMatch location={location} />
      <MatchList />
      <ChatBot/>
      <Footer/>
    </div>
  );
}

export default Home;
