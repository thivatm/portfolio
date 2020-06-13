import React, { useEffect } from "react";
import './home.css'
import { Link } from "react-router-dom";

function Home() {

    useEffect(() => {

    },[]);

    return (
        <div className="homeContainer">
            <div className="primary">
                <p className="titleName">Hello,<br /> I'm <span className="coloured">Thivagar</span></p>
                <p className="titleJob">Software Engineer</p>
                <p className="infoText">Full Stack Developer / AI Enthusiast / UI/UX Designer</p>
                <Link to="/about">
                    <input type="button" className="primaryBtn" value="Learn More"/>
                </Link>
            </div>

            <div className="secondary">
                <div className="avatarImg">
                    <img width="100%" src='/assets/images/me.jpg' alt="thiva" />
                </div>
                <div align="center" className="socialbtns">
                    <ul>
                        <li>
                        <a href="https://medium.com/@thivagartm" class="fa fa-lg fa-medium" target="_blank"></a>
                        </li>
                        <li>
                        <a href="https://twitter.com/thiva_mahen" class="fa fa-lg fa-twitter" target="_blank"></a>
                        </li>
                        <li>
                        <a href="https://github.com/thivatm" class="fa fa-lg fa-github" target="_blank"></a>
                        </li>
                        <li>
                        <a href="https://stackoverflow.com/users/9997860/thivagar" class="fa fa-lg fa-stack-overflow" target="_blank"></a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/tm-851422138/" class="fa fa-lg fa-linkedin" target="_blank"></a>
                        </li>
                        <li>
                        <a href="https://www.instagram.com/thivag__ar/" class="fa fa-lg fa-instagram" target="_blank"></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>                
    );
}

export default Home;