import {Router} from 'express';
import SubscribeController from '../controllers/SubscribeController';

const suscribeRouter = Router();

suscribeRouter.post('/:topic', SubscribeController.topicSubscription);

export default suscribeRouter;
