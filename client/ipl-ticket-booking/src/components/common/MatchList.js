import React, { useState, useEffect, useRef } from 'react';
import MatchCard from './MatchCard';
import './MatchList.css';

function MatchList() {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/getAllMatch');
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setMatches(data);
          } else {
            setError('No matches available.');
          }
        } else {
          setError('Failed to fetch matches.');
        }
      } catch (error) {
        setError('Error fetching data.');
        console.error('Error:', error);
      }
    };

    fetchMatches();
  }, []);

  const handleMouseDown = (e) => {
    const container = scrollContainerRef.current;
    container.isDragging = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeft = container.scrollLeft || 0;
  };

  const handleMouseMove = (e) => {
    const container = scrollContainerRef.current;
    if (!container.isDragging) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 2; // Adjust scroll sensitivity
    container.scrollLeft -= walk;
    container.startX = x;
  };

  const handleMouseUp = () => {
    const container = scrollContainerRef.current;
    container.isDragging = false;
  };

  const handleMouseLeave = () => {
    const container = scrollContainerRef.current;
    container.isDragging = false;
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="match-list-container">
        <h2 className='ListHead'>All Matches</h2>
      {matches.length > 0 ? (
        <div
          className="horizontal-scroll"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {matches.map((match, index) => (
            <MatchCard
              key={index}
              match={match}
              defaultImage="https://tse1.mm.bing.net/th?id=OIP.X0IPG96WGtUWfSvNPHMSPQHaEK&pid=15.1"
            />
          ))}
        </div>
      ) : (
        <p>Loading matches...</p>
      )}
    </div>
  );
}

export default MatchList;
