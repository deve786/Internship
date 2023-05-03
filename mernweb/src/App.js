import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';
  
function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/services" Component={Services} />
        <Route exact path="/contact" Component={Contact} />
      </Routes>
      <Home />
      <Footer />
   </>
  );

}

export default App;
