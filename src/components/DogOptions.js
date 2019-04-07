import React, { Component } from "react";
import "./DogOptions.css";
import IosList from "react-ionicons/lib/IosList";
import IosWarning from "react-ionicons/lib/IosWarning";
import IosMedical from "react-ionicons/lib/IosMedical";
import IosPersonAdd from "react-ionicons/lib/IosPersonAdd";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { AppContext } from "./AppProvider";

export default class DogOptions extends Component {
  options = [
    {
      id: 0,
      title: "Historic",
      route: "/historic"
    },
    {
      id: 1,
      title: "Lost",
      route: "/lost"
    },
    {
      id: 2,
      title: "Vaccine",
      route: "/vaccine"
    },
    {
      id: 3,
      title: "Ownership",
      route: "/ownership"
    }
  ];
  render() {
    return (
      <AppContext.Consumer>
        {({ dogId }) => {
          console.log("DOG ID", dogId);

          return (
            <div className="options-container">
              <Link to={`/dog/${dogId}/historic`}>
                <div className="option-container">
                  <div className="option-icon">
                    <IosList fontSize="40px" color={"white"} />
                  </div>
                  <span className="option-title">{this.options[0].title}</span>
                </div>
              </Link>
              <Link to={`/dog/${dogId}/lost`}>
                <div className="option-container">
                  <div className="option-icon" style={{ margin: 5 }}>
                    <IosWarning fontSize="30px" color={"red"} />
                  </div>
                  <span className="option-title">{this.options[1].title}</span>
                </div>
              </Link>
              <Link to={`/dog/${dogId}/vaccines`}>
                <div className="option-container">
                  <div className="option-icon" style={{ margin: 5 }}>
                    <IosMedical fontSize="30px" color={"white"} />
                  </div>
                  <span className="option-title">{this.options[2].title}</span>
                </div>
              </Link>
              <Link to={`/dog/${dogId}/ownership`}>
                <div className="option-container">
                  <div className="option-icon" style={{ margin: 5 }}>
                    <IosPersonAdd fontSize="30px" color={"white"} />
                  </div>
                  <span className="option-title">{this.options[3].title}</span>
                </div>
              </Link>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
