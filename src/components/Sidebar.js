import React, { Component } from "react";
import logo from "../logo_v4.svg";
import "./Sidebar.css";
import Dogs from "./Dogs";
import * as blockstack from "blockstack";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"sidebar"}>
        <div className={"views"}>
          <img className={"sidebar-logo"} src={logo} alt="logo" />
          <p className={"name"}>Marc Ferreiro Aliberch</p>
          <Dogs />
        </div>
        <div className={"views"}>
          <a onClick={() => blockstack.signUserOut("/login")}>Log out</a>
        </div>
      </div>
    );
  }
}
