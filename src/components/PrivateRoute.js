/* import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import * as blockstack from "blockstack";

export default class PrivateRoute extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { component: Component } = this.props;
    console.log("LOGGED IN", blockstack.isUserSignedIn());
    const routeComponent = blockstack.isUserSignedIn() ? (
      <Component {...this.props} />
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: this.props.location }
        }}
      />
    );
    return <Route {...this.props} component={routeComponent} />;
  }
}
 */

import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import * as blockstack from "blockstack";
import { AppContext } from "./AppProvider";

export default function PrivateRoute({ component: Component, ...rest }) {
  console.log(
    "USER SIGNED IN",
    blockstack.isUserSignedIn(),
    blockstack.isSignInPending()
  );
  if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn().then(function(userData) {
      console.log("USER DATA", userData);
      // TODO: call backend with userData.identityAddress as uid
      const { storeUserId } = useContext(AppContext);
      storeUserId(userData.identityAddress);
      window.location = window.location.origin;
    });
  }
  return (
    <Route
      {...rest}
      render={props =>
        true /* blockstack.isUserSignedIn() || blockstack.isSignInPending() */ ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
