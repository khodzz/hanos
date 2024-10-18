import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <p className="login__link">
          You are here: <span>Home</span>: Login
        </p>
        <form className="login" action="">
          <h1 className="login__sign-in">Sign in</h1>
          <h4 className="login__description">
            Already have an account? Sign in to retrieve your account settings.
          </h4>
          <p className="login__description-second">
            Please note: that an account is only known to us if you recieve
            deliveries from HANOS.
          </p>
          <div className="login__inputs">
            <div>
              <span className="login__inputs-email-title">Email Address</span>
              <br />
              <input className="login__inputs-input-email" type="email" />
            </div>
            <div>
              <span className="login__inputs-password-title">Password</span>
              <br />
              <input className="login__inputs-input-password" type="password" />
            </div>
            <div>
              <button className="login__button-sign-in">Sign in</button>
              <button className="login__button-forgot-password">
                Forgot password?
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
