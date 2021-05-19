// import app from '../lib/app.js';
// import supertest from 'supertest';
// import client from '../lib/client.js';
// import { execSync } from 'child_process';

import { mungeLocation } from '../lib/munge-utils.js';
import unmungedLocation from '../data/location-data';
// const request = supertest(app);



describe('API Routes', () => {
  it('test munge location function', () => {
    const expectation = {
      formatted_query: 'Portland, Multnomah County, Oregon, USA', latitude: '45.5202471', longitude: '-122.6741949'
    };
    const result = mungeLocation(unmungedLocation);
    expect(result).toEqual(expectation);
  });
});