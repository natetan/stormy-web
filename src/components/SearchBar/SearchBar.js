import FormControl from 'react-bootstrap/FormControl';
import React from 'react';

import './SearchBar.scss';

const SearchBar = (props) => {
  const handleInput = e => {
    props.handleInput(e.target.value);
  }

  return (
    <div className='search-bar'>
      <FormControl
        type="text"
        placeholder="Type in a location of some sort"
        className="mr-sm-2"
        onChange={handleInput}
        onKeyPress={props.handleEnter} />
    </div>
  )
}

export default SearchBar;