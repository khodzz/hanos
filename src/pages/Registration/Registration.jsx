import React from "react";
import "./Registration.scss";

const Registration = () => {
  return (
    <>
      <div className="container">
        <form action="">
          <p>
            You are here: <span>Home</span>: Login
          </p>
          <h1>Sign in</h1>
          <h4>
            Already have an account? Sign in to retrieve your account settings.
          </h4>
          <p>
            Please note: that an account is only known to us if you recieve
            deliveries from HANOS.
          </p>

          <div>
            <div>
              <span>Email Address</span>
              <input type="email" />
            </div>
            <div>
              <span>Password</span>
              <input type="password" />
            </div>
            <div>
              <button>Sign in</button>
              <button>Forgot password?</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
