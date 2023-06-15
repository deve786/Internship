import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      console.log(email, password);
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      setMessage(response.data.message);
      console.log("send");
    } catch (error) {
      setMessage("Invalid Credentials");
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
            <NavLink
              to="/register"
              className="btn btn-outline-light
                rounded-pill pb-2 w-50"
            >
              Register
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button
                onClick={handleLogin}
                type="submit"
                className="btn btn-primary rounded-pill"
              >
                Submit.
              </button>
            </form>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
