import React, { Component } from "react";
import "./Main.css";
import Sidebar from "../components/Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import DogDetails from "./DogDetails";
import Owner from "./Owner";
import DogHistoric from "./DogHistoric";
import DogLost from "./DogLost";
import DogVaccines from "./DogVaccines";
import DogOwnership from "./DogOwnership";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className={"main-container"}>
          <div className={"sidebar-container"}>
            <Sidebar />
          </div>
          <div className={"content"}>
            <Route path="/dog/:dogId" component={DogDetails} />
            <Route path="/owner" component={Owner} />
          </div>
        </div>
      </div>
    );
  }
}
