import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
      <img src="imagens/logo.png" alt="Logo Cidade Inteligente"/>
        <nav>
          <ul>
            <li className="active">Home</li>
            <li>sensores</li>
            <li>Alertas</li>
            <li>Relatórios</li>
          </ul>
        </nav>
        <div className="bottom-menu">
          <p>⚙️ Configurações</p>
          <p>📤 Sair</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <span>Home</span>
          <div>
            <a href="#">Administrador</a> 👤
          </div>
        </header>

        <div className="map-alerts">
          <div className="map">
            <div className="sensor" style={{ top: "40%", left: "50%" }}></div>
            <div className="sensor active" style={{ top: "60%", left: "30%" }}>
              <div className="tooltip">
                <strong>Sensor 1</strong><br />
                Temperatura: 22.5ºC<br />
                Umidade: 45%<br />
                Última leitura: há 5 minutos
              </div>
            </div>
            <div className="sensor" style={{ top: "20%", left: "60%" }}></div>
            <div className="sensor" style={{ top: "70%", left: "70%" }}></div>
          </div>

          <div className="alert-box">
            <h3>Alerta em Tempo Real</h3>
            <div className="alert">
              <p>⚠️ <strong>Sensor 2</strong></p>
              <p>Temperatura elevada</p>
              <p>Última leitura: há 2 minutos</p>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="chart">
            <h4>Temperatura</h4>
            <div className="graph-placeholder">📈</div>
          </div>
          <div className="chart">
            <h4>Umidade</h4>
            <div className="graph-placeholder">📉</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
