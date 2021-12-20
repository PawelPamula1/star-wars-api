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
        <Link to="/">
          <div className="all">
            <p>All Characters</p>
          </div>
        </Link>

        <Link to="/favourites">
          <div className="favourites">
            <p>Your favourite ones</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
