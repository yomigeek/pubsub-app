## pubsub-app
A PubSub API using HTTP Requests

##### A short video on how it works
Video Link: https://www.loom.com/share/5a4bd46584cb427a9bdc643eccf37e71


###### Features
- Subscribe to an event
    ```POST http://localhost:9000/topic1 - body: {"url": " http://localhost:8000"} ```

- Publish an event
    ```POST http://localhost:8000/publish/topic1 - body: {"message": "hello"} ```


### Technology
- Node.js/Express
- Redis

### Installation
- Install Redis on your machine or server https://redis.io/topics/quickstart
- Clone the repo: Run git clone https://github.com/yomigeek/pubsub-app.git in the folder where you want the repo to be saved.
- Navigate into the newly created folder and install the dependencies using your command line: ```cd folder_name && npm install```
- Start the both server by using ```npm run start``` and or ```npm run publisher``` for the publisher server and
```npm run subscriber``` for subscriber server
- Make a ```POST``` request to ```http://localhost:9000/{topic}``` to subscribe to a topic, and ```POST``` request to ```http://localhost:8000/publish/{topic}``` to publish to a topic 

### Author
Made with <3 by Yomi Olaoye ;)
