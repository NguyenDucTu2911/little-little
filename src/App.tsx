import React from 'react';
import './App.css';
import { Header } from './components/layout/header';
import { Home } from './components/pages/Home/Home';
import { Contact } from './components/pages/Contact/Contact';
import Event from './components/pages/Event/Event';
import DetailEvent from './components/pages/Event/detailEvent';
import Check from './components/layout/pay/payload/check';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import PayTicker from './components/layout/pay/paySuccess/payTicket';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sukien" element={<Event />} />
          <Route path="/LienHe" element={<Contact />} />
          <Route path="/detailEvent/:id" element={<DetailEvent />} />
          <Route path="/Check" element={<Check />} />
          <Route path='/Ticker' element={<PayTicker />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
