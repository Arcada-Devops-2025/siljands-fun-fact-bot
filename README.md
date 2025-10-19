# siljands-fun-fact-bot
A Twilio bot that replies with fun facts.

# How to run the bot locally

1. Clone github project
2. Install Express and Twilio SDK: npm install twilio express
3. Start server: node server.js
4. Go to http://127.0.0.1:8080/ and get your fact

# Dockerisation (for running on RAHTI)
Added Dockerfile and docker-compose for hosting on RAHTI.

# Webhook on RAHTI
To build and deploy the bot on RAHTI you can use a webhook to trigger the build. More info: https://docs.csc.fi/cloud/rahti/tutorials/webhooks/
A webhook has been set up (triggers on push).

# Routes 
https://siljands-fun-fact-bot-fun-fact-bot.2.rahtiapp.fi/voice

Works for both GET and POST.