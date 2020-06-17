import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
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
import { Current } from './Current';
import { Daily } from './Daily';
import { Hourly } from './Hourly';
import { getMaxMinTemperature, getWeek } from './common.js';

export const getIcon = (icon) => {
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

export const Weather = ({ coordinates, showCelsius, setShowCelsius }) => {
  const [current, setCurrent] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [daily, setDaily] = useState(null);
  const [temperature, setTemperature] = useState({ max: 0, min: 0 });

  useEffect(() => {
    WeatherService.get(coordinates[0], coordinates[1]).then((response) => {
      setCurrent(response.data.current);
      setHourly(response.data.hourly);
      setDaily(getWeek(response.data.daily));
      setTemperature(getMaxMinTemperature(response.data.daily));
    });
  }, [coordinates]);

  return (
    <Layout>
      {current && (
        <Current
          current={current}
          showCelsius={showCelsius}
          setShowCelsius={setShowCelsius}
          temperature={temperature}
        />
      )}
      {hourly && <Hourly hourly={hourly} showCelsius={showCelsius} />}
      {daily && <Daily daily={daily} showCelsius={showCelsius} />}
    </Layout>
  );
};
