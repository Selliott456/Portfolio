import MeSun from "../images/me_sun.jpg";
import React from "react";
import elixir from "../images/elixir.svg";
import phoenix from "../images/phoenix.svg";
import react from "../images/react.svg";
import javascript from "../images/javascript.svg";
import mongodb from "../images/mongodb.svg";
import node from "../images/node.svg";
import python from "../images/python.svg";
import flask from "../images/flask.svg";
import sass from "../images/sass.svg";
import css from "../images/css.svg";

function About() {
  return (
    <div>
      <div className="about">
        <img alt="elliott" className="about__photo" src={MeSun} />
        <div className="about__info">
          <p>
            Hi, I'm Elliott. Most recently, I have been working at{" "}
            <a href="https://breakroom.cc">Breakroom</a> using{" "}
            <b>Elixir, Phoenix, </b> <b>Postgres</b> and <b>SQL</b> in a full
            stack position. Before this, I was an engineer at{" "}
            <a href="https://citymapper.com">Citymapper </a>
            using <b>React and Javascript.</b>{" "}
          </p>
          <p>
            I am a second career developer and previously worked in the field of
            Education as a Physics specialist in various middle and senior
            management roles.
          </p>
          <p>
            I joined the world of software engineering via a full stack
            intensive bootcamp which focussed on the <b>MERN stack</b> as well
            as a couple of projects using <b>Python and Flask</b>
          </p>
          <p>
            {" "}
            I have so far worked in Scotland, Luxembourg, Spain and London.
          </p>
        </div>
      </div>

      <div className="skills">
        <h2 className="experience">Tech experience</h2>
        <div className="icons">
          <img className="tech_icon" alt="elixir" src={elixir} />

          <img className="tech_icon" alt="phoenix" src={phoenix} />

          <img className="tech_icon" alt="javascript" src={javascript} />

          <img className="tech_icon" alt="react" src={react} />

          <img className="tech_icon" alt="mongodb" src={mongodb} />

          <img className="tech_icon" alt="node" src={node} />

          <img className="tech_icon" alt="python" src={python} />

          <img className="tech_icon" alt="flask" src={flask} />

          <img className="tech_icon" alt="sass" src={sass} />

          <img className="tech_icon" alt="css" src={css} />
        </div>
      </div>
    </div>
  );
}

export default About;
