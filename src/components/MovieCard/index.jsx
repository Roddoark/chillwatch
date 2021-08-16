import React from 'react'
import PropTypes from 'prop-types';

import "./movieCard.scss";

const Moviecard = (props) => {
  const { src, alt } = props;

  return (
      <img
        className="horizontal-title-list__item"
        src={src}
        alt={alt}
      />
  )
}

Moviecard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

Moviecard.defaultProps = {
  src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oAb9gwwziYULI7FcM23A9tPfcUz.jpg',
};


export default Moviecard;
