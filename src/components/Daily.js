import React from 'react';
import styled from 'styled-components';

import { getWeekDay, getTemperature, getIcon } from './common';

const Layout = styled.div`
  margin: 10px auto;
  background-color: white;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 2px 2px grey;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 80px auto 80px;
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
