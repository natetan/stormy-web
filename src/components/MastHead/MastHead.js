import React, { Component } from 'react';
import './MastHead.scss';

export default class MastHead extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">{this.props.title}</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">{this.props.subtitle}</h2>
          </div>
        </div>
      </header>
    )
  }
}