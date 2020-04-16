import getData from './getCityData';

const renderResolve = (e, city) => {
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

const renderBackground = (city) => {
  const weatherToSearch = city.weather.main;
  switch (weatherToSearch) {
    case 'Rain':
    case 'Drizzle':
    case 'Squall':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/Il9f7ZhytEiI0/giphy.gif')";
      break;
    case 'Snow':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/FoVi0LDjy1XS8/giphy.gif')";
      break;
    case 'Clear':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/G1T5M0qT6ZJlu/giphy.gif')";
      break;
    case 'Thunderstom':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/3oEjHB1EKuujDjYFWw/giphy.gif')";
      break;
    case 'Smoke':
    case 'Fog':
    case 'Haze':
    case 'Mist':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/3nQWWe5X1PD8s/giphy.gif')";
      break;
    case 'Clouds':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/xT9GEDhzERbjDD15O8/giphy.gif')";
      break;
    case 'Tornado':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/MXvDhlmD0eB5qNvvjZ/giphy.gif')";
      break;
    case 'Sand':
    case 'Dust':
    case 'Ash':
      document.body.style.backgroundImage = "url('https://media.giphy.com/media/EaVouuqujYqiI/giphy.gif')";
      break;
    default:
      document.body.style.backgroundImage = 'none';
      break;
  }
};

const displayWeather = (e) => {
  getData(e, document.getElementById('cityinput').value)
    .then(city => {
      renderResolve(e, city);
      renderBackground(city);
    })
    .catch(() => {
      renderReject();
      document.getElementById('cityinput').defaultValue = '';
    });
};


export { displayWeather, renderResolve, renderBackground };