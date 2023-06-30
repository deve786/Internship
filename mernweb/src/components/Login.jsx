import {React, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    const location = useLocation()
    async function handleClick (e){
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/login',{
                email,password
            }).then(res=>{alert(res.data.message)})
            location("/")
        } catch (e) {
            
        }
      };
    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder">Welcome back</h1>
                        <p className="lead text-center">Enter Your Credentials To Login</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/register" className="btn btn-outline-light
                rounded-pill pb-2 w-50">Register</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button onClick={handleClick} type="submit" className="btn btn-primary rounded-pill">Submit.</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
