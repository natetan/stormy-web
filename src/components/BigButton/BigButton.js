import Button from 'react-bootstrap/Button';
import React from 'react';

import './BigButton.scss';

const BigButton = (props) => {
  return (
    <Button className='btn btn-primary' onClick={props.onClick}>
      Search
    </Button>
  )
}

export default BigButton;