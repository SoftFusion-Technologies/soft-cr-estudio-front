import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ServiceDetailPage from './pages/services/ServiceDetailPage';

/* Benjamin Orellana - 2026/04/16 - Se incorpora routing para que cada servicio tenga su propia página. */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/:slug" element={<ServiceDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
