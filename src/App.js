import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [message, setMessages] = useState([]);
  
  const sendMessage = (event) => {

  }

  return (
    <div className="App">
      <h1>Hello Programmers !!</h1>

      <input value={input} onChange={event => setInput(event.target.value)}/> 
      <button onClick={sendMessage}>Send Message</button> 
    </div>
  );
}

export default App;
