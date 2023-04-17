import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBody = ({messages, lastMessageRef, typingStatus}) => {

    const navigate = useNavigate();

    const handleLeaveChat = () => {
        localStorage.removeItem('userName');
        navigate('/');
        window.location.reload();
    };

    return (
        <>
            <header className="chat_mainHeader">
                <p>Converse com seus amigos</p>
                <button className="leavechat_btn" onClick={handleLeaveChat}>
                    SAIR DO CHAT
                </button>
            </header>
            <div className="message_container">
                {messages.map ((message)=>
                    message.name === localStorage.getItem('userName') ? (
                        <div className="message_chats" key={message.id}>
                            <p className="sender_name">Você</p>
                            <div className="message_sender">
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ): (
                        <div className="message_chats" key={message.id}>
                            <p>{message.name}</p>
                            <div className="message_recipient">
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ))}                            
                <div className="message_status">
                    <p>{typingStatus}</p>
                </div>
                <div ref={lastMessageRef} />
            </div>
        </>
    );
};

export default ChatBody;
