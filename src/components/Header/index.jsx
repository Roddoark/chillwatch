import React from 'react';
import "./_header.scss";
import img from 'images/logo.png'

import Navigation from '../Navigation'
import Searchbar from '../Searchbar'

const Header = () => {
  return (
    <header>
      <div className="navbar__logo">
        <a href="">
          <img src={img} alt="ChillWatch" />
        </a>
      </div>
      <Navigation />
      <Searchbar placeholder="Rechercher un film ou une série"/>
    </header>
  )
}

export default Header;
