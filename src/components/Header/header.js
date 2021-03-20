import React from 'react';
import "./header.scss";
import img from '../../../assets/images/logo.png'

const Header = () => {
  return (
    <header>
      <div className="navbar__logo">
        <a href="">
          <img src={img} alt="ChillWatch" />
        </a>
      </div>
    </header>
  )
}

export default Header;
