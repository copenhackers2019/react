import React, { Component } from "react";
import "./DogDetails.css";
import DogStatus from "../components/DogStatus";
import DogOptions from "../components/DogOptions";

export default class DogDetails extends Component {
  dogs = [
    {
      id: 0,
      name: "Toby",
      img: "/dog.jpg"
    },
    {
      id: 1,
      name: "Yako",
      img: "/dog2.jpg"
    }
  ];
  render() {
    const {
      match: { params }
    } = this.props;
    const dog =
      params.dogId < this.dogs.length ? this.dogs[params.dogId] : null;
    return (
      <div className="dog-details-container">
        <img src={dog.img} className={"dog-details-image"} />
        <h1>{dog.name}</h1>
        <DogStatus />
        <DogOptions />
      </div>
    );
  }
}
