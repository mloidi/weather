import React from 'react';
import {
  WiDaySunny,
  WiMoonAltNew,
  WiDayCloudy,
  WiNightCloudy,
  WiCloud,
  WiCloudy,
  WiDayRain,
  WiNightRain,
  WiDayFog,
  WiNightFog,
  WiDaySnow,
  WiNightSnow,
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiDayShowers,
  WiNightShowers,
} from 'react-icons/wi';

const weatherConditions = [
  {
    id: 200,
    main: 'Thunderstorm',
    description: 'thunderstorm with light rain',
    description2: '',
  },
  {
    id: 201,
    main: 'Thunderstorm',
    description: 'thunderstorm with rain',
    description2: '',
  },
  {
    id: 202,
    main: 'Thunderstorm',
    description: 'thunderstorm with heavy rain',
    description2: '',
  },
  {
    id: 210,
    main: 'Thunderstorm',
    description: 'light thunderstorm',
    description2: '',
  },
  {
    id: 211,
    main: 'Thunderstorm',
    description: 'thunderstorm',
    description2: '',
  },
  {
    id: 212,
    main: 'Thunderstorm',
    description: 'heavy thunderstorm',
    description2: '',
  },
  {
    id: 221,
    main: 'Thunderstorm',
    description: 'ragged thunderstorm',
    description2: '',
  },
  {
    id: 230,
    main: 'Thunderstorm',
    description: 'thunderstorm with light drizzle',
    description2: '',
  },
  {
    id: 231,
    main: 'Thunderstorm',
    description: 'thunderstorm with drizzle',
    description2: '',
  },
  {
    id: 232,
    main: 'Thunderstorm',
    description: 'thunderstorm with heavy drizzle',
    description2: '',
  },
  {
    id: 300,
    main: 'Drizzl',
    description: 'light intensity drizzle',
    description2: '',
  },
  { id: 301, main: 'Drizzl', description: 'drizzle', description2: '' },
  {
    id: 302,
    main: 'Drizzl',
    description: 'heavy intensity drizzle',
    description2: '',
  },
  {
    id: 310,
    main: 'Drizzl',
    description: 'light intensity drizzle rain',
    description2: '',
  },
  { id: 311, main: 'Drizzl', description: 'drizzle rain', description2: '' },
  {
    id: 312,
    main: 'Drizzl',
    description: 'heavy intensity drizzle rain',
    description2: '',
  },
  {
    id: 313,
    main: 'Drizzl',
    description: 'shower rain and drizzle',
    description2: '',
  },
  {
    id: 314,
    main: 'Drizzl',
    description: 'heavy shower rain and drizzle',
    description2: '',
  },
  {
    id: 321,
    main: 'Drizzl',
    description: 'shower drizzle',
    description2: '',
  },
  { id: 500, main: 'Rain', description: 'light rain', description2: '' },
  { id: 501, main: 'Rain', description: 'moderate rain', description2: '' },
  {
    id: 502,
    main: 'Rain',
    description: 'heavy intensity rain',
    description2: '',
  },
  { id: 503, main: 'Rain', description: 'very heavy rain', description2: '' },
  { id: 504, main: 'Rain', description: 'extreme rain', description2: '' },
  { id: 511, main: 'Rain', description: 'freezing rain', description2: '' },
  {
    id: 520,
    main: 'Rain',
    description: 'light intensity shower rain',
    description2: '',
  },
  { id: 521, main: 'Rain', description: 'shower rain', description2: '' },
  {
    id: 522,
    main: 'Rain',
    description: 'heavy intensity shower rain',
    description2: '',
  },
  {
    id: 531,
    main: 'Rain',
    description: 'ragged shower rain',
    description2: '',
  },
  { id: 600, main: 'Snow', description: 'light snow', description2: '' },
  { id: 601, main: 'Snow', description: 'Snow', description2: '' },
  { id: 602, main: 'Snow', description: 'Heavy snow', description2: '' },
  { id: 611, main: 'Snow', description: 'Sleet', description2: '' },
  {
    id: 612,
    main: 'Snow',
    description: 'Light shower sleet',
    description2: '',
  },
  { id: 613, main: 'Snow', description: 'Shower sleet', description2: '' },
  {
    id: 615,
    main: 'Snow',
    description: 'Light rain and snow',
    description2: '',
  },
  { id: 616, main: 'Snow', description: 'Rain and snow', description2: '' },
  {
    id: 620,
    main: 'Snow',
    description: 'Light shower snow',
    description2: '',
  },
  { id: 621, main: 'Snow', description: 'Shower snow', description2: '' },
  {
    id: 622,
    main: 'Snow',
    description: 'Heavy shower snow',
    description2: '',
  },
  { id: 701, main: 'Mist', description: 'mist', description2: '' },
  { id: 711, main: 'Smoke', description: 'Smoke', description2: '' },
  { id: 721, main: 'Haze', description: 'Haze', description2: '' },
  {
    id: 731,
    main: 'Dust',
    description: 'sand/ dust whirls',
    description2: '',
  },
  { id: 741, main: 'Fog', description: 'fog', description2: '' },
  { id: 751, main: 'Sand', description: 'sand', description2: '' },
  { id: 761, main: 'Dust', description: 'dust', description2: '' },
  { id: 762, main: 'Ash', description: 'volcanic ash', description2: '' },
  { id: 771, main: 'Squall', description: 'squalls', description2: '' },
  { id: 781, main: 'Tornado', description: 'tornado', description2: '' },
  { id: 800, main: 'Clear', description: 'clear sky', description2: '' },
  { id: 801, main: 'Clouds', description: 'few clouds', description2: '' },
  {
    id: 802,
    main: 'Clouds',
    description: 'scattered clouds',
    description2: '',
  },
  { id: 803, main: 'Clouds', description: 'broken clouds', description2: '' },
  {
    id: 804,
    main: 'Clouds',
    description: 'overcast clouds',
    description2: '',
  },
];

export const getLocation = (address) => {
  const adminDistrict2 = address.adminDistrict2 ? address.adminDistrict2 : '';
  const adminDistrict = address.adminDistrict
    ? `, ${address.adminDistrict}`
    : '';
  const countryRegion = address.countryRegion
    ? `, ${address.countryRegion}`
    : '';
  return `${adminDistrict2}${adminDistrict}${countryRegion}`;
};

export const getTemperature = (showCelsius, temperature) => {
  return `${showCelsius ? toC(temperature) : toF(temperature)}°`;
};

export const toC = (kelvin) => {
  return Math.round(kelvin - 273.15);
};

export const toF = (kelvin) => {
  return Math.round((kelvin - 273.15) * 1.8 + 32);
};

export const getTime = (dt) => {
  const time = new Date(dt * 1000);
  const newformat = time.getHours() >= 12 ? 'PM' : 'AM';
  const hours = time.getHours() % 12 ? time.getHours() % 12 : 12;
  const minutes =
    time.getMinutes() === 0
      ? ''
      : time.getMinutes() < 10
      ? `:0${time.getMinutes()}`
      : `:${time.getMinutes()}`;
  return `${hours}${minutes} ${newformat}`;
};

export const getDay = (dt) => {
  const time = new Date(dt * 1000);
  return time.getDate();
};

export const getWeekDay = (dt) => {
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const time = new Date(dt * 1000);
  return weekDays[time.getDay()];
};

export const get12Hours = (hours) => {
  return hours.splice(0, 12);
};

export const getWeek = (days) => {
  const today = new Date();
  return days.filter((day) => {
    return getDay(day.dt) !== today.getDate();
  });
};

export const getMaxMinTemperature = (daily) => {
  const temperature = { max: 0, min: 9999 };
  const today = new Date();
  daily.forEach((day) => {
    if (getDay(day.dt) === today.getDate()) {
      temperature.max = day.temp.max;
      temperature.min = day.temp.min;
    }
  });
  return temperature;
};

export const getWeatherDescription = (weatherConditionId) => {
  const weatherCondition = weatherConditions.find((weatherCondition) => {
    return weatherCondition.id === weatherConditionId;
  });
  return weatherCondition.description2 === ''
    ? weatherCondition.description
    : weatherCondition.description2;
};

export const getIcon = (icon) => {
  switch (icon) {
    case '01d':
      return <WiDaySunny />;
    case '02d':
      return <WiDayCloudy />;
    case '03d':
      return <WiCloud />;
    case '04d':
      return <WiCloudy />;
    case '09d':
      return <WiDayShowers />;
    case '10d':
      return <WiDayRain />;
    case '11d':
      return <WiDayThunderstorm />;
    case '13d':
      return <WiDaySnow />;
    case '50d':
      return <WiDayFog />;
    case '01n':
      return <WiMoonAltNew />;
    case '02n':
      return <WiNightCloudy />;
    case '03n':
      return <WiCloud />;
    case '04n':
      return <WiCloudy />;
    case '09n':
      return <WiNightShowers />;
    case '10n':
      return <WiNightRain />;
    case '11n':
      return <WiNightThunderstorm />;
    case '13n':
      return <WiNightSnow />;
    case '50n':
      return <WiNightFog />;
    default:
      return <div>No icon</div>;
  }
};
