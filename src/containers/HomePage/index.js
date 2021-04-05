import React from 'react'

import MoviesList from "../../components/MoviesList"

const HomePage = () => {
  const props = [
    {
      id: 'item-1',
      src: 'https://www.themoviedb.org/t/p/w1280/1Iml5MpQhV2QyHHIZ4Rzm6IB7vD.jpg',
      alt: 'Movie 1',
    },
    {
      id: 'item-2',
      src: 'https://www.themoviedb.org/t/p/w1280/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
      alt: 'Movie 2'
    }
  ];

  return (
      <>
        <MoviesList items={props} />
      </>
  )
}

export default HomePage;
