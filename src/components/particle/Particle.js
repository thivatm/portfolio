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
        "particles": {
	        "number": {
	            "value": 60,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 5,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "right",
	            "out_mode": "out"
	        }
	    }
      }}
      style={{
        backgroundColor: '#0f1014'
      }} 
    />
  </div>
);
