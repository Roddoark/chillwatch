import React from 'react'

import "./_moviesList.scss"
import Moviecard from "../MovieCard"

const MoviesList = () => {
  return (
      <div className="list__items">
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/1Iml5MpQhV2QyHHIZ4Rzm6IB7vD.jpg" />
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" />
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/1Iml5MpQhV2QyHHIZ4Rzm6IB7vD.jpg" />
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" />
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/1Iml5MpQhV2QyHHIZ4Rzm6IB7vD.jpg" />
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" />
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/1Iml5MpQhV2QyHHIZ4Rzm6IB7vD.jpg" />
        <Moviecard src="https://www.themoviedb.org/t/p/w1280/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" />
      </div>

  )
}

export default MoviesList;
