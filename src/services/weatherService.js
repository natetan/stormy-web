import fetch from 'node-fetch';

let DARK_SKY_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5a2f0cadaacab9b59d1395de30d1b132';

export const getWeatherInfo = async (lat, long) => {
  let url = `${DARK_SKY_BASE_URL}/${lat},${long}`;
  let result = await fetch(url);
  if (result.status === 200) {
    return result.json();
  } else {
    return null;
  }
}