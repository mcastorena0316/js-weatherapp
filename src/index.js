import getData from './getCityData';


const buttonCelsius = document.getElementById('city-cel-btn');
buttonCelsius.addEventListener('click', getData);

const buttonFarenheit = document.getElementById('city-far-btn');
buttonFarenheit.addEventListener('click', getData);
