import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="logo">Star Wars Characters</div>
      <form>
        <input type="text" placeholder="Search for character" />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className="favourites">
        <i className="fa fa-star"></i> <p>Your favourite ones</p>
      </div>
    </header>
  );
};

export default Header;
