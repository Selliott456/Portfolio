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
            Hi, I'm Elliott. I work in Elixir/Phoenix and I love it. I have also
            worked commercially with the MERN stack and Python/Flask backends.
          </p>
          <p>
            Previous employers include{" "}
            <a href="https://breakroom.cc">Breakroom</a> and{" "}
            <a href="https://citymapper.com">Citymapper</a>.I can currently be
            found tinkering away with the code base at{" "}
            <a href="https://www.proterahealth.com/">
              Protera Health - which I love!
            </a>
          </p>
          <p>
            I have so far lived and worked in London, Spain, Luxmebourg and
            Nigeria. I am not afraid of challenges or adventures!
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
