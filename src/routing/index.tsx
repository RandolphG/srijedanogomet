import { AnimatePresence } from "framer-motion";
import React, { FC, Suspense } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import {
  Dashboard,
  Home,
  NotFound,
  Profile,
  Leagues,
  Registration,
  LineUp,
  SignIn,
} from "../pages";
import { PrivateRoute, PublicRoute } from "./helper";

/*A route object has the same properties as a <Route>
element. The `children` is just an array of child routes.*/
let index: RouteObject[] = [
  {
    path: "/",
    element: (
      <PublicRoute>
        <Home />
      </PublicRoute>
    ),
  },
  {
    path: "home",
    element: (
      <PublicRoute>
        <Home />
      </PublicRoute>
    ),
  },
  {
    path: "registration",
    element: (
      <PublicRoute>
        <Registration />
      </PublicRoute>
    ),
  },
  {
    path: "signIn",
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Leagues /> },
      {
        path: "/dashboard:id",
        element: <LineUp />,
      },
      {
        path: "/dashboard/:id/profile/:id",
        element: <Profile />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
];

/**
 * application router
 * @returns {JSX.Element}
 * @constructor
 */
const AppRouter: FC = () => {
  let element = useRoutes(index);

  return (
    <Suspense fallback={<></>}>
      <AnimatePresence exitBeforeEnter initial={false}>
        {element}
      </AnimatePresence>
    </Suspense>
  );
};

export default AppRouter;
