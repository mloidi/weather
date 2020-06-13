import React, { useState } from 'react';
import styled from 'styled-components';
import { WiCelsius, WiFahrenheit } from 'react-icons/wi';

import { toC, toF, getTime } from './common';
import { getIcon } from './Weather';

const Layout = styled.div`
  margin: 20px 0;
`;
export const Hourly = ({ hourly, showCelsius, setShowCelsius }) => {
  const [hours] = useState(hourly.splice(0, 12));
  return (
    <Layout>
      Hourly
      {hours &&
        hours.map((hour) => (
          <div key={hour.dt}>
            <div>
              {getTime(hour.dt)} {getIcon(hour.weather[0].icon)}{' '}
              {showCelsius ? toC(hour.temp) : toF(hour.temp)}{' '}
              {showCelsius ? <WiCelsius /> : <WiFahrenheit />}
            </div>
          </div>
        ))}
    </Layout>
  );
};
