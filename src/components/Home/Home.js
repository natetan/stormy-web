import React, { Component, useState, useEffect } from 'react';
import './Home.scss';
import MastHead from '../MastHead/MastHead';

import { getWeatherInfo } from '../../services/weatherService';
import Geocode from 'react-geocode';

const Home = () => {
  const [position, setPosition] = useState({});
  const [location, setLocation] = useState('');
  const [desc, setDesc] = useState('');
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  Geocode.setApiKey('AIzaSyCStn4TNkpMVqqjh0WQnlvwtTXZJfSyuLw');

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

  const handleSearch = () => {
    Geocode.fromAddress(search).then(response => {
      if (response) {
        let results = response.results;
        if (results.length) {
          let lat = results[0].geometry.location.lat;
          let long = results[0].geometry.location.lng;
          let city = results[0].address_components[0].long_name;
          console.log(city);
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
          onClick={handleSearch}
        />
      </div>
    </div>
  )
}

export default Home;