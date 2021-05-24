// import app from '../lib/app.js';
// import supertest from 'supertest';
// import client from '../lib/client.js';
// import { execSync } from 'child_process';

import { mungeLocation, mungeWeather, mungeReviews } from '../lib/munge-utils.js';
import unmungedLocation from '../data/location-data';
import unmungedWeather from '../data/weather-data';
import unmungedReviews from '../data/reviews-data';
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




  it('testing munge reviews function', () => {

    const expectation = 
      [
        {
          'name': 'Molinari Delicatessen',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/B5vUs6hU1W6UcBQL52v2GQ/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/molinari-delicatessen-san-francisco?adjust_creative=ALUB0DXEaiBGcoU2KfO6hg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ALUB0DXEaiBGcoU2KfO6hg',
        },
        {
          'name': 'Deli Board',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/m5dL_mNk9rjSJ5jQu17hVw/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/deli-board-san-francisco?adjust_creative=ALUB0DXEaiBGcoU2KfO6hg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ALUB0DXEaiBGcoU2KfO6hg',
        },

      ];
      
    const result = mungeReviews(unmungedReviews);

    expect(result).toEqual(expectation);

  });

});