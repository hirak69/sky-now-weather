

"use strict";

const API_key = "670aa3baed508db613ff95623860883f";

/**
 * Fetch Data From Server
 * @param { string } URL API url
 * @param { Function } callback callback
 */

export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${API_key}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
  },
  reverseGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
  },

  /**
   * @param {string} query Search Query For ex :- "New Delhi", "Thailand"
   */
  geo(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};
