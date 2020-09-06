import React from "./node_modules/react";
// import "./Layout.css";

const NavBar = () => {
  return (
    <div
      style={{
        display: "none",
        height: "64px",
        overflow: "hidden",
        backgroundColor: "white",
        position: "fixed",
        top: "0",
        width: "100%",
      }}
    >
      <div
        style={{
          textAlign: "center",
          margin: "4px",
          alignSelf: "center",
          display: "grid",
          gridTemplateColumns: "200px 200px 200px",
          justifyContent: "center",
        }}
      >
        <p>HOME</p>
        <p
          style={{
            fontFamily: "Gaegu, cursive",
            fontSize: "24px",
            fontWeight: "600",
            position: "relative",
            top: "-11px",
          }}
        >
          METRONOMICALLY
        </p>
        <p>CONTACT</p>
      </div>
    </div>
  );
};

export default NavBar;
