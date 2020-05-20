import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

const skills = [
    {
        "type": "JavaScript",
        "level": 80
    },
    {
        "type": "Java",
        "level": 70
    },
    {
        "type": "NodeJS",
        "level": 60
    },
    {
        "type": "Python",
        "level": 60
    },
    {
        "type": "React JS",
        "level": 70
    },
    {
        "type": "Angular",
        "level": 70
    }
]

function About() {
  return (
    <div className="aboutContainer">
      <div className="primaryAbt">
        <p className="titleText">About Me</p>
        <p className="paraText">
          I'm currently a software engineering undergraduate, a fullstack
          software developer always fueled by my passion. I enjoy building
          everything, from small business sites to rich interactive web apps.
          I'm able to master new skills and concepts quickly which I consider as
          the most essential aspect in developing my career. I'm also a
          passionate photographer dedicated to inspire the world in creating
          their moments.
        </p>
        <Link to="/contact">
          <input type="button" className="primaryBtn" value="Contact Me" />
        </Link>
      </div>

      <div className="secondaryAbt">
        <div class="u-center">
          <section class="skills">
            {
                skills.map((skill, i) => {
                    return(
                        <div class="skill">
                            <h3 class="skill__type">{skill.type}</h3>
                            <div class="skill__outer-bar">
                                <div style={{width: `${skill.level}%`}} class="skill__inner-bar"></div>
                            </div>
                        </div>
                    );
                })
            }

          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
