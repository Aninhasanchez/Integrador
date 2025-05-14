import React from "react";

export default function SensorDashboard() {
  const sensores = [
    {
      id: "Sensor 1",
      tipo: "Temperatura",
      localizacao: "(10, 20)",
      leitura: "22,4 °C",
      ultimaLeitura: "Há 5 minutos",
    },
    {
      id: "Sensor 2",
      tipo: "Umidade",
      localizacao: "(25, 10)",
      leitura: "52%",
      ultimaLeitura: "Há 10 minutos",
    },
    {
      id: "Sensor 3",
      tipo: "Contador",
      localizacao: "(30, 50)",
      leitura: "128",
      ultimaLeitura: "Há 20 minutos",
    },
    {
      id: "Sensor 4",
      tipo: "Luminosidade",
      localizacao: "(60, 40)",
      leitura: "450 lx",
      ultimaLeitura: "Há 25 minutos",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-56 bg-blue-900 text-white flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt="Logo"
              className="w-16 mx-auto mb-2"
            />
            <p className="text-sm font-bold">
              Cidade Inteligente<br />Seng. Yduona Mongo
            </p>
          </div>
          <nav>
            <ul>
              <li className="py-2 px-4 bg-blue-700 rounded mb-2 cursor-pointer">Home</li>
              <li className="py-2 px-4 hover:bg-blue-700 rounded mb-2 cursor-pointer">Sensores</li>
              <li className="py-2 px-4 hover:bg-blue-700 rounded mb-2 cursor-pointer">Alertas</li>
              <li className="py-2 px-4 hover:bg-blue-700 rounded mb-2 cursor-pointer">Relatórios</li>
            </ul>
          </nav>
        </div>
        <div className="text-sm pl-2">
          <p className="mb-2">⚙️ Configurações</p>
          <p>📥 Sair</p>
        </div>
      </aside>

      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Sensores</h1>
          <span>Log9</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">ID</th>
                <th className="p-3">Tipo</th>
                <th className="p-3">Localização</th>
                <th className="p-3">Leitura Atual</th>
                <th className="p-3">Última Leitura</th>
              </tr>
            </thead>
            <tbody>
              {sensores.map((sensor, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{sensor.id}</td>
                  <td className="p-3">{sensor.tipo}</td>
                  <td className="p-3">{sensor.localizacao}</td>
                  <td className="p-3">{sensor.leitura}</td>
                  <td className="p-3">{sensor.ultimaLeitura}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
