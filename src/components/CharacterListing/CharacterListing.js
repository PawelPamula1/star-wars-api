import React from 'react';
import { getAllCharacters } from '../../features/characters/charactersSlice';
import { useSelector } from 'react-redux';
import { CharacterCard } from '..';
import './CharacterListing.scss';

const CharacterListing = () => {
  const people = useSelector(getAllCharacters);
  console.log(people, 'people');
  return (
    <div className="listing">
      {people?.map((person, idx) => (
        <CharacterCard name={person.name} index={idx} />
      ))}
    </div>
  );
};

export default CharacterListing;
