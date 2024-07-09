// we define an Express route for handling POST requests to the root endpoint, when a request is received it takes the users message from
// the req body and sends it to OpenAI to generate a chatgpt like response, the API reply is sent back to the client 

import express from 'express';
import axios from 'axios';

const router = express.Router();

router.post('/', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4',
      messages: [{ role: 'user', content: userMessage }],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error communicating with ChatGPT API');
  }
});

export default router;
