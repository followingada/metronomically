import React from "react";
import "./Login.css";

const LoginPage = () => (
  <>
    {/* <NavBar /> */}
    <div
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        gridTemplateColumns: "1fr 266px 1fr"
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
        <button
          className="btn btn-primary"
          style={{ width: "266px" }}
          onClick={() => console.log("clicked")}
        >
          Coming Soon
        </button>
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
