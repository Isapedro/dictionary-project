import Dictionary from"./Dictionary";
import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container">
      <div className="card bg-secondary bg-opacity-25 mt-5 ms-5 me-5">
        <div className="App">
          <header>
          <div className="title">Dictionary</div>
          </header>
          <main>
          <Dictionary />
          </main>
        </div>
      </div>
      <footer className="text-center">
            {" "}
            This project is {""}
            <a
              href="https://github.com/Isapedro/create-react-weather/commit/d6138acc666e6035db69d3e682e0b6e9e0107b91"
              target="_blank"
              rel="noreferrer"
              className="github">
              open-sourced
            </a>{" "}
            {""}
            and coded by{" "}
            <a
              href="www.linkedin.com/in/isa-pedro92"
              target="_blank"
              rel="noreferrer">
              Anaisa Pedro
            </a>
          </footer>
    </div>
  );
}

export default App;
