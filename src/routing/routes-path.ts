import { lazy } from "react";
import { CustomRoute } from "../types/";

const ProtoType = lazy(() => import("../pages/protoType/prototype"));

const GettingStarted = lazy(
  () => import("../pages/protoType/gettingStarted/gettingStarted")
);

const Standings = lazy(
  () => import("../components/common/standings/standings")
);

const Choose = lazy(() => import("../components/common/choose/choose"));

export const PROTOTYPE_PATH = "/prototype";
export const GETTING_STARTED_PATH = "/gettingStarted";
export const CHOOSE_PATH = "/choose";
export const STANDINGS_PATH = "/standings";

/**
 * Application routes
 */
export const appRoutes: CustomRoute[] = [
  {
    path: PROTOTYPE_PATH,
    name: "Prototype",
    component: ProtoType,
  },
  {
    path: GETTING_STARTED_PATH,
    name: "GettingStarted",
    component: GettingStarted,
  },
  {
    path: STANDINGS_PATH,
    name: "Standings",
    component: Standings,
  },
  {
    path: CHOOSE_PATH,
    name: "Choose",
    component: Choose,
  },
];
