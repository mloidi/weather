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
  WiThermometer,
} from 'react-icons/wi';

import { WeatherService } from '../service/weather.service';

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
  margin: 10px 0;
`;

const CurrentWeater = styled.div`
  /* display: grid;
  grid-template-rows: auto auto auto; */
`;

const CurrentIcon = styled.div`
  font-size: 6rem;
`;

const CurrentTemperature = styled.div`
  display: grid;
  grid-template-columns: 50px 80px 100px;
  font-size: 3rem;
  justify-items: end;
  align-items: center;
`;

const CurrentTemperatureIcon = styled.div`
  font-size: 3rem;
  padding-top: 20px;
`;

const CurrentTemperatureNumber = styled.div`
  font-size: 3rem;
`;

const CurrentTemperatureDegreeIcons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const CurrentTemperatureDegreeIcon = styled.div`
  font-size: 3rem;
  opacity: ${(props) => (props.selected ? '1' : '0.5')};
  cursor: pointer;
`;

export const Weather = ({ coordinates }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [showCelsius, setShowCelsius] = useState(true);

  useEffect(() => {
    WeatherService.get(coordinates[0], coordinates[1]).then((response) => {
      setCurrentWeather(response.data);
    });
  }, [coordinates]);

  return (
    <Layout>
      {currentWeather && (
        <div>
          <CurrentWeater>
            <CurrentTemperature>
              <CurrentTemperatureIcon>
                <WiThermometer />
              </CurrentTemperatureIcon>
              <CurrentTemperatureNumber>
                {showCelsius
                  ? toC(currentWeather.current.temp)
                  : toF(currentWeather.current.temp)}
              </CurrentTemperatureNumber>
              <CurrentTemperatureDegreeIcons>
                <CurrentTemperatureDegreeIcon
                  selected={showCelsius}
                  onClick={() => {
                    setShowCelsius(true);
                  }}
                >
                  <WiCelsius />
                </CurrentTemperatureDegreeIcon>
                <CurrentTemperatureDegreeIcon
                  selected={!showCelsius}
                  onClick={() => {
                    setShowCelsius(false);
                  }}
                >
                  <WiFahrenheit />
                </CurrentTemperatureDegreeIcon>
              </CurrentTemperatureDegreeIcons>
            </CurrentTemperature>
            <div>
              <CurrentIcon>
                {getIcon(currentWeather.current.weather[0].icon)}
              </CurrentIcon>
              <div>{currentWeather.current.weather[0].description}</div>
            </div>
            {/* <div>{currentWeather.current.weather[0].main}</div> */}
          </CurrentWeater>
        </div>
      )}
    </Layout>
  );
};
