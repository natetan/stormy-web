import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import React from 'react';

import './SearchBar.scss';

const SearchBar = (props) => {
  const handleInput = e => {
    props.handleInput(e.target.value);
  }

  return (
    <div className='search-bar'>
      <Form>
        <FormControl
          type="text"
          placeholder="Type in a location of some sort"
          className="mr-sm-2"
          onChange={handleInput} />
      </Form>
    </div>
  )
}

export default SearchBar;