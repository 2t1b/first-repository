let apiKey = 'e6bf9oa91b06t5069a4a8533907e7f09'
let url = `https://api.shecodes.io/weather/v1/current?query=Sydney&key=${apiKey}&units=metric`;
function showWeather(weather){
  weather = weather.data;
  console.log(weather);
  let temp = Math.round(weather.temperature.current);
  console.log(temp);
  let desc = weather.condition.description;
  console.log(desc);
document.querySelector('h1').innerHTML = ` It is ${temp} degrees in Sydney`;

}
axios.get(url).then(showWeather);