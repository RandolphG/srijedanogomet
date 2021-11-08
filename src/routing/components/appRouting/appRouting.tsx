import React, { FC, Fragment, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { appRoutes } from "../../routes-path";
import { NotFound } from "../notFound";

/**
 * AppRouting
 * @constructor
 */
const AppRouting: FC = () => {
  /* redirect from app to "/app/frontpage" */
  const renderRootRedirect = () => <Redirect to="/frontPage" />;

  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path="/app" render={renderRootRedirect} />
          {appRoutes.map((route, idx) => {
            return (
              <Route
                key={`route-${route.name}-${idx}`}
                exact
                path={route.path}
                component={route.component}
              />
            );
          })}
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default AppRouting;
