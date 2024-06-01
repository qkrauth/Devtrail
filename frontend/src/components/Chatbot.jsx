import React, { useState } from 'react';
import './Chatbot.css';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return; // returns early if input is blank

    // a message object representing the user and their input being the user content
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    try {
      // a post request is made to the URL sending the user input as the message
      const response = await axios.post('http://localhost:5000/api/chat', { message: input });
      const botMessage = response.data.choices[0].message.content; // awaited response - bot reply is extracted from response.data.choices

      const newMessages = [...messages, userMessage, { role: 'bot', content: botMessage }];
      setMessages(newMessages); //setMessage function called to update the state of messages
      setInput(''); // input field cleared
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="message-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.role === 'user' ? msg.content : typeof msg.content === 'string' ? msg.content : JSON.stringify(msg.content)}
          </div> // api response comes back as a JSON object so stringify turns that into a string (had an error here initially)
        ))}
      </div>
      <div className="input-container">
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
