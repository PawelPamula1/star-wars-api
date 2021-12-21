import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncCharactersByName, addToFav } from '../../features/characters/charactersSlice';
import './CharacterCard.scss';

const CharacterCard = ({ person, name, url }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="name">{name}</div>
      <div className="buttons">
        <Link to="/character">
          <div className="show-details" onClick={() => dispatch(fetchAsyncCharactersByName(url))}>
            Show Details
          </div>
        </Link>
        <div className="add-to-favourites" onClick={() => dispatch(addToFav(person))}>
          Add to favourites
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
