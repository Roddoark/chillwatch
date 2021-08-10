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
  src: 'https://images.justwatch.com/poster/100348362/s718/saison-1.webp',
};


export default Moviecard;
