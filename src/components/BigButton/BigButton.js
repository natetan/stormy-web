import React, { Component } from 'react';
import './BigButton.scss';
import Button from 'react-bootstrap/Button';

const BigButton = (props) => {
  return (
    <Button className='btn btn-primary' onClick={props.onClick}>
      Search
    </Button>
  )
}

export default BigButton;