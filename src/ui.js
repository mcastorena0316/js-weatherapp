import getData from './getCityData';

const renderResolve = (e, city) => {
  // document.querySelector('.card-body').style.display = 'block';
  const divInfo = document.getElementById('city-info');
  divInfo.innerHTML = `
  <h2>${city.name}</h2>
  <p> ${city.date}</p>
  <div class="temperature-info">
    <img src="http://openweathermap.org/img/wn/${city.weather.icon}@2x.png" alt="${city.weather.icon}"><img>
    <h1>${city.temperature.temp}${city.degree} </h1>
  </div>
  <h5> Min:${city.temperature.temp_min}${city.degree}/ Max:${city.temperature.temp_max}${city.degree}</h5>
  <div class="details">
  <h5>Details</h5>
    <p>Feels like: ${city.temperature.feels_like} ${city.degree} </p>
    <p>Humidity: ${city.temperature.humidity} %</p>
    <p>Pressure: ${city.temperature.pressure} hpA</p>
  </div>`;
};

const renderReject = () => {
  // document.querySelector('.card-body').style.display = 'block';
  const divInfo = document.getElementById('city-info');
  divInfo.innerHTML = `
  <h4>Couldnt find city, please type another one!</h4>`;
  document.getElementById('cityform').reset();
};

const displayWeather = (e) => {
  getData(e, document.getElementById('cityinput').value)
    .then(city => {
      renderResolve(e, city);
    })
    .catch(() => {
      renderReject();
      document.getElementById('cityinput').defaultValue = '';
    });
};


export { displayWeather, renderResolve, renderReject };