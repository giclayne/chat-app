import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userName", userName);
        navigate("/chat");
    };

    return (
        <form className="home__container" onSubmit={handleSubmit}>
            <h2 className="home__header">Cadastre-se para entrar no chat</h2>
            <label htmlFor="username">Usuário</label>
            <input
                type="text"
                minLength={4}
                name="username"
                id="username"
                className="username__input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button className="home__cta">CADASTRE-SE</button>
        </form>
    );
};

export default Home;