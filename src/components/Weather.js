import React, { useState, useEffect } from 'react';

import { WeatherService } from '../service/weather.service';

export const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [updateCurrentWeather, setUpdateCurrenteWeather] = useState(false);
  const [coordenates, setCoordenates] = useState([]);

  const showPosition = (position) => {
    setCoordenates([position.coords.latitude, position.coords.longitude]);
  };

  useEffect(() => {
    if (updateCurrentWeather || (!currentWeather && coordenates.length > 0)) {
      WeatherService.get(coordenates[0], coordenates[1]).then((response) => {
        setCurrentWeather(response);
      });
      setUpdateCurrenteWeather(false);
    }
  }, [updateCurrentWeather, currentWeather, coordenates]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(showPosition);
  }, []);

  return (
    <div>
      {currentWeather && <div>{currentWeather.timezone}</div>}
      <div>Latitude = {coordenates[0]}</div>
      <div>Longitude = {coordenates[1]}</div>
    </div>
  );
};
