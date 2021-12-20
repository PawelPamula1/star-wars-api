import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCharacter } from '../../features/characters/charactersSlice';
import './CharacterDetail.scss';

const CharacterDetail = () => {
  const person = useSelector(getSelectedCharacter);

  return (
    <div className="container">
      <div className="title">Character Details</div>
      <div className="caption">Name</div>
      <div className="name item">{person.name}</div>
      <div className="caption">Height</div>

      <div className="height item">{person.height}</div>
      <div className="caption">Mass</div>

      <div className="mass item">{person.mass}</div>
      <div className="caption">Hair Color</div>

      <div className="hair-color item">{person.hair_color}</div>
      <div className="caption">Skin Color</div>

      <div className="skin-color item">{person.skin_color}</div>
    </div>
  );
};

export default CharacterDetail;
