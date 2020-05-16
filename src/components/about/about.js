import React from "react";
import './about.css'

function About() {
    return (
        <div className="aboutContainer">

            <div className="primaryAbt">
                <p className="titleText">About Me</p>
                <p className="paraText">I'm currently a software engineering undergraduate, a fullstack software developer always fueled by my passion. I enjoy building everything, from small business sites to rich interactive web apps. I'm able to master new skills and concepts quickly which I consider as the most essential aspect in developing my career. I'm also a passionate photographer dedicated to inspire the world in creating their moments.</p>
                <input type="button" className="primaryBtn" value="Contact Me"/>
            </div>

            <div className="secondaryAbt">
                
            </div>

        </div>                
    );
}

export default About;