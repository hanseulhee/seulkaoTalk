import React from "react";
import "./styles/Login.css";

function Login() {
  return (
    <div className="login__tool">
      <form id="form" className="form">
        <div className="signinbox">
          <div className="inform">Sign In</div>

          <div className="form-control">
            <input
              type="text"
              className="name input"
              placeholder="Enter username"
            />

            <small>Error message</small>
          </div>

          <div className="form-control">
            <input
              type="password"
              className="password input"
              placeholder="Enter password"
            />
            <small>Error message</small>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
