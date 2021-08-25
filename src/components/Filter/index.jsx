import React from 'react';
import PropTypes from 'prop-types';

import "./filter.scss";

import Popover from "~components/Popover"

const Filter = (props) => {
  const { label, toggle, onToggle } = props;

  return (
    <>
      <button
        type="button"
        className="filterButton"
        onClick={onToggle}
        >
        {label}
      </button>

      {toggle && <Popover />}
    </>
  )
}

Filter.propTypes = {
    label: PropTypes.string,
    onToggle: PropTypes.func,
    toggle: PropTypes.bool,
  };

export default Filter;
