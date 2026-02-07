const express = require('express');
const { Client } = require('twilio');

const app = express();
app.use(express.json());

app.post('/trigger-calls', (req, res) => {
  const accountSid = '<acc-sid>';
  const authToken = '<auth-token>';
  const client = new Client(accountSid, authToken);

  const numbersToCall = ['8184818983'];
  const callSids = [];

  numbersToCall.forEach(number => {
    const call = client.calls.create({
      twiml: '<Response><Say>Change alert message here</Say></Response>',
      to: number,
      from: '<twilio-number>'
    });
    callSids.push(call.sid);
  });

  res.send(`Call initiated with SIDs: ${callSids.join(', ')}`);
});

app.listen(5000, () => console.log('Webhook running on port 5000'));
