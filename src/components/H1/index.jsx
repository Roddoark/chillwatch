import React from 'react'
import PropTypes from 'prop-types';
import "./h1.scss";

const H1 = (props) => {
  const { title } = props
  return (
    <h1 className="h1">
      {title}
    </h1>
  )
}

H1.propTypes = {
  title: PropTypes.string.isRequired
};

export default H1;
