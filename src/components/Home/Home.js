import Geocode from 'react-geocode';
import React, { useState, useEffect } from 'react';

import { getWeatherInfo } from '../../services/weatherService';
import { tryRequire } from '../../lib/utils';
import MastHead from '../MastHead/MastHead';

import './Home.scss';

const Home = () => {
  const [position, setPosition] = useState({});
  const [location, setLocation] = useState('');
  const [desc, setDesc] = useState('');
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  let apiKey;
  try {
    let auth = require('../../auth.json');
    apiKey = auth.google_api_key;
  } catch (e) {
    console.log(e);
    apiKey = process.env.google_api_key;
  }
  Geocode.setApiKey(apiKey);

  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  };

  const onError = error => {
    setError(error.message);
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

  if (!location && (position.latitude && position.longitude)) {
    Geocode.fromLatLng(position.latitude, position.longitude).then(response => {
      let city = response.results[0].address_components[3].long_name;
      getWeatherInfo(position.latitude, position.longitude).then(res => {
        console.log(res);
        let temp = Math.round(res.currently.temperature);
        setDesc(res.currently.summary);
        setLocation(`${city} | ${temp} F°`);
      });
    });
  }

  const handleInput = query => {
    setSearch(query);
  }

  const handleEnter = event => {
    if (event.key === 'Enter' && search.length) {
      handleSearch();
    }
  }

  const handleSearch = () => {
    Geocode.fromAddress(search).then(response => {
      if (response) {
        let results = response.results;
        if (results.length) {
          let lat = results[0].geometry.location.lat;
          let long = results[0].geometry.location.lng;
          let city = results[0].address_components[0].long_name;
          console.log(results)
          getWeatherInfo(lat, long).then(res => {
            console.log(res);
            let temp = Math.round(res.currently.temperature);
            setDesc(res.currently.summary);
            setLocation(`${city} | ${temp} F°`);
          });
        }
      }
    });
  }

  return (
    <div className='home-page'>
      <div className='cover-container d-flex h-100 p-3 mx-auto flex-column'>
        <MastHead
          title={`${location ? location : 'Stormy'}`}
          subtitle={`${desc ? desc : 'Demo weather app'}`}
          handleInput={handleInput}
          handleEnter={handleEnter}
          onClick={handleSearch}
        />
      </div>
    </div>
  )
}

export default Home;