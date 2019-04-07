import React, { Component } from "react";
import "./DogOptions.css";
import IosList from "react-ionicons/lib/IosList";
import IosWarning from "react-ionicons/lib/IosWarning";
import IosMedical from "react-ionicons/lib/IosMedical";
import IosPersonAdd from "react-ionicons/lib/IosPersonAdd";

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
      <div className="options-container">
        <div className="option-container">
          <div className="option-icon">
            <IosList fontSize="40px" color={"white"} />
          </div>
          <span className="option-title">{this.options[0].title}</span>
        </div>
        <div className="option-container">
          <div className="option-icon" style={{ margin: 5 }}>
            <IosWarning fontSize="30px" color={"red"} />
          </div>
          <span className="option-title">{this.options[1].title}</span>
        </div>
        <div className="option-container">
          <div className="option-icon" style={{ margin: 5 }}>
            <IosMedical fontSize="30px" color={"white"} />
          </div>
          <span className="option-title">{this.options[2].title}</span>
        </div>
        <div className="option-container">
          <div className="option-icon" style={{ margin: 5 }}>
            <IosPersonAdd fontSize="30px" color={"white"} />
          </div>
          <span className="option-title">{this.options[3].title}</span>
        </div>
      </div>
    );
  }
}
