import React from "react";
import './App.css';
import ParticleComponent from "./Particle";

import NavBar from './components/navbar/navbar';

const styles = {
  navBar: {
    color: "#fff",
    fontSize: "85px",
    backgroundColor: "#1E1E1E",
    borderRight: 0,
    height: '100%',
    padding: 'auto'
  }
}

function App() {
  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "250px",
          height: "100%"
        }}
      >
        <ParticleComponent />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default App;
