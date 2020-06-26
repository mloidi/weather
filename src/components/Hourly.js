import React, { useState } from 'react';
import styled from 'styled-components';

import { getTemperature, getTime, getIcon } from './common';

const Layout = styled.div`
  margin: 10px auto;
  max-width: 710px;
  background-color: white;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 2px 2px grey;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 50px);
  grid-gap: 10px;
  justify-items: center;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Hour = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  justify-items: center;
`;

const Icon = styled.div`
  font-size: 1.5rem;
`;

export const Hourly = ({ hourly, showCelsius }) => {
  const [hours] = useState(hourly.splice(0, 12));
  return (
    <Layout>
      <Row>
        {hours &&
          hours.map((hour) => (
            <div key={hour.dt}>
              <Hour>
                <div>{getTime(hour.dt)}</div>
                <Icon>{getIcon(hour.weather[0].icon)} </Icon>
                <div>{getTemperature(showCelsius, hour.temp)}</div>
              </Hour>
            </div>
          ))}
      </Row>
    </Layout>
  );
};
