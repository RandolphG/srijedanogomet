import React, { FC, Fragment, Suspense } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AppRouting, NonAuthRoute, NotFound, PrivateRoute } from "./components";

/**
 * application router
 * @returns {JSX.Element}
 * @constructor
 */
const AppRouter: FC = () => {
  const renderRootRedirect = () => <Redirect to="/app" />;

  return (
    <Fragment>
      <Router>
        <Suspense fallback={<></>}>
          <AnimatePresence exitBeforeEnter>
            <Route
              render={({ location }) => (
                <Switch location={location} key={location.key}>
                  <Route path="/non-auth" component={NonAuthRoute} />
                  <Route path="/404" component={NotFound} />
                  <PrivateRoute path="/app" component={AppRouting} />
                  <Route exact path="/" component={renderRootRedirect} />
                </Switch>
              )}
            />
          </AnimatePresence>
        </Suspense>
      </Router>
    </Fragment>
  );
};

export default AppRouter;
