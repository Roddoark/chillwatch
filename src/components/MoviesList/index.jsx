import React from 'react'

import "./moviesList.scss"
import Moviecard from "../MovieCard"

const MoviesList = () => {
  return (

      <div className="list__items">
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/4VlXER3FImHeFuUjBShFamhIp9M.jpg" />
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/4VlXER3FImHeFuUjBShFamhIp9M.jpg" />
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/4VlXER3FImHeFuUjBShFamhIp9M.jpg" />
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/4VlXER3FImHeFuUjBShFamhIp9M.jpg" />
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/4VlXER3FImHeFuUjBShFamhIp9M.jpg" />
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/4VlXER3FImHeFuUjBShFamhIp9M.jpg" />
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/4VlXER3FImHeFuUjBShFamhIp9M.jpg" />
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/4VlXER3FImHeFuUjBShFamhIp9M.jpg" />
      </div>

  )
}

export default MoviesList;
