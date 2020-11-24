import redis from 'redis';

const publisher = redis.createClient();

class PublishController {
  static topicPublishing(req, res) {
    const topic = req.params.topic;
    const {message} = req.body;
    if (!message) {
      return res.status(400).json({
        status: 'error',
        statusCode: 400,
        error: 'message is missing from the body',
      });
    } else {
      publisher.publish(topic, message);
      return res.status(200).json({
        status: 'success',
        statusCode: 200,
      });
    }
  }
}

export default PublishController;
