import React, { Component } from 'react';
import './MastHead.scss';

import SearchBar from '../SearchBar/SearchBar';

const MastHead = (props) => {
  return (
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{props.title}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">{props.subtitle}</h2>
          <SearchBar handleInput={props.handleInput} handleSearch={props.handleSearch} />
        </div>
      </div>
    </header>
  )
}

export default MastHead;