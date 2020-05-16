import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh"
    }}
  >
    <Particles
      params={{
        particles: {
          line_linked: {
            shadow: {
              enable: true,
              color: "#E35757",
              blur: 2
            }
          }
        }
      }}
      style={{
        backgroundColor: '#0f1014'
      }} 
    />
  </div>
);
