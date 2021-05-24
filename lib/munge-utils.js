export function mungeLocation(hello) {
  return {
    formatted_query: hello[0].display_name,
    latitude: hello[0].lat,
    longitude: hello[0].lon
  };
}

export function mungeWeather(sunny) {
  const array = sunny.data.map(weather =>{
    // console.log(weather.datetime.slice(0, -2));
    return {
      forecast: weather.weather.description,
      time: weather.datetime.slice(0, -2)
    };

  });
  return array.slice(0, 2);
}

export function mungeReviews(yummy) {
  const tasty =  yummy.businesses.map(food =>{

    return {
      'name': food.name,
      'image_url': food.image_url,
      'price': food.price,
      'rating': food.rating,
      'url': food.url
    };

  });
  return tasty;
}