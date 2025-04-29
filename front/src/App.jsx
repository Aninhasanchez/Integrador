import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './login';
import Home from './componentes/Home/home';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
