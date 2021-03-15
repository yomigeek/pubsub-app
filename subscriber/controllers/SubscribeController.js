import redis from "redis";

const subscriber = redis.createClient();

class SubscribeController {
  static topicSubscription(req, resp) {
    const topic = req.params.topic;
    const {url} = req.body;
    if (!url) {
      return res.status(400).json({
        status: "error",
        statusCode: 400,
        error: "url is missing from the body",
      });
    } else {
      subscriber.on("message", (channel, message) => {
        console.log({topic: channel, data: {msg: message}});
      });

      subscriber.subscribe(topic);

      return resp.status(200).json({
        url,
        topic,
      });
    }
  }
}

export default SubscribeController;
