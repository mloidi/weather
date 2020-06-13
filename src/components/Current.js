import React from 'react';
import styled from 'styled-components';
import {
  WiCelsius,
  WiFahrenheit,
  WiThermometer,
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiBarometer,
  WiStrongWind,
} from 'react-icons/wi';

import { toC, toF, getTime } from './common';
import { getIcon } from './Weather';

const Layout = styled.div`
  margin: 20px 0;
`;

const Icon = styled.div`
  font-size: 6rem;
`;

const Temperature = styled.div`
  display: grid;
  grid-template-columns: 50px 80px 100px;
  font-size: 3rem;
  justify-items: end;
  align-items: center;
`;

const TemperatureIcon = styled.div`
  font-size: 3rem;
  padding-top: 20px;
`;

const TemperatureNumber = styled.div`
  font-size: 3rem;
`;

const TemperatureDegreeIcons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const TemperatureDegreeIcon = styled.div`
  font-size: 3rem;
  opacity: ${(props) => (props.selected ? '1' : '0.5')};
  cursor: pointer;
`;

export const Current = ({ current, showCelsius, setShowCelsius }) => {
  return (
    <Layout>
      <Temperature>
        <TemperatureIcon>
          <WiThermometer />
        </TemperatureIcon>
        <TemperatureNumber>
          {showCelsius ? toC(current.temp) : toF(current.temp)}
        </TemperatureNumber>
        <TemperatureDegreeIcons>
          <TemperatureDegreeIcon
            selected={showCelsius}
            onClick={() => {
              setShowCelsius(true);
            }}
          >
            <WiCelsius />
          </TemperatureDegreeIcon>
          <TemperatureDegreeIcon
            selected={!showCelsius}
            onClick={() => {
              setShowCelsius(false);
            }}
          >
            <WiFahrenheit />
          </TemperatureDegreeIcon>
        </TemperatureDegreeIcons>
      </Temperature>
      <div>
        <Icon>{getIcon(current.weather[0].icon)}</Icon>
        <div>{current.weather[0].description}</div>
        <div>
          <WiSunrise /> {getTime(current.sunrise)}
        </div>
        <div>
          <WiSunset /> {getTime(current.sunset)}
        </div>
        <div>
          <WiHumidity /> {current.humidity} %
        </div>
        <div>
          <WiStrongWind /> {current.wind_speed} m/s
        </div>
        <div>
          <WiBarometer /> {current.pressure} hPa
        </div>
        <div>visibility {current.visibility} m</div>
        <div>UV index {current.uvi}</div>
      </div>
    </Layout>
  );
};
