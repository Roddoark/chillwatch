import React from 'react'
import "./_navigation.scss";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav__header">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Nouveautés</a></li>
        <li><a href="#">Populaires</a></li>
        <li><a href="#">Watchlist</a></li>
      </ul>
    </nav>
  )
}

export default Navigation;
