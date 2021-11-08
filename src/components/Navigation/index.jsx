import React from 'react'
import { Link, Outlet } from "react-router-dom";

import "./_navigation.scss";

const Navigation = () => {
  return (
    <>
    <nav>
      <ul className="nav__header">
        <li><Link to="/">HomePage</Link></li>
        <li><Link to="/moviePages">MoviePage</Link></li>
        <li><a href="#">Populaires</a></li>
        <li><a href="#">Watchlist</a></li>
      </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Navigation;
