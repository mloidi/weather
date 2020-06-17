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

export const getMaxMinTemperature = (hourly) => {
  const temperature = { max: 0, min: 9999 };
  const today = new Date();
  hourly.forEach((hour) => {
    if (getDay(hour.dt) - 1 === today.getDate()) {
      console.log(hour);
      if (temperature.max < hour.temp) {
        temperature.max = hour.temp;
      }
      temperature.min =
        temperature.min > hour.temp ? hour.temp : temperature.min;
    }
  });
  console.log(temperature);
  return temperature;
};
