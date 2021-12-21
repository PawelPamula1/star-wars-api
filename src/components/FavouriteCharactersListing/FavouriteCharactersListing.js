import React from 'react';
import { useSelector } from 'react-redux';
import { getFavouriteCharacters } from '../../features/characters/charactersSlice';
import './FavouriteCharactersListing.scss';

const FavouriteCharactersListing = () => {
  const favourites = useSelector(getFavouriteCharacters);
  console.log(favourites);

  return (
    <div className="container">
      {favourites[0] ? (
        favourites.map((element, idx) => (
          <div className="favourite-item" key={idx}>
            {element.name}
          </div>
        ))
      ) : (
        <p>Start adding your favourites</p>
      )}
    </div>
  );
};

export default FavouriteCharactersListing;
