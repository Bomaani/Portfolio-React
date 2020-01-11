import React, { Component } from "react";
import "./Project.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../images/screenshot1.png";
import Image2 from "../../images/screenshotReg.png";
import Image3 from "../../images/screenshotItem.png";

import Groop1 from "../../images/groop1.png";
import Groop2 from "../../images/groop2.png";
import Groop3 from "../../images/groop3.png";


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
        <a href="https://grooplist.com/"><h2>Groop</h2></a>
          <section className="project-Container">
          <Carousel className="CarouselBoxMobile" showThumbs="false">
              <div>
                <img src={Groop1} alt="Groop!" />
              </div>
              <div>
                <img src={Groop2} alt="Groop!" />
              </div>
              <div>
                <img src={Groop3} alt="Groop!" />
              </div>
            </Carousel>
            <div className="ContainerRight">
              <div>
                <p className="header-Name">Tech Used</p>
                <br />
                <p>
                  HTML, SCSS, CSS, React, Context,
                  <br /> Javascript, JQuery, Ajax,
                  <br /> Express, Node, PostgreSQL,
                  <br /> Heroku, Ziet
                </p>
              </div>
              <p className="project-Description">
                The goal of this collaborative group project was to create an
                Full-Stack App from scratch. Create groops and assign tasks to
                members in the groops! Utilize our email notification system and receive emails whenever tasks or groops are updated. Use this to manage events,
                plan a family vacation, or use it for your self to keep track of your personal progress.
              </p>
              <p>
                Live link: <a href="https://grooplist.com/">Grooplist.com</a>
              </p>
              <p>
                Github Server Repo:{" "}
                <a href="https://github.com/quasarwei/groop-api">
                  Server-Side Code
                </a>
              </p>
              <p>
                Github Client Repo:{" "}
                <a href="https://github.com/joeyjr95/groop-client">
                  Client Side Code
                </a>
              </p>
            </div>
            <Carousel className="CarouselBox" showThumbs="false">
              <div>
                <img src={Groop1} alt="Groop!" />
              </div>
              <div>
                <img src={Groop2} alt="Groop!" />
              </div>
              <div>
                <img src={Groop3} alt="Groop!" />
              </div>
            </Carousel>
          </section>
          <a href="https://packrat-app.brockboutwell.now.sh/">
            <h2>PackRat</h2>
          </a>
          <section className="project-Container">
            <Carousel
              dynamicHeight="true"
              className="CarouselBoxTop"
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
            <div className="ContainerRight">
              <div>
                <p className="header-Name">Tech Used</p>
                <br />
                <p>
                  HTML / HTML5, CSS / CSS3, React,
                  <br /> Javascript, JQuery, JSX,
                  <br /> Express, Node, PostgreSQL,
                  <br /> Heroku, Ziet
                </p>
              </div>
              <p className="project-Description">
                The goal of this project was to create a Full-Stack App from
                scratch. Ever wanted a way to catalog something you have been colleting for 20 years and have no idea how to catalog? Well this is perfect, create collections, add items into them and keep track of everything you have! Create Collections to catalog all of the things you
                love. Happy Collecting!
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
            </div>
          </section>
          <a href="https://minionese-app.brockboutwell.now.sh/register">
              <h2>Minionese</h2>
            </a>
          <section className="project-Container">
          <Carousel
              dynamicHeight="true"
              className="CarouselBoxMobile"
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
            <div className="ContainerRight">
              <div>
                <p className="header-Name">Tech Used</p>
                <br />
                <p>
                  HTML, CSS, JSX, React, Context,
                  <br /> Javascript, JQuery, Spaced Repition Algorithm,
                  <br /> Express, Node, PostgreSQL
                  <br /> Heroku, Ziet
                </p>
              </div>
              <p className="project-Description">
              The minionese learning app is a project created by Steven Bull and Brock Boutwell. The project centers around the learning of the coveted 'banana language' of the minions. The server uses a special algorithm in order to increase the retention and learning execution of users. If an answer is incorrect the word gets moved to the next word, however if it is correct, the word gets pushed back x amount of spaces. This ensures that before moving on to new and exciting lexicons, the words are committed to memory through repetition.
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
            </div>
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
          </section>
        </div>
        <div className="container-Main">
        <a href="https://thinkful-ei-gecko.github.io/Brock-QuizApp/">
              <h2>Nerd-Alert!</h2>
            </a>
          <section className="project-Container">
            <a href="https://thinkful-ei-gecko.github.io/Brock-QuizApp/">
              <img
                className="project-IMG-Mobile"
                alt="Nerd-Alert!"
                src={NerdAlertImage}
              />
            </a>
            <a href="https://thinkful-ei-gecko.github.io/Brock-QuizApp/">
              <img
                className="project-IMG"
                alt="Nerd-Alert!"
                src={NerdAlertImage}
              />
            </a>
            <div className="ContainerRight">
              <div>
                <p className="header-Name">Tech Used</p>
                <br />
                <p>
                  HTML / HTML5, CSS,
                  <br /> Javascript, JQuery
                </p>
              </div>
              <p className="project-Description">
                This app allows a user to navigate through a set of questions
                and is given feedback depending on the outcome of the quiz. The
                user also has the ability to restart the quiz and try again.
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
            </div>
          </section>
          <a href="https://thinkful-ei-gecko.github.io/Brock-Bookmark-api/"><h2>Brockmark</h2></a>
          <section className="project-Container">
            <a href="https://thinkful-ei-gecko.github.io/Brock-Bookmark-api/">
              <img
                className="project-IMG-Mobile"
                alt="Brockmarks!"
                src={BrockmarkImage}
              />
            </a>
            <div className="ContainerRight">
            <div>
              <p className="header-Name">Tech Used</p>
              <br />
              <p>
                HTML / HTML5, CSS / CSS3,
                <br /> Javascript, JQuery, Ajax
              </p>
            </div>
            <p className="project-Description">
              This app is a simple Brockmark (bookmark) creator. Allows the user
              to add, delete, visit, and rate Brockmarks of your favorite sites so you can keep them all in one convenient location.
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
            </div>
            <a href="https://thinkful-ei-gecko.github.io/Brock-Bookmark-api/">
              <img
                className="project-IMG"
                alt="Brockmarks!"
                src={BrockmarkImage}
              />
            </a>
          </section>
          
        </div>
      </div>
    );
  }
}

export default Project;
