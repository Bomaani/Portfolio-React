import React, { Component } from "react";
import Image from "../../images/profile.jpg";
import LIImage from '../../images/linkedin.svg';
import GHImage from '../../images/github.svg';

import "./Resume.scss";


class Resume extends Component {
  render() {
    return (
      <div className="ResumeContainer">
        <div class="resume-wrapper">
          <section class="profile section-padding">
            <div class="container">
              <div class="picture-resume-wrapper">
                <div class="picture-resume">
                  <span>
                    <img src={Image} alt="Brock Boutwell" />
                  </span>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="name-wrapper">
                <h1>
                  Brock <br />
                  Boutwell
                </h1>
              </div>
              
              <div class="clearfix"></div>
              <div class="contact-presentation">
                <p>
                  <span class="bold">Front End Developer </span> Aspiring to be
                  a Full Stack Developer
                </p>
              </div>

              <div class="contact-info clearfix">
                <ul class="list-titles">
                  <li>Call</li>
                  <li>Mail</li>
                  <li>Home</li>
                </ul>
                <ul class="list-content ">
                  <li>678-622-8075</li>
                  <li>BrockBoutwell@gmail.com</li>
                  <li>Asheville, North Carolina</li>
                </ul>
              </div>
              <div class="section-wrapper clearfix">
                <h3 class="section-title">Skills</h3>
                <ul className="SkillList">
                  <li class="skill-percentage">HTML / HTML5</li>
                  <li class="skill-percentage">CSS / CSS3 / SASS</li>
                  <li class="skill-percentage">Javascript / JQuery</li>
                  <li class="skill-percentage">React / NPM</li>
                  <li class="skill-percentage">Express / Mocha</li>
                  <li class="skill-percentage">Node.js / PostgreSQL</li>
                  <li class="skill-percentage">Jira / Slack / Git / Github</li>
                </ul>
              </div>
              <div class="contact-presentation">
                <p>
                  <span class="bold">Contact me!</span> If you like what you see
                  hit me up above or see what else I can do below!{" "}
                </p>
              </div>
              <div class="contact-social clearfix">
                <ul class="list-titles">
                  <li><img src={LIImage} alt="linkedin"/></li>
                  <li><img src={GHImage} alt="linkedin"/></li>
                </ul>
                <ul class="list-content">
                  <li>
                    <a href="https://www.linkedin.com/in/brock-boutwell/">linkedin/brock-boutwell/</a>
                  </li>
                  <li>
                    <a href="https://github.com/Bomaani">github.com/Bomaani</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section class="experience section-padding">
            <div class="container">
              <h3 class="experience-title">Experience</h3>

              <div class="experience-wrapper">
                <div class="company-wrapper clearfix">
                  <div class="experience-title">Epic Games</div>
                  <div class="location">Cary, NC</div>
                  <div class="time">Oct 2016 - July 2017</div>
                </div>

                <div class="job-wrapper clearfix">
                  <div class="experience-title">Web QA</div>
                  <div class="company-description">
                    <p>
                      - Implemented Full Smoke, Performance, and Mobile testing
                      for all of Epic Games active websites <br />
                      - Spent time Analyzing our process to make our testing
                      more efficient, streamlined, and more accurate.
                      <br />- Implemented Automation Testing and Manual Testing
                      methods.
                    </p>
                  </div>
                </div>

                <div class="company-wrapper clearfix">
                  <div class="experience-title">Pull-A-Part</div>
                  <div class="location">Atlanta, GA</div>
                  <div class="time">Sep 2015 - Sep 2016</div>
                </div>

                <div class="job-wrapper clearfix">
                  <div class="experience-title">Front End Developer</div>
                  <div class="company-description">
                    <p>
                      - Created and Designed a Mobile-first web experience with
                      new technologies like Bootstrap/HTML5/CSS3/JavaScript
                      <br />
                      - Tested and Created web pages daily to be fully
                      functional on all devices available.
                      <br />
                      - Helped Rebuild our front end for the client side
                      in-store systems to be more user friendly.
                      <br />- Created and sent out Email campaigns.
                    </p>
                  </div>
                </div>

                <div class="company-wrapper clearfix">
                  <div class="experience-title">Definition 6</div>
                  <div class="location">Atlanta, GA</div>
                  <div class="time">Sep 2014 - Sep 2015</div>
                </div>

                <div class="job-wrapper clearfix">
                  <div class="experience-title">Front End Developer</div>
                  <div class="company-description">
                    <p>
                      - Created Email Campaigns for clients like Barnes & Noble
                      College and Tensar. HTML/CSS 
                      <br />- Created Templates for use to
                      build out our emails faster and send them out faster.
                    </p>
                  </div>
                </div>
              </div>
            
              <div class="container">
                <h3 class="experience-title">Education & Awards</h3>
                <div class="company-wrapper clearfix">
                  <div class="experience-title">Thinkful</div>
                  <div class="location">Asheville, NC</div>
                  <div class="time">Aug 2019 - Dec 2019</div>
                </div>

                <div class="job-wrapper clearfix">
                  <div class="experience-title">Full Stack Immersion</div>
                  <div class="company-description">
                    <p>
                    - Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux, and algorithms & data structures. <br />
                    - Created and deployed mobile-first applications while learning new languages and frameworks by collaborating 20+ hours every week with an Industry Professional.
                    </p>
                  </div>
                </div>

                <div class="company-wrapper clearfix">
                  <div class="experience-title">Savannah College of Art & Design</div>
                  <div class="location">Savannah, GA</div>
                  <div class="time">Aug 2009 - May 2013</div>
                </div>

                <div class="job-wrapper clearfix">
                  <div class="experience-title">Interactive Development & Game Design</div>
                  <div class="company-description">
                    <p>
                      - Academic Honors 2009-2013, 3.7 Cumulative GPA<br />
                      - SCAD Entelechy 2012 - 1st “Best Pre-Rendered Game Environment” <br />
                      - SCAD Entelechy 2013 -  1st “Best Game in Show”

                    </p>
                  </div>
                </div>

                <div class="company-wrapper clearfix">
                  <div class="experience-title">Primetime Emmy Award</div>
                  <div class="location">Atlanta, GA</div>
                  <div class="time">July 2014</div>
                </div>

                <div class="job-wrapper clearfix">
                  <div class="experience-title">Interactive Development</div>
                  <div class="company-description">
                    <p>
                      - Game of Thrones Season 1-2 online viewers guide <br />
                      - Primarily organized HTML, CSS, and content for the user experience.
                    </p>
                  </div>
                </div>
              </div>

              <div class="section-wrapper clearfix">
                <h3 class="section-title">Hobbies</h3>
                <p>
                  When I am not programming, learning, or trying to keep up with
                  how fast the world of technology changes and evolves, you can
                  find me playing video games, listening to music, going to
                  shows, offroading in my old wrangler, or playing with my dogs
                  amongst other outdoor activities.
                </p>

                <p>
                  I also love to garden and keep my ever growing collection of
                  plants happy and healthy, even the sassy ones that don't like
                  to be moved, watered, or touched often.
                </p>
              </div>
            </div>
          </section>

          <div class="clearfix"></div>
        </div>
      </div>
    );
  }
}

export default Resume;
