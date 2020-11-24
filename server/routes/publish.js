import {Router} from 'express';
import PublishController from '../controllers/PublishController';

const publishRouter = Router();

publishRouter.post('/:topic', PublishController.topicPublishing);

export default publishRouter;
