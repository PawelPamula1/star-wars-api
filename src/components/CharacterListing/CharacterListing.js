import React, { useRef } from 'react';
import { fetchAsyncSearchedCharacters, getAllCharacters, getLoadingStatus } from '../../features/characters/charactersSlice';
import { useSelector } from 'react-redux';
import { CharacterCard } from '..';
import './CharacterListing.scss';
import { useDispatch } from 'react-redux';

const CharacterListing = () => {
  const people = useSelector(getAllCharacters);
  const searchTerm = useRef('');
  const dispatch = useDispatch();

  const searchByTerm = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncSearchedCharacters(searchTerm.current.value));
  };

  let renderPeople = '';
  renderPeople =
    people !== null ? (
      people.map((person, idx) => {
        return <CharacterCard person={person} name={person.name} key={idx} url={person.url} />;
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
        <input ref={searchTerm} type="text" placeholder="Search for character" />
        <button onClick={searchByTerm}>
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className="listing">{isLoading ? 'Loading...' : renderPeople}</div>
    </>
  );
};

export default CharacterListing;
