import React from "react";

import devmaps1 from "../images/devmaps1.png";
import howto1 from "../images/howto1.png";
import pizza4 from "../images/pizza4.png";
import cher2 from "../images/cher2.png";
import cbt1 from "../images/cbt1.png";
import dictionary1 from "../images/dictionary1.png";

import {
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiSass,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import { SiFlask, SiPostgresql, SiHeroku } from "react-icons/si";

function Projects() {
  return (
    <div className="projects">
      <h2 className="title">Projects</h2>
      <div className="project">
        <h3>HowToTube</h3>{" "}
        <a
          className="project__button"
          href="https://github.com/Selliott456/project-4"
        >
          Code
        </a>
        <div className="desktop-info">
          <div className="project__images-container">
            <img
              alt="how to tube"
              className="project__image"
              src={howto1}
            ></img>
          </div>
          <div className="project__blurb">
            <p>
              This was a group project completed in one week. It is a
              youtube-esque idea for self development
            </p>

            <p>
              I was responsible for setting up routes and creating the basic
              models on the backend for users and videos as well as creating the
              front end sign-up, login and home pages. I also styled the entire
              project.
            </p>
          </div>
        </div>
        <div className="project__tech">
          <div className="project__skill-badge">
            <DiReact size={40} color="#4c4b4b" />
            <p className="project__tech-name">React</p>
          </div>
          <div className="project__skill-badge">
            <DiPython size={40} color="#4c4b4b" />
            <p className="project__tech-name">Python</p>
          </div>
          <div className="project__skill-badge">
            <DiSass size={40} color="#4c4b4b" />
            <p className="project__tech-name">Sass</p>
          </div>
          <div className="project__skill-badge">
            <SiFlask size={40} color="#4c4b4b" />
            <p className="project__tech-name">Flask</p>
          </div>
          <div className="project__skill-badge">
            <SiPostgresql size={40} color="#4c4b4b" />
            <p className="project__tech-name">PostgreSQL</p>
          </div>
        </div>
      </div>
      <div className="project">
        <h3>Devs.map</h3>{" "}
        <a
          className="project__button"
          href="https://github.com/Selliott456/project-3"
        >
          Code
        </a>
        <div className="desktop-info">
          <div className="project__images-container">
            <img
              alt="devs dot map"
              className="project__image"
              src={devmaps1}
            ></img>
          </div>
          <div className="project__blurb">
            <p>
              This was a group project completed in one week. We designed this
              fullstack application as a mix of a travel blog and dating site
              for developers on the move to link up for collaborations and use
              our chat function to have conversations online.
            </p>
            <p>
              I was responsible for building the chatroom using socket.io and
              creating the basic layout of the pages on the frontend.
            </p>
          </div>
        </div>
        <div className="project__tech">
          <div className="project__skill-badge">
            <DiReact size={40} color="#4c4b4b" />
            <p className="project__tech-name">React</p>
          </div>
          <div className="project__skill-badge">
            <DiPython size={40} color="#4c4b4b" />
            <p className="project__tech-name">Python</p>
          </div>
          <div className="project__skill-badge">
            <DiSass size={40} color="#4c4b4b" />
            <p className="project__tech-name">Sass</p>
          </div>
          <div className="project__skill-badge">
            <DiNodejsSmall size={40} color="#4c4b4b" />
            <p className="project__tech-name">Node.js</p>
          </div>
          <div className="project__skill-badge">
            <DiMongodb size={40} color="#4c4b4b" />
            <p className="project__tech-name">MongoDB</p>
          </div>
          <div className="project__skill-badge">
            <SiHeroku size={40} color="#4c4b4b" />
            <p className="project__tech-name">Heroku</p>
          </div>
        </div>
      </div>
      <div className="project">
        <h3>You Want a Pizza Me?</h3>{" "}
        <a
          className="project__button"
          href="https://prodigresser.github.io/project-2/"
        >
          Code
        </a>
        <div className="desktop-info">
          <div className="project__images-container">
            <img
              alt="You want a pizza me"
              className="project__image"
              src={pizza4}
            ></img>
          </div>
          <div className="project__blurb">
            <p>
              This was a pair project completed in 48 hours. We used the Just
              Eat API and postcodes.io to create a marketable project which
              allowed users to look through restaurants in their area. The API
              allowed us to populate our pages with information such as
              cuisines, addresses, order details and ratings.
            </p>
          </div>
        </div>
        <div className="project__tech">
          <div className="project__skill-badge">
            <DiReact size={40} color="#4c4b4b" />
            <p className="project__tech-name">React</p>
          </div>
          <div className="project__skill-badge">
            <DiJsBadge size={40} color="#4c4b4b" />
            <p className="project__tech-name">JavaScript</p>
          </div>
          <div className="project__skill-badge">
            <DiCss3 size={40} color="#4c4b4b" />
            <p className="project__tech-name">CSS</p>
          </div>
        </div>
      </div>
      <div className="project">
        <h3>Voice Recognition Dictionary</h3>{" "}
        <a
          className="project__button"
          href="https://github.com/Selliott456/dictionary"
        >
          Code
        </a>
        <div className="desktop-info">
          <div className="project__images-container">
            <img
              alt="dictionary"
              className="project__image"
              id="dictionary"
              src={dictionary1}
            ></img>
          </div>
          <div className="project__blurb">
            <p>
              I built this app over the course of a few days in order to test
              out the Words API and a speech recognition module I found. It is
              supposed to be used on mobile devices
            </p>

            <p>
              The idea came from an issue I had when I was a teacher. We used to
              highlight spelling errors and it was up to the student to find the
              correct spelling in the dictionary. I became aware, however, that
              very often students would not know what the word began with so
              wanted to build something they could speak their words into.
            </p>

            <p>
              I know the colour-scheme would make your nose bleed but the idea
              was to make it appealing to children!
            </p>
          </div>
        </div>
        <div className="project__tech">
          <div className="project__skill-badge">
            <DiReact size={40} color="#4c4b4b" />
            <p className="project__tech-name">React</p>
          </div>
          <div className="project__skill-badge">
            <DiJsBadge size={40} color="#4c4b4b" />
            <p className="project__tech-name">JavaScript</p>
          </div>
          <div className="project__skill-badge">
            <DiCss3 size={40} color="#4c4b4b" />
            <p className="project__tech-name">CSS</p>
          </div>
        </div>
      </div>
      <div className="project">
        <h3>Voice Recognition Dictionary</h3>{" "}
        <a
          className="project__button"
          href="https://github.com/Selliott456/dictionary"
        >
          Code
        </a>
        <div className="desktop-info">
          <div className="project__images-container">
            <img alt="cher game" className="project__image" src={cher2}></img>
          </div>
          <div className="project__blurb">
            <p>
              This was a solo project completed in one week. It was my own
              diva-laden take on the famous Space Invaders . Play along and
              shoot CDs at the approaching clocks. Avoid the cannon balls from
              the USS Missouri - the set of one of the most iconic Cher videos
              of all time!
            </p>
          </div>
        </div>
        <div className="project__tech">
          <div className="project__skill-badge">
            <DiJsBadge size={40} color="#4c4b4b" />
            <p className="project__tech-name">JavaScript</p>
          </div>
          <div className="project__skill-badge">
            <DiHtml5 size={40} color="#4c4b4b" />
            <p className="project__tech-name">HTML</p>
          </div>
          <div className="project__skill-badge">
            <DiCss3 size={40} color="#4c4b4b" />
            <p className="project__tech-name">CSS</p>
          </div>
        </div>
      </div>
      <div className="project">
        <h3>Inverclyde CBT</h3>{" "}
        <a
          className="project__button"
          href="https://github.com/Selliott456/inverclydeCBT"
        >
          Code
        </a>
        <div className="desktop-info">
          <div className="project__images-container">
            <img
              alt="inveclyde CBT"
              className="project__image"
              src={cbt1}
            ></img>
          </div>
          <div className="project__blurb">
            <p>
              This was a paid project for a client that runs a cognitive
              behavioural therapy clinic in Inverclyde, Scotland. This took
              about a week and a half to complete as the client requested a
              total re-brand of their old website.
            </p>

            <p>
              I first gave the client a range of colour schemes to choose from
              and a variety of logo designs that I generated. The aforementioned
              look was then agreed upon and the project ran until completion
              with various moments where the client was asked to check that they
              were happy with wording/layout. This allowed the client to request
              design changes before they became major features in the final
              site.
            </p>
          </div>
        </div>
        <div className="project__tech">
          <div className="project__skill-badge">
            <DiReact size={40} color="#4c4b4b" />
            <p className="project__tech-name">React</p>
          </div>
          <div className="project__skill-badge">
            <DiJsBadge size={40} color="#4c4b4b" />
            <p className="project__tech-name">JavaScript</p>
          </div>
          <div className="project__skill-badge">
            <DiSass size={40} color="#4c4b4b" />
            <p className="project__tech-name">Sass</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
