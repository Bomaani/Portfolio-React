import React, { Component } from "react";
import "./Project.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../images/screenshot1.png";
import Image2 from "../../images/screenshotReg.png";
import Image3 from "../../images/screenshotItem.png";

import NerdAlertImage from "../../images/nerdalertscreenshot.png";
import MinionImage1 from "../../images/screenshotkk4.png";
import MinionImage2 from "../../images/scrrenshot2.png";
import MinionImage3 from "../../images/screenshot3.png";
import MinionImage4 from "../../images/screenshot5.png";
import BrockmarkImage from "../../images/bookmarkscreenshot.png";

class Project extends Component {
  render() {
    return (
      <div>
        <div className="container-Main">
          <section className="project-Container">
          <a href="https://packrat-app.brockboutwell.now.sh/"><h3>PackRat</h3></a>
            <Carousel
              dynamicHeight="true"
              className="CarouselBox"
              showThumbs="false"
            >
              <div>
                <img src={Image1} alt="Packrat!" />
              </div>
              <div>
                <img src={Image2} alt="Packrat!" />
              </div>
              <div>
                <img src={Image3} alt="Packrat!" />
              </div>
            </Carousel>
            <div>
              <span className="header-Name">Tech Used</span>
              <br />
              <p>
                HTML / HTML5, CSS / CSS3, React,
                <br /> Javascript, JQuery, Ajax,
                <br /> Express, Node, PostgreSQL
              </p>
            </div>
            <p className="project-Description">
              The goal of this project was to create a Full-Stack App from
              scratch. Create Collections to catalog all of the things you love.
              Happy Collecting!
            </p>
            <p>
              Live link:{" "}
              <a href="https://packrat-app.brockboutwell.now.sh/">Packrat</a>
            </p>
            <p>
              Github Server Repo:{" "}
              <a href="https://github.com/Bomaani/PackRat-Server">
                Server-Side Code
              </a>
            </p>
            <p>
              Github Client Repo:{" "}
              <a href="https://github.com/Bomaani/PackRat-Client-React">
                Client-Side Code
              </a>
            </p>
          </section>
          <section className="project-Container">
          <a href="https://minionese-app.brockboutwell.now.sh/register"><h3>Minionese</h3></a>
            <Carousel
              dynamicHeight="true"
              className="CarouselBox"
              showThumbs="false"
            >
              <div>
                <img src={MinionImage2} alt="Minionese!" />
              </div>
              <div>
                <img src={MinionImage1} alt="Minionese!" />
              </div>
              <div>
                <img src={MinionImage3} alt="Minionese!" />
              </div>
              <div>
                <img src={MinionImage4} alt="Minionese!" />
              </div>
            </Carousel>
            <div>
              <span className="header-Name">Tech Used</span>
              <br />
              <p>
                HTML / HTML5, CSS / CSS3, React,
                <br /> Javascript, JQuery, Ajax,
                <br /> Express, Node, PostgreSQL
              </p>
            </div>
            <p className="project-Description">
              Learn Minionese, based on a spaced repitition algorithm to help
              learn faster!
            </p>
            <p>
              Live link:{" "}
              <a href="https://minionese-app.brockboutwell.now.sh/register">
                Minionese
              </a>
            </p>
            <p>
              Github Server Repo:{" "}
              <a href="https://github.com/Bomaani/minionese-learning-server">
                Server-Side Code
              </a>
            </p>
            <p>
              Github Client Repo:{" "}
              <a href="https://github.com/Bomaani/StevenB-Brock-Spaced-Rep-Client">
                Client-Side Code
              </a>
            </p>
          </section>
          {/* <section className="project-Container">
            <h3>Groop</h3>
            <Carousel className="CarouselBox" showThumbs="false">
              <div>
                <img src={Image1} alt="Groop!" />
              </div>
              <div>
                <img src={Image1} alt="Groop!" />
              </div>
              <div>
                <img src={Image1} alt="Groop!" />
              </div>
            </Carousel>
            <div>
              <span className="header-Name">Tech Used</span>
              <br />
              <p>
                HTML / HTML5, CSS / CSS3, React,
                <br /> Javascript, JQuery, Ajax,
                <br /> Express, Node, PostgreSQL
              </p>
            </div>
            <p className="project-Description">
              The goal of this collaborative group project was to create an Full-Stack App from
              scratch. Create groops and assign tasks to members in the groops! Use this to manage events or simply planning a family vacation.
            </p>
            <p>
              Live link:{" "}
              <a href="https://groop-app.now.sh/">Groop</a>
            </p>
            <p>
              Github Server Repo:{" "}
              <a href="https://github.com/Bomaani/PackRat-Server">
                <i className="g-Icon fab fa-github-square"></i>
              </a>
            </p>
            <p>
              Github Client Repo:{" "}
              <a href="https://github.com/Bomaani/PackRat-Client-React">
                <i className="g-Icon fab fa-github-square"></i>
              </a>
            </p>
          </section> */}
        </div>
        <div className="container-Main">
          <section className="project-Container">
            <a href="https://thinkful-ei-gecko.github.io/Brock-QuizApp/">
              <h3>Nerd-Alert!</h3>
            </a>
            <a href="https://thinkful-ei-gecko.github.io/Brock-QuizApp/">
              <img
                className="project-IMG"
                alt="Nerd-Alert!"
                src={NerdAlertImage}
              />
            </a>
            <div>
              <span className="header-Name">Tech Used</span>
              <br />
              <p>
                HTML / HTML5, CSS / CSS3,
                <br /> Javascript, JQuery
              </p>
            </div>
            <p className="project-Description">
              This app allows a user to navigate through a set of
              questions and is given feedback depending on the outcome of the
              quiz. The user also has the ability to restart the quiz and try
              again.
            </p>
            <p>
              Live Github Pages link:{" "}
              <a href="https://thinkful-ei-gecko.github.io/Brock-QuizApp/">
                Nerd-Alert!
              </a>
            </p>
            <p>
              Github Repo:{" "}
              <a href="https://github.com/thinkful-ei-gecko/Brock-QuizApp">
                Code
              </a>
            </p>
          </section>

          <section className="project-Container">
            <h3>Brockmark</h3>
            <a href="https://thinkful-ei-gecko.github.io/Brock-Bookmark-api/">
              <img
                className="project-IMG"
                alt="Brockmarks!"
                src={BrockmarkImage}
              />
            </a>
            <div>
              <span className="header-Name">Tech Used</span>
              <br />
              <p>
                HTML / HTML5, CSS / CSS3,
                <br /> Javascript, JQuery, Ajax
              </p>
            </div>
            <p className="project-Description">
              This app is a simple Brockmark (bookmark) creator. Allows the user
              to add, delete, visit, and rate Brockmarks.
            </p>
            <p>
              Live link:{" "}
              <a href="https://thinkful-ei-gecko.github.io/Brock-Bookmark-api/">
                Brockmark
              </a>
            </p>
            <p>
              Github Repo:{" "}
              <a href="https://github.com/thinkful-ei-gecko/Brock-Bookmark-api">
                Code
              </a>
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default Project;
