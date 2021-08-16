import React from 'react';
import PropTypes from 'prop-types';

import "./chipButton.scss";

const ChipButton = (props) => {
  const { label } = props;

  function handleclick() {
    console.log('handleclick chip button')
  }

  return (
    <button onClick={handleclick}>{label}</button>
  )
}

ChipButton.propTypes = {
    label: PropTypes.string.isRequired,
  };

export default ChipButton;
