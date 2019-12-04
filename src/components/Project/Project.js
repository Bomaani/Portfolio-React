import React, { Component } from "react";
import "./Project.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../images/screenshot1.png';
import Image2 from '../../images/screenshot4.png';


class Project extends Component {

  render() { 
    return (
      <div>
      <h2 id="Projects">Projects</h2>
        <div className="container-Main">
            <section className="project-Container">
                <h3>PackRat</h3>
                <Carousel showThumbs='0'>
                <div>
                    <img src={Image1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Image1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Image1} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
                <a href="https://packrat-app.brockboutwell.now.sh/"><img className="project-IMG" alt="Packrat!" src={Image1}/></a>
                <div>
                    <span className="header-Name">Tech Used</span><br />
                    <p>HTML / HTML5, CSS / CSS3, React,<br /> Javascript, JQuery, Ajax,<br /> Express, Node, PostgreSQL</p>
                </div>
                <p className="project-Description">The goal of this project was to create an Full-Stack App from scratch. Create Collections to catalog all of the things you love. Happy Collecting!</p>
                <p>Live link: <a href="https://packrat-app.brockboutwell.now.sh/">Packrat</a></p>
                <p>Gitbuh Server Repo: <a href="https://github.com/Bomaani/PackRat-Server"><i className="g-Icon fab fa-github-square"></i></a></p>
                <p>Gitbuh Client Repo: <a href="https://github.com/Bomaani/PackRat-Client-React"><i className="g-Icon fab fa-github-square"></i></a></p>
            </section>
            <section className="project-Container">
                <h3>Minionese</h3>
                <a href="https://minionese-app.brockboutwell.now.sh/register"><img className="project-IMG" alt="Minionese!" src={Image2}/></a>
                <div>
                    <span className="header-Name">Tech Used</span><br />
                    <p>HTML / HTML5, CSS / CSS3, React,<br /> Javascript, JQuery, Ajax,<br /> Express, Node, PostgreSQL</p>
                </div>
                <p className="project-Description">Learn Minionese, based on a spaced repitition algorithm to help learn faster!</p>
                <p>Live link: <a href="https://minionese-app.brockboutwell.now.sh/register"><i className="g-Icon fas fa-power-off"></i></a></p>
                <p>Gitbuh Server Repo: <a href="https://github.com/Bomaani/minionese-learning-server"><i className="g-Icon fab fa-github-square"></i></a></p>
                <p>Gitbuh Client Repo: <a href="https://github.com/Bomaani/StevenB-Brock-Spaced-Rep-Client"><i className="g-Icon fab fa-github-square"></i></a></p>
            </section>
        </div>
        <div className="container-Main">
            <section className="project-Container">
                <h3>Nerd-Alert!</h3>
                <a href="https://thinkful-ei-gecko.github.io/Brock-QuizApp/"><img className="project-IMG" alt="Nerd-Alert!" src="./Images/nerdalertscreenshot.png"/></a>
                <div>
                    <span className="header-Name">Tech Used</span><br />
                    <p>HTML / HTML5, CSS / CSS3,<br /> Javascript, JQuery</p>
                </div>
                <p className="project-Description">This app allows a user is able to navigate through a set of questions and is given feedback depending on the outcome of the quiz. The user also has the ability to restart the quiz and try again.</p>
                <p>Live Github Pages link: <a href="https://thinkful-ei-gecko.github.io/Brock-QuizApp/"><i className="g-Icon fas fa-power-off"></i></a></p>
                <p>Gitbuh Repo: <a href="https://github.com/thinkful-ei-gecko/Brock-QuizApp"><i className="g-Icon fab fa-github-square"></i></a></p>
            </section>

            <section className="project-Container">
                <h3>Brockmark</h3>
                <a href="https://thinkful-ei-gecko.github.io/Brock-Bookmark-api/"><img className="project-IMG" alt="Brockmarks!" src="./Images/bookmarkscreenshot.png"/></a>
                <div>
                    <span className="header-Name">Tech Used</span><br />
                    <p>HTML / HTML5, CSS / CSS3,<br /> Javascript, JQuery, Ajax</p>
                </div>
                <p className="project-Description">This app is a simple Brockmark (bookmark) creator. Allows the user to add, delete, visit, and rate Brockmarks.</p>
                <p>Live link: <a href="https://thinkful-ei-gecko.github.io/Brock-Bookmark-api/">Brockmark</a></p>
                <p>Gitbuh Repo: <a href="https://github.com/thinkful-ei-gecko/Brock-Bookmark-api">Code</a></p>
            </section>
        </div>
      </div>
    );
  }
}

export default Project;
