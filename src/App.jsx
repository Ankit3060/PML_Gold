import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TransactionTable from './Pages/Transaction.jsx';
import Profile from "./Pages/Profile.jsx";
import Login from './Pages/Login.jsx';
import SetPin from './Pages/SetPin.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home.jsx';
import PartnerWithUs from "./pages/PartnerWithUs"; 
import Contact from "./Pages/Contact.jsx";
function App() {

  return (
    <>
    <Router>
      <ScrollToTop />
      {/* <Layout/> */}
      <Routes >
        <Route path="/"  element={<Layout />} > 
        <Route index element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path="/transactions" element={<TransactionTable />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setpin" element={<SetPin />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path="/partner-with-us" element={<PartnerWithUs/>} />
            <Route path="/contact-us" element={<Contact/>} />
            <Route path='/privacy-policy' element={<div>PrivacyPolicy</div>}/>
            <Route path='/about-us' element={<div>AboutUs</div>}/>
            <Route path='/terms-and-conditions' element={<div>TermsAndConditions</div>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
