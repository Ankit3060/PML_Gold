import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './Pages/Hero.jsx';
import TransactionTable from './Pages/Transaction.jsx';
import Profile from "./Pages/Profile.jsx";
import Login from './Pages/Login.jsx';
import SetPin from './Pages/SetPin.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';

function App() {

  return (
    <>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<Hero />} />
        <Route path="/transactions" element={<TransactionTable />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setpin" element={<SetPin />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
