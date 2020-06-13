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
          I am a Software Engineer, a Fullstack
          Developer always fueled by my passion. I always enjoy building
          everything, from small business sites to rich interactive web applications.
          I'm able to master new skills and concepts quickly which I consider as
          the most essential aspect in developing my career.
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
