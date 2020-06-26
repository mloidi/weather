import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { MapsService } from './service/maps.service';
import { Weather } from './components/Weather';
import { getLocation } from './components/common';

const Layout = styled.div`
  padding: 0 10px 20px 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
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

const SelectedLocation = styled.div`
  margin: 20px auto;
  max-width: 730px;
  font-size: 2rem;
`;

export const App = () => {
  const showSearch = false;
  const [location, setLocation] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [updateLocation, setUpdateLocation] = useState(false);
  const [locations, setLocations] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [showCelsius, setShowCelsius] = useState(true);

  const getCoordinates = (position) => {
    setCoordinates([position.coords.latitude, position.coords.longitude]);
    MapsService.getByPoint(
      `${position.coords.latitude},${position.coords.longitude}`
    ).then((response) => {
      setSelectedLocation(response.data[0]);
      if (response.data[0].address.countryRegion === 'United States') {
        setShowCelsius(false);
      }
    });
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
    } else {
      setLocations([]);
    }
  }, [updateLocation, location]);

  return (
    <Layout>
      {showSearch && (
        <div>
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
          </Search>
          {locations &&
            locations.map((location) => (
              <div
                key={location.coordinates[0]}
                onClick={() => {
                  setCoordinates(location.coordinates);
                  setSelectedLocation(location);
                  if (location.address.countryRegion === 'United States') {
                    setShowCelsius(false);
                  }
                  setLocation('');
                  setLocations([]);
                }}
              >
                {getLocation(location.address)}
              </div>
            ))}
        </div>
      )}
      {coordinates.length > 0 && (
        <div>
          {selectedLocation && (
            <div>
              <SelectedLocation>
                {selectedLocation.address.locality}
              </SelectedLocation>
            </div>
          )}
          <Weather
            coordinates={coordinates}
            showCelsius={showCelsius}
            setShowCelsius={setShowCelsius}
          />
        </div>
      )}
    </Layout>
  );
};
