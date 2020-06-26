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
  margin: 10px auto;
  background-color: white;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 2px 2px grey;
  display: grid;
  grid-template-rows: auto auto;
`;

const Icon = styled.div`
  font-size: 6rem;
`;

const Temperature = styled.div`
  width: 360px;
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-columns: 50px 80px 100px;
  font-size: 3rem;
`;

const TemperatureIcon = styled.div`
  font-size: 3rem;
  padding-top: 20px;
`;

const TemperatureNumber = styled.div`
  font-size: 3rem;
`;

const TemperatureDegreeIcons = styled.div`
  justify-self: center;
  display: grid;
  grid-template-columns: 40px 40px;
  align-items: center;
`;

const TemperatureDegreeButton = styled.button`
  font-size: ${(props) => (props.selected ? '2rem' : '1.5rem')};
  opacity: ${(props) => (props.selected ? '1' : '0.5')};
  cursor: pointer;
  text-align: center;
  border: none;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  &:active {
    outline: none;
  }
`;

const ExtraData = styled.div`
  width: 360px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 180px 180px;
`;

const Description = styled.div`
  margin-top: -20px;
`;

const Details = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  justify-content: space-between;
`;

const DetailsRow = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  justify-content: start;
  align-content: end;
`;

const Sunrise = styled(WiSunrise)`
  font-size: 1.5rem;
`;

const Sunset = styled(WiSunset)`
  font-size: 1.5rem;
`;

const Humidity = styled(WiHumidity)`
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
          <TemperatureDegreeButton
            selected={showCelsius}
            onClick={() => {
              setShowCelsius(true);
            }}
          >
            C
          </TemperatureDegreeButton>
          <TemperatureDegreeButton
            selected={!showCelsius}
            onClick={() => {
              setShowCelsius(false);
            }}
          >
            F
          </TemperatureDegreeButton>
        </TemperatureDegreeIcons>
      </Temperature>
      <ExtraData>
        <div>
          <Icon>{getIcon(current.weather[0].icon)}</Icon>
          <Description>
            {getWeatherDescription(current.weather[0].id)}
          </Description>
        </div>
        <Details>
          <DetailsRow>
            <Sunrise />
            <div>{getTime(current.sunrise)}</div>
          </DetailsRow>
          <DetailsRow>
            <Sunset />
            <div>{getTime(current.sunset)}</div>
          </DetailsRow>
          <DetailsRow>
            <Humidity />
            <div>{current.humidity} %</div>
          </DetailsRow>
          <DetailsRow>
            <div>High {`${getTemperature(showCelsius, temperature.max)}`}</div>
            <div>Low {`${getTemperature(showCelsius, temperature.min)}`}</div>
          </DetailsRow>
        </Details>
      </ExtraData>
    </Layout>
  );
};
