import React from 'react';
import './header.scss';

const Header = () =>
  <header className="header">
    <div className="header__container container">
      <div className="header__wrapper wrapper">
        <h1 className="header__title">React</h1>
        <div className="header__locationBlock locationBlock">
          <img className="locationBlock__icon" src="" alt="geo" />
          <span className="locationBlock__title">Александровск-Са...</span>
        </div>
        <div className="header__searchBlock searchBlock">
          <input className="searchBlock__inputField" type="search" />
          <button className="searchBlock__searchButton searchButton">
            <img className="searchButton__icon" src="search" alt="searchimg" />
          </button>
        </div>
        <button className="header__cart cartButton"><img className="cartButton__icon" src="" alt="basketimg" /></button>
        <button className="header__profile profileButton"><img className="profileButton__photo" src="" alt="user" /></button>
      </div>
    </div>
  </header>

export default Header;