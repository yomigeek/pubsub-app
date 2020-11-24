import {Router} from 'express';
import subscribeRouter from './subscribe';
import publishRouter from './publish';

const apiRoutes = Router();

apiRoutes.use('/subscribe', subscribeRouter);
apiRoutes.use('/publish', publishRouter);

// Matches /api the API home route
apiRoutes.get('/', (req, res) => {
  res.status(200).send({
    url: `${req.protocol}://${req.headers.host}`,
    status: 'success',
    message: 'PUBSUB API',
  });
});

apiRoutes.get('/event', (req, res) => {
  res.status(200).send({
    url: `${req.protocol}://${req.headers.host}`,
    status: 'success',
    message: 'PUBSUB API',
  });
});

export default apiRoutes;
