import React from "react";
import "./styles/Login.css";
import logo from "./logo.png";
const Login = ({ history }) => {
  return (
      <form id="form" className="form">
        <div className="signinbox">
        <div className="back">
        <img src={logo} alt="Logo" />
      </div>

          <div className="form-control_border">
            <input
              type="text"
              className="name input"
              placeholder="카카오계정 (이메일 또는 전화번호)"
            />
</div>

<div className="form-control">
            <input
              type="password"
              className="password input"
              placeholder="비밀번호"
            />
         
          </div>
          <button
              type="submit"
              className="signinbutton"
              onClick={() => {
                history.push("/app");
              }}
            >
              로그인
            </button>

            <div className="rule">
            <input type="checkbox" className="checkbox" />
            <h4>자동로그인</h4>
          </div>

          <div className="login__footer">
            카카오계정 찾기 &nbsp;&nbsp;| &nbsp;&nbsp;비밀번호 재설정
          </div>
        </div>
      </form>
 
  );
}

export default Login;
