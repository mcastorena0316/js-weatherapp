import displayWeather from './ui';

const buttonCelsius = document.getElementById('city-cel-btn');
buttonCelsius.addEventListener('click', displayWeather);

const buttonFarenheit = document.getElementById('city-far-btn');
buttonFarenheit.addEventListener('click', displayWeather);