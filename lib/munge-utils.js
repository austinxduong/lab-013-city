export function mungeLocation(hello) {
  return {
    formatted_query: hello[0].display_name,
    latitude: hello[0].lat,
    longitude: hello[0].lon
  };
}