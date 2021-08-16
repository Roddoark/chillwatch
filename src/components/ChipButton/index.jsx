import React from 'react';
import PropTypes from 'prop-types';

import "./chipButton.scss";

const ChipButton = (props) => {
  const { label } = props;

  return (
    <button>{label}</button>
  )
}

ChipButton.propTypes = {
    label: PropTypes.string.isRequired,
  };

export default ChipButton;
