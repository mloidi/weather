import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';

import { MapsService } from '../service/maps.service';
import { Weather } from './Weather';
import {getLocation} from './common'

const Layout = styled.div`
  padding: 20px;
`;

const Search = styled.div`
  width: 100;
  display: grid;
  grid-template-columns: 90% 10%;
`;

const Input = styled.input`
  border: none;
  border-bottom: solid 1px black;
  padding: 10px 10px;
  outline: none;
  font-size: 1rem;
`;

const Button = styled.button`
  border: solid 1px black;
  background-color: transparent;
  padding: 10px 20px;
  cursor: pointer;
  :hover {
    color: white;
    background-color: black;
  }
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
      <Search>
        <Input
          name='location'
          onChange={(e) => {
            const location = e.target.value;
            setLocation(location);
          }}
          value={location}
          placeholder='Enter city'
          onKeyPress={(e) => {
            if (e.charCode === 13) {
              setUpdateLocation(true);
            }
          }}
        ></Input>
        <Button
          onClick={() => {
            setUpdateLocation(true);
          }}
        >
          <GoSearch />
        </Button>
      </Search>
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
            {getLocation(location.address)}
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
