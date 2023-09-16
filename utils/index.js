export async function getWeatherData(city) {
    console.log('city', city);
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=4c7f1f68689243332f5672f3f5d973e0&units=metric');
  const result = await response.json();
  console.log(result);
  return result;

}