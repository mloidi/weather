import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  WiCelsius,
  WiFahrenheit,
  WiDaySunny,
  WiMoonAltNew,
  WiDayCloudy,
  WiNightCloudy,
  WiCloud,
  WiCloudy,
  WiDayRain,
  WiNightRain,
  WiDayFog,
  WiNightFog,
  WiDaySnow,
  WiNightSnow,
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiDayShowers,
  WiNightShowers,
} from 'react-icons/wi';

import { WeatherService } from '../service/weather.service';
import { MapsService } from '../service/maps.service';

const toC = (kelvin) => {
  return Math.round(kelvin - 273.15);
};

const toF = (kelvin) => {
  return Math.round((kelvin - 273.15) * 1.8 + 32);
};

const getIcon = (icon) => {
  switch (icon) {
    case '01d':
      return <WiDaySunny />;
    case '02d':
      return <WiDayCloudy />;
    case '03d':
      return <WiCloud />;
    case '04d':
      return <WiCloudy />;
    case '09d':
      return <WiDayShowers />;
    case '10d':
      return <WiDayRain />;
    case '11d':
      return <WiDayThunderstorm />;
    case '13d':
      return <WiDaySnow />;
    case '50d':
      return <WiDayFog />;
    case '01n':
      return <WiMoonAltNew />;
    case '02n':
      return <WiNightCloudy />;
    case '03n':
      return <WiCloud />;
    case '04n':
      return <WiCloudy />;
    case '09n':
      return <WiNightShowers />;
    case '10n':
      return <WiNightRain />;
    case '11n':
      return <WiNightThunderstorm />;
    case '13n':
      return <WiNightSnow />;
    case '50n':
      return <WiNightFog />;
    default:
      return <div>No icon</div>;
  }
};

const Layout = styled.div`
  margin: 20px 0;
`;

const Location = styled.div`
  font-size: 2rem;
`;

const CurrentWeater = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const CurrentTemperature = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  font-size: 4rem;
`;
const CurrentIcons = styled.div`
  display: grid;
  grid-template-columns: 40px 40px;
  align-content: start;
`;

const CurrentIcon = styled.div`
  font-size: ${props => props.selected ? '4rem':'3rem'};
`;

export const Weather = ({ coordinates, selectedLocation }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [location, setLocation] = useState(selectedLocation);
  const [showCelsius, setShowCelsius] = useState(true);

  useEffect(() => {
    WeatherService.get(coordinates[0], coordinates[1]).then((response) => {
      setCurrentWeather(response.data);
    });
  }, [coordinates]);

  useEffect(() => {
    if (!selectedLocation) {
      MapsService.getByPoint(`${coordinates[0]},${coordinates[1]}`).then(
        (response) => {
          setLocation(response.data[0]);
        }
      );
    } else {
      setLocation(selectedLocation);
    }
  }, [coordinates, selectedLocation]);

  return (
    <Layout>
      {location && (
        <Location>
          {location.address.locality}, {location.address.adminDistrict},{' '}
          {location.address.countryRegion}{' '}
        </Location>
      )}

      {currentWeather && (
        <CurrentWeater>
          <CurrentTemperature>
            <div>
              {showCelsius
                ? toC(currentWeather.current.temp)
                : toF(currentWeather.current.temp)}
            </div>
            <CurrentIcons>
              <CurrentIcon selected={showCelsius}>
                <WiCelsius
                  onClick={() => {
                    setShowCelsius(true);
                  }}
                />
              </CurrentIcon>
              <CurrentIcon selected={!showCelsius}>
                <WiFahrenheit
                  onClick={() => {
                    setShowCelsius(false);
                  }}
                />
              </CurrentIcon>
            </CurrentIcons>
          </CurrentTemperature>
          <CurrentIcon>
            {getIcon(currentWeather.current.weather[0].icon)}
          </CurrentIcon>
          {/* <div>{currentWeather.current.weather[0].main}</div>
          <div>{currentWeather.current.weather[0].description}</div> */}
        </CurrentWeater>
      )}
    </Layout>
  );
};
