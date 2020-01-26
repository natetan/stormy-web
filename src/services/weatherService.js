import fetch from 'node-fetch';

let apiKey;
try {
  let auth = require('../auth.json');
  apiKey = auth.dark_sky_api_key;
} catch (e) {
  console.log(e);
  apiKey = process.env.dark_sky_api_key;
}

let DARK_SKY_BASE_URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}`;


export const getWeatherInfo = async (lat, long) => {
  let url = `${DARK_SKY_BASE_URL}/${lat},${long}`;
  let result = await fetch(url);
  if (result.status === 200) {
    return result.json();
  } else {
    return null;
  }
}