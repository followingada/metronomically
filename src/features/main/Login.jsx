import React from "react";
import "./Login.css";

const LoginPage = () => (
  <>
    {/* <NavBar /> */}
    <div className="login-container">
      <h1 className="main-heading">a tempo driven playlist generator</h1>
      <div className="spot-login-btn-div">
        <button
          className="btn btn-primary"
          onClick={() => console.log("clicked")}
        >
          Sign in with Spotify
        </button>
      </div>
    </div>
  </>
);

export default LoginPage;
