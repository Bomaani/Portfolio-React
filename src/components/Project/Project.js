import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Project.css";

class Project extends Component {

  render() { 
    return (
      <div>
      <h2 id="Projects">Projects</h2>
        <div className="container-Main">
            <section className="project-Container">
                <h3>PackRat</h3>
                <Link target="_blank" href="https://packrat-app.brockboutwell.now.sh/"><img className="project-IMG" alt="Packrat!" src="./Images/screenshot1.png"/></Link>
                <div>
                    <span className="header-Name">Tech Used</span><br />
                    <i className="tech-Icon fab fa-html5"></i>
                    <i className="tech-Icon fab fa-css3-alt"></i> 
                    <i className="tech-Icon fab fa-js-square"></i>
                    <img className="ui-icon-jquery" alt="JQuery" src="./Images/hiclipart.com-id_bojcw.png"/>
                    <img className="ui-icon-jquery" alt="Ajax" src="./Images/ajax.svg"/>
                </div>
                <p className="project-Description">Create Collections to catalog all of the things you love. Happy Collecting!</p>
                <p>Live link: <Link target="_blank" href="https://packrat-app.brockboutwell.now.sh/"><i className="g-Icon fas fa-power-off"></i></Link></p>
                <p>Gitbuh Server Repo: <Link target="_blank" href="https://github.com/Bomaani/PackRat-Server"><i className="g-Icon fab fa-github-square"></i></Link></p>
                <p>Gitbuh Client Repo: <Link target="_blank" href="https://github.com/Bomaani/PackRat-Client-React"><i className="g-Icon fab fa-github-square"></i></Link></p>
            </section>
            <section className="project-Container">
                <h3>Minionese</h3>
                <Link target="_blank" href="https://minionese-app.brockboutwell.now.sh/register"><img className="project-IMG" alt="Packrat!" src="./Images/screenshot4.png"/></Link>
                <div>
                    <span className="header-Name">Tech Used</span><br />
                    <i className="tech-Icon fab fa-html5"></i>
                    <i className="tech-Icon fab fa-css3-alt"></i> 
                    <i className="tech-Icon fab fa-js-square"></i>
                    <img className="ui-icon-jquery" alt="JQuery" src="./Images/hiclipart.com-id_bojcw.png"/>
                    <img className="ui-icon-jquery" alt="Ajax" src="./Images/ajax.svg"/>
                </div>
                <p className="project-Description">Learn Minionese, based on Link spaced repitition algortihm to help learn faster!</p>
                <p>Live link: <Link target="_blank" href="https://minionese-app.brockboutwell.now.sh/register"><i className="g-Icon fas fa-power-off"></i></Link></p>
                <p>Gitbuh Server Repo: <Link target="_blank" href="https://github.com/Bomaani/minionese-learning-server"><i className="g-Icon fab fa-github-square"></i></Link></p>
                <p>Gitbuh Client Repo: <Link target="_blank" href="https://github.com/Bomaani/StevenB-Brock-Spaced-Rep-Client"><i className="g-Icon fab fa-github-square"></i></Link></p>
            </section>
        </div>
        <div className="container-Main">
            <section className="project-Container">
                <h3>Nerd-Alert!</h3>
                <Link target="_blank" href="https://thinkful-ei-gecko.github.io/Brock-QuizApp/"><img className="project-IMG" alt="Nerd-Alert!" src="./Images/nerdalertscreenshot.png"/></Link>
                <div>
                    <span className="header-Name">Tech Used</span><br />
                    <i className="tech-Icon fab fa-html5"></i>
                    <i className="tech-Icon fab fa-css3-alt"></i> 
                    <i className="tech-Icon fab fa-js-square"></i>
                    <img className="ui-icon-jquery" alt="JQuery" src="./Images/hiclipart.com-id_bojcw.png"/>
                </div>
                <p className="project-Description">This app allows Link user is able to navigate through Link set of questions and is given feedback depending on the outcome of the quiz. The user also has the ability to restart the quiz and try again.</p>
                <p>Live Github Pages link: <Link target="_blank" href="https://thinkful-ei-gecko.github.io/Brock-QuizApp/"><i className="g-Icon fas fa-power-off"></i></Link></p>
                <p>Gitbuh Repo: <Link target="_blank" href="https://github.com/thinkful-ei-gecko/Brock-QuizApp"><i className="g-Icon fab fa-github-square"></i></Link></p>
            </section>

            <section className="project-Container">
                <h3>Brockmark</h3>
                <Link target="_blank" href="https://thinkful-ei-gecko.github.io/Brock-Bookmark-api/"><img className="project-IMG" alt="Brockmarks!" src="./Images/bookmarkscreenshot.png"/></Link>
                <div>
                    <span className="header-Name">Tech Used</span><br />
                    <i className="tech-Icon fab fa-html5"></i>
                    <i className="tech-Icon fab fa-css3-alt"></i> 
                    <i className="tech-Icon fab fa-js-square"></i>
                    <img className="ui-icon-jquery" alt="JQuery" src="./Images/hiclipart.com-id_bojcw.png"/>
                    <img className="ui-icon-jquery" alt="Ajax" src="./Images/ajax.svg"/>
                </div>
                <p className="project-Description">This app is Link simple Brockmark (bookmark) creator. Allows the user to add, delete, visit, and rate Brockmarks.</p>
                <p>Live Github Pages link: <Link target="_blank" href="https://thinkful-ei-gecko.github.io/Brock-Bookmark-api/"><i className="g-Icon fas fa-power-off"></i></Link></p>
                <p>Gitbuh Repo: <Link target="_blank" href="https://github.com/thinkful-ei-gecko/Brock-Bookmark-api"><i className="g-Icon fab fa-github-square"></i></Link></p>
            </section>
        </div>
      </div>
    );
  }
}

export default Project;
