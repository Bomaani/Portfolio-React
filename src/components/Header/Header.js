import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {

  render() { 
    return (
      <div className="Header">
        <div className="HeaderContainer">
          <Link to="/">
            <p className="Link">Home</p>
          </Link>
          <Link to="#Projects">
            <p className="Link">Projects</p>
          </Link>
          <Link to="/Resume">
            <p className="Link">Resume</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
