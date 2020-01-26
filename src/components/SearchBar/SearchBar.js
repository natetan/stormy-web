import React, { Component, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './SearchBar.scss';

const SearchBar = (props) => {
  const handleInput = e => {
    props.handleInput(e.target.value);
  }

  const handleSearch = () => {
    props.handleSearch();
  }

  return (
    <div className='search-bar'>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={handleInput} />
        <Button variant="outline-secondary" onClick={handleSearch}>Search</Button>
      </Form>
    </div>
  )
}

export default SearchBar;