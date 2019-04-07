import React, { Component } from "react";
import logo from "../logo.svg";
import "./DogStatus.css";
import DogItem from "./DogItem";
import Status from "./Status";

export default class DogStatus extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={"dog-status-container"}>
        <li className={"dog-status-header"}>
          <Status title="state" value="owned" />
        </li>
        <li className={"dog-status-header"}>
          <Status title="age" value="4 years" />
        </li>
        <li className={"dog-status-header"}>
          <Status title="breed" value="labrador" />
        </li>
      </ul>
    );
  }
}
