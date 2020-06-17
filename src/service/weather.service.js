const URL = `${process.env.REACT_APP_OPEN_WEATHER_ENDPOINT}`;

export const WeatherService = {
  get: async (latitude, longitude) => {
    try {
      const response = await fetch(
        `${URL}lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
      );
      const data = await response.json();
      // console.log(data);
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
