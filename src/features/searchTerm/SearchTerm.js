import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '../../img/search.svg';
import ClearIcon from '../../img/clear.svg';

import { setSearchTerm, clearSearchTerm, selectSearchTerm } from './searchTermSlice.js';

export const SearchTerm = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };
  
  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-container">
      <img id="search-icon" alt="search" src={SearchIcon} />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        placeholder="Search Coins"
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
          <img src={ClearIcon} alt="clear" />
        </button>
      )}
    </div>
  );
};