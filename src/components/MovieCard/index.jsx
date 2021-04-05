import React from 'react'
import PropTypes from 'prop-types';

import "./_moviecard.scss";

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

export default Moviecard;
