import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as blockstack from "blockstack";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  BrowserRouter,
  Switch
} from "react-router-dom";
import Login from "./routes/auth/Login";
import Main from "./routes/Main";
import PrivateRoute from "./components/PrivateRoute";
import DogDetails from "./routes/DogDetails";
import Owner from "./routes/Owner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      greeting: "",
      state: "loggedout"
    };
  }

  loginBlockStack = () => {
    if (blockstack.isUserSignedIn()) {
      console.log("HELLOOO");
    }
    blockstack.redirectToSignIn();
  };

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  showProfile = person => {
    console.log("Person", person);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.state.state ===
            "loggedout" /* !blockstack.isUserSignedIn() */ && (
            <a
              className="App-link"
              onClick={this.loginBlockStack}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign in
            </a>
          )}
          {this.state.state === "logged" /* blockstack.isUserSignedIn() */ && (
            <div>Hello again!</div>
          )}
          {this.state.state ===
            "pending" /* blockstack.isSignInPending() */ && (
            <div>Waiting for verification</div>
          )}
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
    // }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
