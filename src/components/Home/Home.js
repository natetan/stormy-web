import React, { Component, useState, useEffect } from 'react';
import './Home.scss';
import MastHead from '../MastHead/MastHead';

import { getWeatherInfo } from '../../services/weatherService';

const Home = () => {
  const [position, setPosition] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  };

  const onError = error => {
    setError(error.message);
  }

  const loadInfo = async (lat, long) => {
    let info = await getWeatherInfo(lat, long);
    setLocation(info);
  }

  useEffect(() => {
    const gl = navigator.geolocation;
    if (!gl) {
      setError('Geolocation is not supported :(');
      return;
    }
    let watcher = gl.watchPosition(onChange, onError);
    return () => gl.clearWatch(watcher);
  }, [])

  loadInfo(position.latitude, position.longitude);
  console.log(location);

  return (
    <div className='home-page'>
      <div className='cover-container d-flex h-100 p-3 mx-auto flex-column'>
        <MastHead title='Stormy' subtitle={'Demo weather app'} />

        <main role='main' className='inner cover'>
          <h1 className='cover-heading'>Cover your page.</h1>
          <p className='lead'>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p className='lead'>
            <a href='#' className='btn btn-lg btn-secondary'>Learn more</a>
          </p>
        </main>

      </div>
    </div>
  )
}

export default Home;