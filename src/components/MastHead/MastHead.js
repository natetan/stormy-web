import React, { Component } from 'react';

import BigButton from '../BigButton/BigButton';
import SearchBar from '../SearchBar/SearchBar';

import './MastHead.scss';

const MastHead = (props) => {
  return (
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{props.title}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">{props.subtitle}</h2>
          <SearchBar handleInput={props.handleInput} handleEnter={props.handleEnter} />
          <BigButton onClick={props.onClick} />
        </div>
      </div>
    </header>
  )
}

export default MastHead;