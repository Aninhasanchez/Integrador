import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="imagens/logo.png" alt="Logo Cidade Inteligente" class="logo" />
        <h2>LOGIN</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button onClick={() => navigate('/home')} className="login-button">Entrar</button>

      </div>
    </div>
  );
}

export default Login;
