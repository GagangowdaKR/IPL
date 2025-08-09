import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatchCard from './MatchCard'; // Import MatchCard component
import './LocationMatch.css'; // Optional, for styling

function LocationMatch({ location }) {
  const [matchDetails, setMatchDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [locationSelected, setLocationSelected] = useState(false);

  useEffect(() => {
    // Fetch match details when the location changes
    if (location) {
      setLocationSelected(true); // Set locationSelected to true once a location is provided
      axios
        .get(`http://localhost:8080/api/getMatchesByLocation?location=${location}`)
        .then((response) => {
          setMatchDetails(response.data);
          setLoading(false); // Data is loaded
        })
        .catch((error) => {
          console.error('Error fetching match details:', error);
          setMatchDetails([]); // Clear match details on error
          setLoading(false); // Stop loading
        });
    }
  }, [location]); // Trigger on location change

  return (
    <div className="location-match">
      {locationSelected && (
        <>
          <h2 className='ListHead'>Matches in {location}</h2>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="match-card-container">
              {matchDetails.length > 0 ? (
                matchDetails.map((match) => (
                  <MatchCard
                    key={match.id}
                    match={match}
                    defaultImage="https://tfiglobalnews.com/wp-content/uploads/2022/11/M_Chinnaswamy_Stadium_RCB_match.jpg" // Default image
                  />
                ))
              ) : (
                <p>No matches available for this location.</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default LocationMatch;
