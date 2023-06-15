import React from 'react';
import './App.css';
// import Dropdown from 'bootstrap/js/src/dropdown';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {Route, Routes} from 'react-router-dom';
// import ERR from './components/ERR';
import Login from './components/Login';
import Register from './components/Register';
import Blog from './components/Blog';
import AllBlog from './components/AllBlog';
import BlogDetail from './pages/BlogDetail'
import Blogs from './pages/Blogs'
import Error from './pages/Error'  

import Article from './components/Article';
import Industry from './components/Industry';
import JobList from './pages/JobList';
import CareerHome from './components/CareerHome';
import Courses from './components/Courses';
import CourseDetails from './components/CourseDetails';
// import Video from '../components/Video';
function App() {
  
  return (
    <>
      <Navbar />
      {/* <Dropd.own /> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/blog" element={<Blog/>} />
        <Route exact path="/contact" element={<Contact/>} />
        {/* <Route exact path="/*" element={<ERR/>} /> */}
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/allblog" element={<AllBlog/>} />
        <Route exact path="/services" element={<Services/>} />
        {/* <Route path="/" exact element={<Homepage/>}/> */}
        <Route path="/blog/:slug" element={<BlogDetail/>}/>
        <Route path="/blogs" element={<Blogs/>}/>  
        <Route path="/:slug" element={<Article/>}/>  
        <Route path="/:slug" element={<Industry/>}/>  
        <Route path="/job" element={<JobList/>}/> 
        <Route path="/career" element={<CareerHome/>}/>
        <Route path="/*" element={<Error/>}/> 
        <Route path="/courses" element={<Courses/>}> 
        <Route path="/courses/:slug" element={<CourseDetails/>}/> 
        </Route>
      </Routes>
      
      
      <Footer />
   </>
  );

}

export default App;
