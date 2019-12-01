import React from "react";
import "./App.css";
import NavBar from "./features/layout/NavBar";
import LoginPage from "./features/main/Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LoginPage />
    </div>
  );
}

export default App;
