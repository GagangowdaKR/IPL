import React from 'react';
import './Latest.css';

function Latest() {
  return (
    <div 
      className="marquee-container"
      onMouseOver={() => document.querySelector('.marquee-text').classList.add('paused')}
      onMouseOut={() => document.querySelector('.marquee-text').classList.remove('paused')}
    >
      <div className="marquee-text">
        <a href="/ipl-2025" className="marquee-link">🏏 Tata IPL 2025 will begin soon !!!!!! </a>
        <span> | </span>
        <a href="/ticket-booking" className="marquee-link">🥎 Ready To Bowl for your ticket</a>
      </div>
    </div>
  );
}

export default Latest;
