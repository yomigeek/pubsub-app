import redis from 'redis';

const subscriber = redis.createClient();

class SubscribeController {
  static topicSubscription(req, res) {
    const topic = req.params.topic;
    const {url} = req.body;
    if (!url) {
      return res.status(400).json({
        status: 'error',
        statusCode: 400,
        error: 'url is missing from the body',
      });
    } else {
      subscriber.on('message', (channel, message) => {
        console.log({topic: channel, data: {msg: message}});
      });

      subscriber.subscribe(topic);

      return res.status(200).json({
        status: 'success',
        statusCode: 200,
        message: `Subscription to ${topic} is successful on ${url}`,
      });
    }
  }
}

export default SubscribeController;
