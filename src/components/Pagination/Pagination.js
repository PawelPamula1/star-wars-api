import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncCharacters } from '../../features/characters/charactersSlice';
import './Pagination.scss';

const Pagination = ({ data }) => {
  const numOfPages = Math.ceil(data.count / 10);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const nextPage = (currentPage) => {
    dispatch(fetchAsyncCharacters(currentPage + 1));
    setCurrentPage(currentPage + 1);
  };

  const previousPage = (currentPage) => {
    dispatch(fetchAsyncCharacters(currentPage - 1));
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="pagination">
      {currentPage !== 1 && (
        <div className="previous" onClick={() => previousPage(currentPage)}>
          <i className="fa fa-arrow-left"></i>
        </div>
      )}
      {currentPage}
      {currentPage !== numOfPages && (
        <div className="next" onClick={() => nextPage(currentPage)}>
          <i className="fa fa-arrow-right"></i>
        </div>
      )}
    </div>
  );
};

export default Pagination;
