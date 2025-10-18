const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

// Create a route that will handle Twilio webhook requests, sent as an
// HTTP POST to /voice in your application
app.post('/voice', (request, response) => {
  // Use the Twilio Node.js SDK to build an XML response
    const twiml = new VoiceResponse();

    const facts = ["Fun fact 1", "Fun fact 2", "Fun fact 3", "Fun fact 4"];
    let i = Math.floor(Math.random() * facts.length);
    let r = facts[i];

    twiml.say(r);

  // Render the response as XML in reply to the webhook request
  response.type('text/xml');
  response.send(twiml.toString());
});

// HTTP GET to /voice for testing
app.get('/voice', (request, response) => {
  // Use the Twilio Node.js SDK to build an XML response
    const twiml = new VoiceResponse();

    const facts = ["Fun fact 1", "Fun fact 2", "Fun fact 3", "Fun fact 4"];
    let i = Math.floor(Math.random() * facts.length);
    let r = facts[i];

    twiml.say(r);

  // Render the response as XML in reply to the webhook request
  response.type('text/xml');
  response.send(twiml.toString());
});

// Create an HTTP server and listen for requests on port 8080
app.listen(8080, () => {
    console.log('TwiML server running at http://127.0.0.1:8080/');
});