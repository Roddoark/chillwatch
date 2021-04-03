import React from 'react'
import PropTypes from 'prop-types';

import "./searchbar.scss";

const Searchbar = (props) => {
  const { placeholder } = props;
  return (
    <div className="search">
      <input
        type="search"
        aria-label="search text"
        className="searchTerm"
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
      />
      <button type="submit" className="searchButton">
        >
    </button>
    </div>
  )
}

Searchbar.propTypes = {
  placeholder: PropTypes.string
};

export default Searchbar;
