/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// import client from './client.js';
import request from 'superagent';
import { mungeLocation } from './munge-utils.js';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));



app.get('/location', async (req, res) => {
  try {
    const URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_API_KEY}&q=${req.query.search}&format=json`;
    const data = await request.get(URL);
    const newData = mungeLocation(data.body);
    res.json(newData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default app;