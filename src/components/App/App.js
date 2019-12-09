import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
//import Footer from "../Footer/Footer";
import Homepage from "../../routes/Homepage/Homepage";
import Resume from "../../routes/Resume/Resume";
import NotFoundRoute from "../../routes/NotFoundRoute/NotFoundRoute";

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path={"/"} component={Homepage} />
            <Route exact path={"/Resume"} component={Resume} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}