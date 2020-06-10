// import { GET, setRequestOptions } from './common';

const URL = `${process.env.REACT_APP_OPEN_WEATHER_ENDPOINT}`;

export const WeatherService = {
  get: async (latitude, longitude) => {
    try {
      // const requestOptions = setRequestOptions({
      //   method: GET,
      //   mode: 'cors',
      // });
      const url = `${URL}lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
      // const req = new Request(url, requestOptions);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return {
        status: 'OK',
        data,
        message: 'Get data correctly',
      };
    } catch (e) {
      console.error(e);
      return { status: 'NOK', data: null, message: e };
    }
  },
};
