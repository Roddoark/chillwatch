import React from 'react'
import { Link } from "react-router-dom";

import "./_navigation.scss";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav__header">
        <li><Link to="/">HomePage</Link></li>
        <li><Link to="/moviePage">MoviePage</Link></li>
        <li><a href="#">Populaires</a></li>
        <li><a href="#">Watchlist</a></li>
      </ul>
    </nav>
  )
}

export default Navigation;
