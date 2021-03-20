import React from 'react';
import "./header.scss";
import img from '../../../assets/images/logo.png'

import Navigation from '../Navigation/navigation'
import Searchbar from '../Searchbar/searchbar'

const Header = () => {
  return (
    <header>
      <div className="navbar__logo">
        <a href="">
          <img src={img} alt="ChillWatch" />
        </a>
      </div>
      <Navigation />
      <Searchbar />
    </header>
  )
}

export default Header;
