import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {

  render() { 
    return (
      <div className="Footer">
        <div className="FooterContainer">
        <span class="hire-Me">Hire me!</span><br />
        <Link href="mailto:brockboutwell@gmail.com"><i title="Email Me Here" class="contact-Icon fas fa-envelope"></i></Link>
        <Link href="https://github.com/Bomaani"><i title="Github Repo" class="contact-Icon fab fa-github"></i></Link>
        <Link href="https://www.linkedin.com/in/brock-boutwell/"><i title="LinkedIn" class="contact-Icon fab fa-linkedin"></i></Link>
        <Link href="/Files/BoutwellBrock2018Resume.pdf"><i title="Download Resume" class="contact-Icon fas fa-file"></i></Link> 
        </div>
      </div>
    );
  }
}

export default Footer;
