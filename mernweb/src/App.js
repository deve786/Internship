import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {Route, Routes} from 'react-router-dom';
import ERR from './components/ERR';
import Login from './components/Login';
import Register from './components/Register';
import Blog from './components/Blog';
import AllBlog from './components/AllBlog';
  
function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/blog" element={<Blog/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/*" element={<ERR/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/allblog" element={<AllBlog/>} />
      </Routes>
      
      
      <Footer />
   </>
  );

}

export default App;
