import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Gallery from './Gallery';

const App=()=>{
  return(
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Background/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
        </Routes>
        <Footer/>
      </Router>

    </div>)
}

export default App;

