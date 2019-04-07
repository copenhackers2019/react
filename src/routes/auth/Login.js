import React, { Component } from "react";
import logo from "../../logo_v4.svg";
import "../../App.css";
import * as blockstack from "blockstack";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  loginBlockStack = () => {
    if (blockstack.isUserSignedIn()) {
      console.log("HELLOOO");
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn().then(function(userData) {
        window.location = window.location.origin;
      });
    } else {
      blockstack.redirectToSignIn();
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            onClick={this.loginBlockStack}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign in
          </a>
        </header>
      </div>
    );
  }
}
