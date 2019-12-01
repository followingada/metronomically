import React from "react";
import "./Login.css";

const LoginPage = () => (
  <>
    {/* <NavBar /> */}
    <div className="login-container">
      <h1>
        {" "}
        metronomically
        {/* m&#9679;e&#9679;t&#9679;r&#9679;o&#9679;n&#9679;o&#9679;m&#9679;i&#9679;c&#9679;a&#9679;l&#9679;l&#9679;y */}
      </h1>
      <h2 className="main-heading">a tempo driven playlist generator</h2>
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
