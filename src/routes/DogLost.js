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
  sendLostTransaction = async dogId => {
    const response = await fetch(`http://35.225.159.118/professional`, {
      method: "POST",
      body: JSON.stringify({
        dogId: dogId,
        type: "lost",
        params: {
          senderId: "1DvH276tWksdjzFBQpNy8tTtmhnK5ESgNQ",
          location: "Gentofte",
          contact: "619482614",
          date: 100,
          comments: "Hello"
        }
      })
    });
    console.log("LOST RESPONSE", await response.json());
  };

  render() {
    const {
      match: { params }
    } = this.props;
    const dogParam = params.dogId;

    return (
      <div className="main">
        <span
          style={{}}
          onClick={() => {
            this.sendLostTransaction(dogParam);
          }}
        >
          Send lost transaction
        </span>
      </div>
    );
  }
}
