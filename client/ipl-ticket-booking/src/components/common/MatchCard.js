import React from 'react';
import './MatchCard.css';

function MatchCard({ match, defaultImage }) {
  return (
    <div className="match-card">
      <img src={defaultImage} alt="Match" className="match-image" />
      <div className="match-details">
        <h3 className="match-name">{match.matchName}</h3>
        <p className="match-location">📍 {match.location}</p>
        <p className="match-date">📅 {match.date}</p>
        <p className="match-time">⏰ {match.time}</p>
        <p className="match-number">#️⃣ Match {match.matchNumber}</p>
      </div>
    </div>
  );
}

export default MatchCard;
