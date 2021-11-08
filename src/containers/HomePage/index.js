import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import "regenerator-runtime/runtime.js";
import "./_homepage.scss"

import MovieCard from "~components/MovieCard"

import Filter from '~components/Filter'

const HomePage = () => {

  const [data, setData] = useState({ results: [] });
  useEffect(async () => {
    const result = await axios(
      'https://api.themoviedb.org/3/discover/movie?api_key=9ee91213b6ce1d291c1d9ed220b32e96&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
    );
    setData(result.data);
  });

  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
    <Filter toggle={toggle} onToggle={handleToggle} label="Genre"/>
    <div className="list__items">
      {data.results.map(item => {
        let path_img = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`
        return (
          <>
          <p>ID du film : {item.id}</p>
          <Link key={item.id} to={`/movie/${item.id}`}><MovieCard key={item.original_title} src={path_img} alt={item.original_title} /></Link>
          </>
        )
      })}
    </div>
    </>
  )
}

export default HomePage;
