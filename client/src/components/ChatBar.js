import React, { useState, useEffect } from "react";

const ChatBar = () => {
    return (
        <div className="chat__sidebar">
            <h2>ChatMates</h2>

            <div>
                <h4 className="chat__header">USUÁRIOS ONLINE</h4>
                <div className="chat__users">
                    <p>User 1</p>
                    <p>User 2</p>
                </div>
            </div>
        </div>
    );
};

export default ChatBar;
