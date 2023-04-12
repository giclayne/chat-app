import React, { useState } from 'react';

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');

  const handleTyping = () => {
    let user = localStorage.getItem("userName");
    socket.emit("typing", `${user} está digitando...`);
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  };
  return (
    <div className="chat_footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Escreva uma mensagem"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className="sendBtn">ENVIAR</button>
      </form>
    </div>
  );
};

export default ChatFooter;
