import React from "react";
import './home.css'

function Home() {
    return (
        <div className="homeContainer">

            <div className="primary">
                <p className="titleName">Hello,<br /> I'm <span className="coloured">Thivagar</span></p>
                <p className="titleJob"><span className="coloured">S</span>oftware <span className="coloured">E</span>ngineer</p>
                <p className="infoText">Full Stack Developer / AI Enthusiast / UI/UX Designer</p>
                <input type="button" className="primaryBtn" value="Learn More"/>
            </div>

            <div className="secondary">
                <div className="avatarImg">
                    <img width="100%" src='./assets/images/me.jpg' alt="thiva" />
                </div>
            </div>

        </div>                
    );
}

export default Home;