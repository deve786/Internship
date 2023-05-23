// import { Dropdown } from "bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import { NavLink } from 'react-router-dom';

// import Dropdown from './Dropdown.js';
// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const Navbar = () => {
  // function TriggerRendererProp() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">

          <NavLink className="navbar-toggler" type="NavLink" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto m-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">


                {/* <OverlayTrigger */}
                {/* placement="bottom" */}
                {/* overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>} */}
                {/* > */}
                {/* {({ ref, ...triggerHandler }) => ( */}
                {/* <Button */}
                {/* variant="light" */}
                {/* {...triggerHandler} */}
                {/* className="d-inline-flex align-items-center" */}
                {/* > */}
                {/* <Image */}
                {/* ref={ref} */}
                {/* roundedCircle */}
                {/* src="holder.js/20x20?text=J&bg=28a745&fg=FFF" */}
                {/* /> */}
                
                <Dropdown>
                  <Dropdown.Toggle  className="nav-link" variant=".text-black-50" id="dropdown-basic">
                    Services
                  </Dropdown.Toggle>
                  
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* </Button> */}
                {/* )} */}
                {/* </OverlayTrigger> */}
              </li>



              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/career">Career</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>


            </ul>
            <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">Aysdev Global Consultancy</NavLink>
            <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill ">
              <i className="fa fa-sign-in me-2"></i>Login</NavLink>
            <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill ">
              <i className="fa fa-user-plus me-2"></i>Register</NavLink>


          </div>
        </div>
      </nav>

    </div>
  );

}







export default Navbar;