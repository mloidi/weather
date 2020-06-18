import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { WeatherService } from '../service/weather.service';
import { Current } from './Current';
import { Daily } from './Daily';
import { Hourly } from './Hourly';
import { getMaxMinTemperature, getWeek } from './common.js';

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
