import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

// set input types
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set up morgan
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

// set base endpoint
const generalPrefix = '/api/v1';
app.get(generalPrefix, (req, res) => {
  res.status(200).send({ status: 200, message: 'Welcome to clan api' });
});

app.use('*', (req, res) => res.status(404).send({
  status: 404,
  error: 'This route does not exist. You may navigate to the home route at api/v1',
}));

export default app;
