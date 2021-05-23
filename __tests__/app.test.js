// import app from '../lib/app.js';
// import supertest from 'supertest';
// import client from '../lib/client.js';
// import { execSync } from 'child_process';

import { mungeLocation, mungeWeather } from '../lib/munge-utils.js';
import unmungedLocation from '../data/location-data';
import unmungedWeather from '../data/weather-data';
// const request = supertest(app);



describe('API Routes', () => {
  it('testing munge location function', () => {

    const expectation = {
      formatted_query: 'Portland, Multnomah County, Oregon, USA', latitude: '45.5202471', longitude: '-122.6741949'
      
    };

    const result = mungeLocation(unmungedLocation);

    expect(result).toEqual(expectation);

  });

  it('testing munge weather function', () => {

    const expectation = 
      [
        {
          'forecast': 'Broken clouds',
          'time': '2021-05-22'
        },
        {
          'forecast': 'Few clouds',
          'time': '2021-05-23'
        },

      ];
      
  


    const result = mungeWeather(unmungedWeather);


    expect(result).toEqual(expectation);

  });

});