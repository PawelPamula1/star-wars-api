import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToFav, getSelectedCharacter } from '../../features/characters/charactersSlice';
import './CharacterDetail.scss';

const CharacterDetail = () => {
  const person = useSelector(getSelectedCharacter);
  const dispatch = useDispatch();
  console.log(person, 'person');

  return (
    <div className="container">
      <div className="title">{person.name}</div>

      <div className="caption">Height</div>

      <div className="height item">{person.height}</div>
      <div className="caption">Mass</div>

      <div className="mass item">{person.mass}</div>
      <div className="caption">Hair Color</div>

      <div className="hair-color item">{person.hair_color}</div>
      <div className="caption">Skin Color</div>

      <div className="skin-color item">{person.skin_color}</div>
      <div className="add-to-fav" onClick={() => dispatch(addToFav(person))}>
        Add to favourites
      </div>
    </div>
  );
};

export default CharacterDetail;
