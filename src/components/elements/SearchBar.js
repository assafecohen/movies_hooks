import React, { useState, useRef } from 'react';
import FontAwesome from 'react-fontawesome';

import {
  StyledSearchBar,
  StyledSearchBarContent
} from '../styles/StyledSearchBar';

const SearchBar = ({ callback }) => {
  const [state, setState] = useState('');
  const timeOut = useRef(null);

  const doSearch = value => {
    console.log(value);
    setState(value);

    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };
  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className='fa-search' name='search' size='2x' />
        <input
          type='text'
          placeholder='Search Movie...'
          onChange={e => doSearch(e.target.value)}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

export default SearchBar;
