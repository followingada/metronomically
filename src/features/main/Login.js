import React from "react";
import "./Login.css";
import SpotifyLogin from "../authorization/SpotifyLogin";

const LoginPage = () => (
  <>
    {/* <NavBar /> */}
    <div
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        gridTemplateColumns: "1fr min-content 1fr"
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          display: "grid",
          alignItems: "end"
        }}
      >
        <h1
          style={{
            textTransform: "uppercase",
            // margin: "0 -",
            marginBottom: "-13px",
            letterSpacing: "5px",
            fontSize: "50px"
          }}
        >
          swinglist
        </h1>
      </div>
      <div style={{ backgroundColor: "black", color: "white" }} />
      <div style={{ backgroundColor: "black", color: "white" }} />
      <div style={{ position: "absolute", left: "40%", top: "46.5%" }}>
        <SpotifyLogin
          className="btn btn-primary"
          style={{ width: "min-content" }}
        />
      </div>
      <div />
      <div />
      <div>
        <h2
          style={{
            fontSize: "22px",
            textTransform: "uppercase",
            color: "black",
            margin: "-5px 0 0 113px"
          }}
        >
          a tempo driven playlist generator
        </h2>
      </div>
    </div>

    {/* */}
  </>
);

export default LoginPage;
