import React from 'react';
import { getAllCharacters, getLoadingStatus } from '../../features/characters/charactersSlice';
import { useSelector } from 'react-redux';
import { CharacterCard } from '..';
import './CharacterListing.scss';

const CharacterListing = () => {
  const people = useSelector(getAllCharacters);
  let renderPeople = '';
  renderPeople =
    people !== null ? (
      people.map((person, idx) => {
        return <CharacterCard name={person.name} key={idx} url={person.url} />;
      })
    ) : (
      <div className="error">
        <h3>Coś się popsuło</h3>
      </div>
    );

  const isLoading = useSelector(getLoadingStatus);
  return (
    <>
      <form>
        <input type="text" placeholder="Search for character" />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className="listing">{isLoading ? 'Loading...' : renderPeople}</div>
    </>
  );
};

export default CharacterListing;
