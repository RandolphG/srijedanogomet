import React, { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import { getLoggedInState } from "../../../state-mgmt/store";
import { IPrivateRoute } from "../../../types";

const PrivateRoute: FC<IPrivateRoute> = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const loggedIn = useSelector(getLoggedInState);

  /*
  const decodedToken = {
        userData: {
            isAdmin: false,
        },
    };

    if (decodedToken.userData.isAdmin) {
        history.push('/admin-panel');
    }
  */

  const renderComponent = useCallback(
    (props) => {
      return loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect from="/" to="/frontPage" />
      );
    },
    [Component]
  );

  return <Route {...rest} render={renderComponent} />;
};

export default PrivateRoute;
