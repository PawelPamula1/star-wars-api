import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">Star Wars Characters</div>
      </Link>

      <div className="categories">
        <div className="all">
          <i className="fa fa-global"></i>
          <p>All Characters</p>
        </div>
        <div className="favourites">
          <i className="fa fa-star"></i> <p>Your favourite ones</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
