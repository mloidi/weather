import React from 'react';
import styled from 'styled-components';
import { WiThermometer, WiSunrise, WiSunset, WiHumidity } from 'react-icons/wi';

import {
  getTime,
  getWeatherDescription,
  getTemperature,
  getIcon,
} from './common';

const Layout = styled.div`
  margin: 20px auto;
  max-width: 710px;
`;

const Icon = styled.div`
  font-size: 6rem;
`;

const Temperature = styled.div`
  display: grid;
  grid-template-columns: 50px 80px 100px;
  font-size: 3rem;
  /* justify-items: end; */
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
  font-size: 2rem;
  opacity: ${(props) => (props.selected ? '1' : '0.5')};
  cursor: pointer;
`;

const Sun = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
`;

const Sunrise = styled(WiSunrise)`
  padding-top: 10px;
  font-size: 1.5rem;
`;

const Sunset = styled(WiSunset)`
  font-size: 1.5rem;
`;

export const Current = ({
  current,
  showCelsius,
  setShowCelsius,
  temperature,
}) => {
  return (
    <Layout>
      <Temperature>
        <TemperatureIcon>
          <WiThermometer />
        </TemperatureIcon>
        <TemperatureNumber>
          {getTemperature(showCelsius, current.temp)}
        </TemperatureNumber>
        <TemperatureDegreeIcons>
          <TemperatureDegreeIcon
            selected={showCelsius}
            onClick={() => {
              setShowCelsius(true);
            }}
          >
            C
          </TemperatureDegreeIcon>
          <TemperatureDegreeIcon
            selected={!showCelsius}
            onClick={() => {
              setShowCelsius(false);
            }}
          >
            F
          </TemperatureDegreeIcon>
        </TemperatureDegreeIcons>
      </Temperature>
      <div>
        <Icon>{getIcon(current.weather[0].icon)}</Icon>
        <div>{getWeatherDescription(current.weather[0].id)}</div>
        <Sun>
          <div>
            <Sunrise />
            <div>{getTime(current.sunrise)}</div>
          </div>
          <div>
            <Sunset /> {getTime(current.sunset)}
          </div>
        </Sun>
        <div>
          <WiHumidity /> {current.humidity} %
        </div>
        <div>
          {`${getTemperature(showCelsius, temperature.max)} ${getTemperature(
            showCelsius,
            temperature.min
          )}`}
        </div>
      </div>
    </Layout>
  );
};
