import { GET, setRequestOptions } from './common';

const URL = `${process.env.REACT_APP_BING_MAPS_ENDPOINT}`;

export const MapsService = {
  get: async (locality) => {
    try {
      const requestOptions = setRequestOptions({
        method: GET,
        mode: 'cors',
      });
      const url = `${URL}locality=${locality}&key=${process.env.REACT_APP_BING_MAPS_API_KEY}`;
      const req = new Request(url, requestOptions);
      const response = await fetch(req);
      const data = (await response.json()).resourceSets;
      const locations = data[0].resources.map((resource) => {
        return {
          address: resource.address,
          coordinates: resource.point.coordinates,
          name: resource.name,
        };
      });

      return {
        status: 'OK',
        data: locations,
        message: 'Get data correctly',
      };
    } catch (e) {
      return { status: 'NOK', data: null, message: e };
    }
  },
};
