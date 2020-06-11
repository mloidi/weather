import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { MapsService } from '../service/maps.service';
import { Weather } from './Weather';

const Layout = styled.div`
  margin: auto;
  padding: 20px;
`;

export const Maps = () => {
  const [location, setLocation] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [updateLocation, setUpdateLocation] = useState(false);
  const [locations, setLocations] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  const getCoordinates = (position) => {
    setCoordinates([position.coords.latitude, position.coords.longitude]);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getCoordinates);
  }, []);

  useEffect(() => {
    if (updateLocation && location) {
      MapsService.getByLocation(location).then((response) => {
        setLocations(response.data);
      });
      setUpdateLocation(false);
    }
  }, [updateLocation, location]);

  return (
    <Layout>
      <input
        name='location'
        onChange={(e) => {
          const location = e.target.value;
          setLocation(location);
          setUpdateLocation(true);
        }}
        value={location}
      ></input>
      {locations &&
        locations.map((location) => (
          <div
            key={location.coordinates[0]}
            onClick={() => {
              setCoordinates(location.coordinates);
              setSelectedLocation(location);
              setLocation('');
              setLocations([]);
            }}
          >
            {location.name}
          </div>
        ))}
      <br />
      {coordinates.length > 0 && (
        <Weather
          coordinates={coordinates}
          selectedLocation={selectedLocation}
        />
      )}
    </Layout>
  );
};
