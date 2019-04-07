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
          <Status title="owner" value={this.props.dog.owner} />
        </li>
        <li className={"dog-status-header"}>
          <Status
            title="age"
            value={String(Math.round(this.props.dog.age / 12) + " years")}
          />
        </li>
        <li className={"dog-status-header"}>
          <Status title="breed" value={this.props.dog.breed} />
        </li>
      </ul>
    );
  }
}
