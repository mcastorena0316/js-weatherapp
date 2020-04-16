import { displayWeather, renderResolve } from './ui';
import getData from './getCityData';


const buttonCelsius = document.getElementById('city-cel-btn');
buttonCelsius.addEventListener('click', displayWeather);

const buttonFarenheit = document.getElementById('city-far-btn');
buttonFarenheit.addEventListener('click', displayWeather);

const defaultRender = (e) => {
  getData(e, 'Monterrey')
    .then(city => {
      renderResolve(e, city);
    });
};


window.addEventListener('load', (e) => {
  defaultRender(e);
});


defaultRender();
