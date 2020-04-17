// eslint-disable-next-line import/no-unresolved
import { format } from 'date-fns';

const getData = async (e) => {
  const apiKey = '341e5fb009a47c51740d86b5945df4be';
  const url = 'https://api.openweathermap.org/data/2.5/weather';
  const city = document.getElementById('cityinput').value;
  const degree = e.target.id === 'city-cel-btn' ? 'metric' : 'imperial';
  const fetchingURL = `${url}?q=${city}&units=${degree}&appid=${apiKey}`;


  try {
    const response = await fetch(fetchingURL, {
      mode: 'cors',
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      const cityName = jsonResponse.name;
      const temperatureInfo = jsonResponse.main;

      const weatherInfo = jsonResponse.weather[0];

      const cityInfo = {
        name: cityName,
        temperature: temperatureInfo,
        weather: weatherInfo,
        degree: degree === 'metric' ? '°C' : '°F',
        date: format(new Date(), 'dd MMM yyyy'),

      };

      return cityInfo;
    }
    throw new Error('Request Failed!');
  } catch (error) {
    return error;
  }
};


export default getData;