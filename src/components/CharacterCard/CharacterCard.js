import React from 'react';
import './CharacterCard.scss';

const CharacterCard = ({ name, index }) => {
  return <div className="card">{name}</div>;
};

export default CharacterCard;
