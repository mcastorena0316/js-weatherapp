import getData from './getCityData';

const renderResolve = (e, city) => {
  // document.querySelector('.card-body').style.display = 'block';
  const divInfo = document.getElementById('city-info');
  divInfo.innerHTML = `
  <h2>${city.name}</h2>
  <p> ${city.date}</p>
  <div class="temperature-info">
    <img src="http://openweathermap.org/img/wn/${city.weather.icon}@2x.png" alt="${city.weather.icon}"><img>
    <h1>${city.temperature.temp}${e.target.innerText.slice(-2)} </h1>
  </div>
  <h5> Min:${city.temperature.temp_min}${e.target.innerText.slice(-2)}/ Max:${city.temperature.temp_max}${e.target.innerText.slice(-2)}</h5>
  <div class="details">
  <h5>Details</h5>
    <p>Feels like: ${city.temperature.feels_like} ${e.target.innerText.slice(-2)} </p>
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
  getData(e)
    .then(city => {
      renderResolve(e, city);
    })
    .catch(() => {
      renderReject();
    });
};


export default displayWeather;