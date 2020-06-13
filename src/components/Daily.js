import React from 'react';
import styled from 'styled-components';

import { getDay,getWeekDay } from './common';

const Layout = styled.div`
  margin: 20px 0;
`;
export const Daily = ({ daily, showCelsius, setShowCelsius }) => {
  return (
    <Layout>
      Daily
      {daily &&
        daily.map((day) => (
          <div key={day.dt}>
            <div>{`${getWeekDay(day.dt)} ${getDay(day.dt)}`}</div>
          </div>
        ))}
    </Layout>
  );
};
