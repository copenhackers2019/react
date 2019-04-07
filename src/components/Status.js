import React, { Component } from "react";
import logo from "../logo.svg";
import "./Status.css";
import DogItem from "./DogItem";

export default class Status extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"status-container"}>
        <div className={"status-title"}>{this.props.title}</div>
        <div className={"status-value"}>{this.props.value}</div>
      </div>
    );
  }
}
