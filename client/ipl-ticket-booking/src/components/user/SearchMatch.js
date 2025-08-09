import React, { useState } from "react";
import { Link } from "react-router-dom";
import MatchCard from '../common/MatchCard'
import "./SearchMatch.css";
// import Footer from '../common/Footer'

const SearchMatch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [matches, setMatches] = useState([]);
  const defaultImage =
    "https://tse1.mm.bing.net/th?id=OIP.X0IPG96WGtUWfSvNPHMSPQHaEK&pid=15.1";

  const handleSearch = () => {
    fetch(`http://localhost:8080/api/search-matches?match=${searchInput}`)
      .then((response) => response.json())
      .then((data) => setMatches(data))
      .catch((error) => console.error("Error fetching matches:", error));
  };

  return (
    <div className="search-match-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">
          <i className="fa fa-search" /> Search Matches
        </h1>
        <Link to="/user-dashboard" className="nav-link">
          <i className="fa-solid fa-columns" />
             Dashboard
        </Link>
      </nav>

      {/* Search Section */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Enter match name..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          <i className="fa fa-search" /> Search
        </button>
      </div>

      {/* Matches List */}
      <div className="matches-list">
        {matches.length > 0 ? (
          matches.map((match) => (
            <MatchCard key={match.id} match={match} defaultImage={defaultImage} />
          ))
        ) : (
          <p className="no-results">
            <i className="fa fa-frown-o" /> No matches found
          </p>
        )}
        
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default SearchMatch;
