import React, { Component } from "react";
import logo from "../logo.svg";
import "./DogItem.css";

export default class DogItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"dog-item"}>
        <div className={"dog-image-container"}>
          <img src={this.props.image} alt="logo" className={"dog-image"} />
        </div>
        <div className={"dog-info"}>
          <div className={"dog-name"}>
            <span>{this.props.name}</span>
          </div>
          <div className={"dog-details"}>
            <span>{this.props.name}</span>
          </div>
        </div>
      </div>
    );
  }
}
