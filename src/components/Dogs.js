import React, { Component } from "react";
import logo from "../logo.svg";
import "./Dogs.css";
import DogItem from "./DogItem";
import { Link } from "react-router-dom";
import { AppContext } from "./AppProvider";

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
      <AppContext.Consumer>
        {({ dogs, fetchDogs }) => {
          console.log("DOGS", dogs);
          if (dogs === undefined) fetchDogs();
          return (
            <ul className={"dogs-container"}>
              {dogs !== undefined &&
                dogs.dogs.map(dog => (
                  <li className={`dogs-items ${params === 0 ? "active" : ""}`}>
                    <Link to={`/dog/${dog}`} onClick={() => this.selectDog(0)}>
                      <DogItem image={"/dog.jpg"} name={dog} />
                    </Link>
                  </li>
                ))}
            </ul>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
