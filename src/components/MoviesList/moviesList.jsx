import React from 'react'

import "./moviesList.scss"
import Moviecard from "../MovieCard"

const MoviesList = () => {
  return (

      <div className="list__items">
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
      </div>

  )
}

export default MoviesList;
