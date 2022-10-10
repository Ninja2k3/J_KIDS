import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import { useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 


const App=()=>{
  return(
    <div>
      <Router>
        <Wrapper>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Background/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
        </Routes>
        </Wrapper>
        <Footer/>
      </Router>

    </div>)
}

export default App;

