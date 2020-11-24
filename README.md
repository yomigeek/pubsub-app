## pubsub-app
A PubSub API using HTTP Requests

##### A short video on how it works
Video Link: https://youtu.be/GQHOvZYfO48
Duration: 1min 26seconds


###### Features
- Subscribe to an event
    ```POST http://localhost:8000/subscribe/topic1 - body: {"url": " http://localhost:8000/event"} ```

- Publish an event
    ```POST http://localhost:8000/publish/topic1 - body: {"message": "hello"} ```


### Technology
- Node.js/Express
- Redis

### Installation
- Install Redis on your machine or server
- Clone the repo: Run git clone https://github.com/yomigeek/pubsub-app.git in the folder where you want the repo to be saved.
- Navigate into the newly created folder and install the dependencies using your command line: ```cd folder_name && npm install```
- Start the app by using ```npm run start``` and for development use ```npm run dev```
- Make a ```GET``` request to ```http://localhost:8000``` or  ```http://localhost:8000/event``` or go to your browser and use the url ```http://localhost:8000``` or  ```http://localhost:8000/event```

### Author
Made with <3 by Yomi Olaoye ;)
