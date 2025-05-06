import React, { useState } from 'react';
import './configuracao.css';

const Configurações = () => {
  const [minTemp, setMinTemp] = useState('');
  const [maxTemp, setMaxTemp] = useState('');
  const [updateInterval, setUpdateInterval] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ minTemp, maxTemp, updateInterval, notificationsEnabled });
  };

  return (
    <div className="config-container">
      <h2>CONFIGURAÇÕES</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Parâmetros Globais</legend>
          <div className="temp-limits">
            <div>
              <label>Limite de temperatura mínima</label>
              <input
                type="number"
                value={minTemp}
                onChange={(e) => setMinTemp(e.target.value)}
              />
            </div>
            <div>
              <label>Limite de temperatura máxima</label>
              <input
                type="number"
                value={maxTemp}
                onChange={(e) => setMaxTemp(e.target.value)}
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Intervalo de Atualização</legend>
          <label>Intervalo de atualização</label>
          <input
            type="number"
            value={updateInterval}
            onChange={(e) => setUpdateInterval(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Configuração de Notificações</legend>
          <label>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
            />
            Ativar notificações
          </label>
        </fieldset>

        <button type="submit" className="save-button">Salvar</button>
      </form>
    </div>
  );
};

export default Configurações;
