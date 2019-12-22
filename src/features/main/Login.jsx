import React from "react";
import "./Login.css";

const LoginPage = () => (
  <>
    {/* <NavBar /> */}
    <div className="login-container">
      <h1 className="title"> swinglist</h1>
      <h2 className="main-heading">a tempo driven playlist generator</h2>
      <div className="spot-login-btn-div">
        <button
          className="btn btn-primary"
          style={{ margin: "5px" }}
          onClick={() => console.log("clicked")}
        >
          Sign in with Spotify
        </button>
      </div>
    </div>
  </>
);

export default LoginPage;
