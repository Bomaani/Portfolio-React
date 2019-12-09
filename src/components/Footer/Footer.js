import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {

  render() { 
    return (
      <div className="Footer">
        <div className="FooterContainer">
        <span class="hire-Me">Hire me!</span><br />
        <Link to="/resume">Resume</Link>
        <Link href="https://github.com/Bomaani">Github</Link>
        <Link href="https://www.linkedin.com/in/brock-boutwell/">Linkedin</Link>
        </div>
      </div>
    );
  }
}

export default Footer;
