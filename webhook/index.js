const express = require('express');
const { Twilio } = require('twilio');

const app = express();
app.use(express.json());

  const accountSid = '<YOUR_TWILIO_ACCOUNT_SID>';
    const authToken = '<YOUR_TWILIO_AUTH_TOKEN>';
    const client = new Twilio(accountSid, authToken);
const client = new Twilio(accountSid, authToken);

app.post('/trigger-calls', async (req, res) => {
  const numbersToCall = ['+918184818983']; 
  const callSids = [];

  try {
    for (const number of numbersToCall) {
      const call = await client.calls.create({
        twiml: '<Response><Say>Alert! Check your server status.</Say></Response>',
        to: number,
        from: twilioNumber
      });
      callSids.push(call.sid);
    }
    res.send(`Call initiated with SIDs: ${callSids.join(', ')}`);
  } catch (error) {
    console.error('Error making calls:', error);
    res.status(500).send('Failed to initiate calls.');
  }
});

app.listen(5000, () => {
  console.log('Webhook running on port 5000');
});
