import React from 'react';
import './App.css';
import { Header } from './components/layout/header';
import { Home } from "./components/layout/Home";
import { Contact } from './components/layout/Contact';
import Event from './components/layout/Event';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sukien" element={<Event />} />
          <Route path="/LienHe" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
