import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBody = () => {
    const navigate = useNavigate();

    const handleLeaveChat = () => {
        localStorage.removeItem('userName');
        navigate('/');
        window.location.reload();
    };

    return (
        <>
            <header className="chat__mainHeader">
                <p>Converse com seus amigos</p>
                <button className="leaveChat__btn" onClick={handleLeaveChat}>
                    SAIR DO CHAT
                </button>
            </header>

            <div className="message__container">
                <div className="message__chats">
                    <p className="sender__name">Você</p>
                    <div className="message__sender">
                        <p>Olá</p>
                    </div>
                </div>

                <div className="message__chats">
                    <p>Outro</p>
                    <div className="message__recipient">
                        <p>Oi, tudo bem com você?</p>
                    </div>
                </div>

                <div className="message__status">
                    <p>Alguém está digitando...</p>
                </div>
            </div>
        </>
    );
};

export default ChatBody;
