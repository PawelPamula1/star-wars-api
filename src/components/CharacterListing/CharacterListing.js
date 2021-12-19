import React from 'react';
import { getAllCharacters, getData } from '../../features/characters/charactersSlice';
import { useSelector } from 'react-redux';
import { CharacterCard } from '..';

const CharacterListing = () => {
  const people = useSelector(getAllCharacters);
  console.log(people, 'people');
  return (
    <div>
      {people?.map((person, idx) => (
        <CharacterCard name={person.name} index={idx} />
      ))}
    </div>
  );
};

export default CharacterListing;
