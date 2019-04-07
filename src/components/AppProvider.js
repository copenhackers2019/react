import React, { Component } from "react";

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  state = {
    uid: "",
    dog: "",
    dogId: "",
    historic: []
  };

  storeUserId = id => {
    this.setState({ uid: id });
  };

  fetchDogs = async term => {
    const response = await fetch(
      "http://35.225.159.118/owner/1DvH276tWksdjzFBQpNy8tTtmhnK5ESgNQ/dogs"
    );
    this.setState({
      dogs: await response.json()
    });
  };
  fetchDogDetails = async id => {
    const response = await fetch(`http://35.225.159.118/dog/${id}/info`);
    this.setState({
      dog: await response.json(),
      dogId: id
    });
  };
  fetchDogHistoric = async id => {
    const response = await fetch(`http://35.225.159.118/dog/${id}`);
    this.setState({
      dogId: id,
      historic: await response.json()
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          fetchDogs: this.fetchDogs,
          fetchDogDetails: this.fetchDogDetails,
          fetchDogHistoric: this.fetchDogHistoric,
          storeUserId: this.storeUserId
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
