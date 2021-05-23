export function mungeLocation(hello) {
  return {
    formatted_query: hello[0].display_name,
    latitude: hello[0].lat,
    longitude: hello[0].lon
  };
}

export function mungeWeather(sunny) {
  const array = sunny.data.map(weather =>{
    return {
      forecast: weather.weather.description,
      time: weather.datetime


    };

  });
  return array.slice(0, 2);


}