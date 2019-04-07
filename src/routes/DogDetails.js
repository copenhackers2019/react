import React, { Component, useContext } from "react";
import "./DogDetails.css";
import DogStatus from "../components/DogStatus";
import DogOptions from "../components/DogOptions";
import { AppContext } from "../components/AppProvider";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import DogHistoric from "./DogHistoric";
import DogLost from "./DogLost";
import DogVaccines from "./DogVaccines";
import DogOwnership from "./DogOwnership";

export default class DogDetails extends Component {
  render() {
    const {
      match: { params }
    } = this.props;
    const dogParam = params.dogId;

    return (
      <AppContext.Consumer>
        {({ dog, dogId, fetchDogDetails }) => {
          if (dogId !== dogParam) {
            fetchDogDetails(dogParam);
          }
          console.log("DOG", dog);

          return (
            <div className="dog-details-container">
              <img src={"/dog2.jpg"} className={"dog-details-image"} />
              <h1>{dog.name}</h1>
              <DogStatus dog={dog} />
              <DogOptions dog={dog} />
              <div>
                <Route path="/dog/:dogId/historic" component={DogHistoric} />
                <Route path="/dog/:dogId/lost" component={DogLost} />
                <Route path="/dog/:dogId/vaccines" component={DogVaccines} />
                <Route path="/dog/:dogId/ownership" component={DogOwnership} />
              </div>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
