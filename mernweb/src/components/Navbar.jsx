import React from "react";
import {NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
       <div>
        <nav class="navbar navbar-expand-lg navbar-light shadow">
  <div class="container">
    
    <NavLink class="navbar-toggler" type="NavLink" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </NavLink>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/services">Services</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/contact">Contact</NavLink>
        </li>
        
       
      </ul>
      <NavLink class="navbar-brand fw-bolder fs-4 mx-auto" to="#">Aysdev Global Consultancy</NavLink>
      <NavLink className="btn btn-outline-primary ms-auto px-4 rounded-pill ">
        <i className="fa fa-sign-in me-2"></i>Login</NavLink>
      <NavLink className="btn btn-outline-primary ms-2 px-4 rounded-pill ">
      <i className="fa fa-user-plus me-2"></i>Register</NavLink>
      
    </div>
  </div>
</nav>
          
       </div>
    );
}

export default Navbar;