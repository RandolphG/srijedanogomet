import React, { FC, Fragment, Suspense } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
    SignIn,
    Navbar,
    UserAvatar,
    CookieStorage,
    ContextMenu, AnimatedLine,
} from "../components";
import {
  DashboardPage,
  AboutPage,
  FrontPage,
  BoardMembersPage,
} from "../pages";
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
                  <Route exact path="/" component={renderRootRedirect} />
                  <PrivateRoute path="/app" component={AppRouting} />
                  <Route path="/non-auth" component={NonAuthRoute} />
                  <Route
                    exact
                    path="/animatedLine"
                    component={AnimatedLine}
                  />
                  <Route exact path="/contextMenu" component={ContextMenu} />
                  <Route
                    exact
                    path="/dashboardPage"
                    component={DashboardPage}
                  />
                  <Route exact path="/aboutPage" component={AboutPage} />
                  <Route exact path="/frontPage" component={FrontPage} />
                  <Route path="/404" component={NotFound} />
                  <Redirect to="/404" />
                </Switch>
              )}
            />
            <Navbar />
            <UserAvatar />
            <SignIn />
            <CookieStorage />
          </AnimatePresence>
        </Suspense>
      </Router>
    </Fragment>
  );
};

export default AppRouter;
