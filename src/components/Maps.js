import React, { useState } from 'react';

import { MapsService } from '../service/maps.service';

export const Maps = () => {
  const [locality, setLocality] = useState('');

  return (
    <div>
      <input
        name='location'
        onChange={(e) => {
          setLocality(e.target.value);
        }}
        value={locality}
      ></input>
      <button
        onClick={async () => {
          MapsService.get(locality)
            .then((response) => {
              console.log(response);
              return response;
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        Search
      </button>
    </div>
  );
};
