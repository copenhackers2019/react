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

export default class DogLost extends Component {
  render() {
    return <div className="main">Lost</div>;
  }
}
