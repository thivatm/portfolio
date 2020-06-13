import React, { useState } from "react";
import "./contact.css";
import emailjs from 'emailjs-com';

function Contact() {
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(true);

    emailjs.sendForm('gmail', 'portfolio', e.target, 'user_x9dicMKpKz6iDNMboZQY1')
      .then((result) => {
          setSent(false);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contactCont">
      <div class="primaryContact">
        <p className="titleText">Contact Me</p>
        <p className="paraText">
          Currently im interested doing projects as a freelancer. If you have a project to be done feel free to
          contact me!
        </p>
        <p className="paraText">
          You can reach me via <span className="coloured">thivagartm@gmail.com</span>
        </p>
      </div>

      {sent ? 
      <div className="loadingScreen">
        <img src="/assets/loading/send.svg" alt="loading.."/>
      </div> : ""}

      <div className="secondaryContact">
        <div className="contactContents">
            <form onSubmit={sendEmail} className="contactForm">
              <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="FULL NAME"
                  name="from_name"
                  required
              />
              <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="from_email"
                  required
              />
              <textarea
                  class="form-control"
                  rows="10"
                  placeholder="MESSAGE"
                  name="message"
                  required
              ></textarea>
              <input type="submit" className="emailBtn" value="Send" />
            <hr style={{ border: "0.5px solid white" }} />
            </form>
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

    </div>
  );
}



export default Contact;
