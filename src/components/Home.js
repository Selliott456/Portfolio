import React from "react";
import email from "../images/email.svg";
import github from "../images/github.svg";
import linkedIn from "../images/linkedin.svg";

function Home() {
  return (
    <div className="header">
      <h1>Elliott Peck</h1>
      <h2>Sotware Engineer</h2>
      <p>London, UK</p>
      <div className="socials">
        <a className="socials_link" href="https://github.com/Selliott456">
          <img alt="github" className="icon" src={github}></img>
        </a>
        <a className="socials_link" href="mailto: elliottpeck12@gmail.com">
          <img alt="email" className="icon" src={email}></img>
        </a>
        <a
          className="socials_link"
          href="https://www.linkedin.com/in/elliott-peck-b41b6b15a/"
        >
          <img alt="inkedIn" className="icon" src={linkedIn}></img>
        </a>
      </div>
    </div>
  );
}

export default Home;
