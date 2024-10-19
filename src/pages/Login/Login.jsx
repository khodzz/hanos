import React from "react";
import "./Login.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <p className="login__switch-pages">
          {" "}
          You are here: <span>Home</span> {">"} Login
        </p>
        <div style={{ display: "flex", justifyContent: "spaceBetween" }}>
          <div className="login__sign-in-block">
            <form className="login__form" action="">
              <h1 className="login__form-title">Sign in</h1>
              <h4 className="login__form-description">
                Already have an account? Sign in to retrieve your account
                settings.
              </h4>
              <p className="login__form-description-second">
                Please note: that an account is only known to us if you recieve
                deliveries from HANOS.
              </p>
              <div className="login__inputs">
                <span className="login__inputs-title">Email Address</span>
                <br />
                <div>
                  <MdOutlineEmail className="login__inputs-svg" />
                  <input
                    className="login__inputs-input"
                    placeholder="Enter your email address "
                    type="email"
                  />
                </div>
                <span className="login__inputs-title">Password</span>
                <br />
                <div>
                  <RiLockPasswordLine className="login__inputs-svg" />
                  <input
                    className="login__inputs-input"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <FaRegEye className="login__inputs-eye" />
                  <FaRegEyeSlash className="login__inputs-eye" />
                </div>
                <div className="login__buttons">
                  <button className="login__buttons-sign-in">Sign in</button>
                  <button className="login__buttons-forgot-password">
                    Forgot password?
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="login__information-block">
            <div className="login__information-block-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
