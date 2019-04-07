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
import { AppContext } from "../components/AppProvider";

export default class DogHistoric extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      match: { params }
    } = this.props;
    const dogParam = params.dogId;
    return (
      <AppContext.Consumer>
        {({ dogId, historic, fetchDogHistoric }) => {
          if (dogId !== dogParam || historic === null) {
            console.log("DOG PARAM HISTORIC", dogParam);

            fetchDogHistoric(dogParam);
          }
          console.log("HISTORIC", historic);

          return (
            <div className="main">
              <p>{JSON.stringify(historic)}</p>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
