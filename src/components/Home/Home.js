import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CharacterListing } from '..';
import { fetchAsyncCharacters, getData } from '../../features/characters/charactersSlice';
import Pagination from '../Pagination/Pagination';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncCharacters());
  }, [dispatch]);

  const data = useSelector(getData);
  return (
    <div className="home">
      <div className="content">
        <CharacterListing />
      </div>
      <Pagination data={data} />
    </div>
  );
};

export default Home;
