import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (username === "" || message === "") return;

    const userMsg = {
      sender: username,
      text: message,
      time: new Date().toLocaleTimeString(),
    };

    const botMsg = {
      sender: "ChatBot",
      text: getBotResponse(message),
      time: new Date().toLocaleTimeString(),
    };

    setChat([...chat, userMsg, botMsg]);
    setMessage("");
  };

  const getBotResponse = (msg) => {
  msg = msg.toLowerCase().trim();

  if (msg === "") return "Please type something 🙂";

  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey"))
    return "Hello 👋 How can I help you?";

  if (msg.includes("how are you"))
    return "I'm doing great 😄 Thanks for asking!";

  if (msg.includes("your name"))
    return "I'm a simple React Chatbot 🤖";

  if (msg.includes("help"))
    return "Sure! You can ask about projects, internships, or React 😊";

  if (msg.includes("thank"))
    return "You're welcome 💙";

  if (msg.includes("bye") || msg.includes("exit"))
    return "Goodbye 👋 See you soon!";

  return "Sorry 🤖 I’m still learning. Try asking something else!";
};


  return (
    <div className="chat-container">
      <h2>React Chatbot</h2>

      <input
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <div className="chat-box">
        {chat.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.sender}:</strong> {msg.text}
            <span className="time">{msg.time}</span>
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
