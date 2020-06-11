const URL = `${process.env.REACT_APP_BING_MAPS_ENDPOINT}`;

const getData = (data) => {
  return data[0].resources.map((resource) => {
    return {
      address: resource.address,
      coordinates: resource.point.coordinates,
      name: resource.name,
    };
  });
};

export const MapsService = {
  getByLocation: async (location) => {
    try {
      const response = await fetch(
        `${URL}?locality=${location}&key=${process.env.REACT_APP_BING_MAPS_API_KEY}`
      );
      const data = (await response.json()).resourceSets;
      return {
        status: 'OK',
        data: getData(data),
        message: 'Get data correctly',
      };
    } catch (e) {
      return { status: 'NOK', data: null, message: e };
    }
  },
  getByPoint: async (point) => {
    try {
      const response = await fetch(
        `${URL}/${point}?&key=${process.env.REACT_APP_BING_MAPS_API_KEY}`
      );
      const data = (await response.json()).resourceSets;
      return {
        status: 'OK',
        data: getData(data),
        message: 'Get data correctly',
      };
    } catch (e) {
      return { status: 'NOK', data: null, message: e };
    }
  },
};
