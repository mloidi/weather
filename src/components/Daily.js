import React from 'react';
import styled from 'styled-components';

import { getWeekDay, getTemperature } from './common';
import { getIcon } from './Weather';

const Layout = styled.div`
  margin: 20px auto;
  max-width: 710px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 80px auto auto;
  justify-content: space-between;
`;

const Icon = styled.div`
  font-size: 1.5rem;
  justify-self: center;
`;

export const Daily = ({ daily, showCelsius }) => {
  return (
    <Layout>
      {daily &&
        daily.map((day) => (
          <Row key={day.dt}>
            <div>{getWeekDay(day.dt)}</div>
            <Icon>{getIcon(day.weather[0].icon)}</Icon>
            <div>
              {`${getTemperature(showCelsius, day.temp.max)} / ${getTemperature(
                showCelsius,
                day.temp.min
              )}`}
            </div>
          </Row>
        ))}
    </Layout>
  );
};
