import 'babel-core/register';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import apiRoutes from './routes/index';
import dotenv from 'dotenv';

dotenv.config();

// Setting up the express app
const app = express();
const port = process.env.PORT || 9000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.header('origin'));
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/', apiRoutes);

// catch un-available routes
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Oops! The resource you requested does not exist.',
  });
});

app.listen(port, () => {
  console.log(`server started at: ${port}`);
});

export default app;
