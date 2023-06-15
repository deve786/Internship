import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const handleRegister = async (event) => {
    try {
      event.preventDefault();
      console.log(username, email, password);
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          username,
          email,
          password,
        }
      );
      setMessage(response.data.message);
      console.log("send");
    } catch (error) {
      setMessage("failed to Register User");
    }
  };
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-center">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
            <h1 className="display-4 fw-bolder">Hello, Friend</h1>
            <p className="lead text-center">Enter Your Details To Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light
                rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">REGISTER</h1>
            <form>
              <div className="mb-3">
                <label for="name" lass="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
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
                  I Agree Terms And Conditions
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary w-100 mt-4 rounded-pill"
                onClick={handleRegister}
              >
                Register
              </button>
            </form>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
