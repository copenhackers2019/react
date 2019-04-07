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

import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import * as blockstack from "blockstack";

export default function PrivateRoute({ component: Component, ...rest }) {
  console.log("USER SIGNED IN", blockstack.isUserSignedIn());
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
