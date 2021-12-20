import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncCharactersByName } from '../../features/characters/charactersSlice';
import './CharacterCard.scss';

const CharacterCard = ({ name, url }) => {
  const dispatch = useDispatch();
  return (
    <Link to="/character">
      <div className="card" onClick={() => dispatch(fetchAsyncCharactersByName(url))}>
        {name}
      </div>
    </Link>
  );
};

export default CharacterCard;
