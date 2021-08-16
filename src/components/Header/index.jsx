import React from 'react';
import "./header.scss";
import img from '~images/logo.png'

import Navigation from '~components/Navigation'
import Searchbar from '~components/Searchbar'

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
