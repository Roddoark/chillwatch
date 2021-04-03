import React from 'react'
import "./searchbar.scss";

const Searchbar = () => {
  return (
    <div className="search">
      <input
        type="search"
        aria-label="search text"
        className="searchTerm"
        placeholder="Rechercher un film ou une série"
        autocomplete="off"
        autocorrect="off"
        spellcheck="false"
      />
      <button type="submit" className="searchButton">
        >
    </button>
    </div>
  )
}

export default Searchbar;
