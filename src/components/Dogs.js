import React, { Component } from "react";
import logo from "../logo.svg";
import "./Dogs.css";
import DogItem from "./DogItem";
import { Link } from "react-router-dom";

export default class Dogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1
    };
  }

  selectDog = dog => {
    this.setState({ selected: dog });
  };

  render() {
    const params = this.state.selected;
    console.log("PARAMS", this.props.location);
    return (
      <ul className={"dogs-container"}>
        <li className={`dogs-items ${params === 0 ? "active" : ""}`}>
          <Link to="/dog/0" onClick={() => this.selectDog(0)}>
            <DogItem image={"/dog.jpg"} name={"Toby"} />
          </Link>
        </li>
        <li className={`dogs-items ${params === 1 ? "active" : ""}`}>
          <Link to="/dog/1" onClick={() => this.selectDog(1)}>
            <DogItem image={"/dog2.jpg"} name={"Yako"} />
          </Link>
        </li>
      </ul>
    );
  }
}
