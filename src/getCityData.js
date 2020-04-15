const getData = async (e) => {
  const apiKey = '341e5fb009a47c51740d86b5945df4be';
  const url = 'https://api.openweathermap.org/data/2.5/weather';
  const city = document.getElementById('cityinput').value;
  const degree = e.target.id === 'city-cel-btn' ? 'metric' : 'imperial';
  const fetchingURL = `${url}?q=${city}&units=${degree}&appid=${apiKey}`;

  try {
    const response = await fetch(fetchingURL);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    }
    throw new Error('Request Failed!');
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getData;