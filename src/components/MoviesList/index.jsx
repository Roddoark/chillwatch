import React from 'react'
import PropTypes from 'prop-types';

import "./_moviesList.scss"
import Moviecard from "../MovieCard"

const MoviesList = (props) => {
  const { items } = props;
  console.log(props);
  return (
      <div className="list__items">
        {items.map((item) => {
          return <Moviecard  key={item.id} {...item} />;
        })}
      </div>

  )
}

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  )
};

export default MoviesList;
