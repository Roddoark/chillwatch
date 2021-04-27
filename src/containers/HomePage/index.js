import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "regenerator-runtime/runtime.js";
import "./_homepage.scss"

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

  const [data, setData] = useState({ results: [] });
  useEffect(async () => {
    const result = await axios(
      'https://api.themoviedb.org/3/discover/movie?api_key=9ee91213b6ce1d291c1d9ed220b32e96&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
    );
 
    setData(result.data);
  });

  return (
      <>
        {/*<MoviesList items={props} />*/}
        {data.results.map(item => {
        let path_img = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`
        return (
        <div className key={item.id}>
          <img
         src={path_img} alt={item.original_title} />
          {item.original_title}
        </div>
      )})}
      </>
  )
}

export default HomePage;
