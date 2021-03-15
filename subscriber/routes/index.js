import {Router} from 'express';
import subscribeRouter from './subscribe';

const apiRoutes = Router();

apiRoutes.use('/', subscribeRouter);

// Matches /api the API home route
apiRoutes.get('/', (req, res) => {
  res.status(200).send({
    url: `${req.protocol}://${req.headers.host}`,
    status: 'success',
    message: 'SUBSCRIBER API',
  });
});

apiRoutes.get('/event', (req, res) => {
  res.status(200).send({
    url: `${req.protocol}://${req.headers.host}`,
    status: 'success',
    message: 'SUBSCRIBER API',
  });
});

export default apiRoutes;
