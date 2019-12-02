import React, { Component } from "react";
import "./Homepage.css";
import Projects from '../../components/Project/Project';
import About from '../../components/About/About';
import Intro from '../../components/Intro/Intro';

class Hompage extends Component {

  render() { 
    return (
      <div className="HomepageContainer">
        <Intro />
        <Projects />
        <About />
      </div>
    );
  }
}

export default Hompage;
