import { lazy } from "react";
import { CustomRoute } from "../types/";

// @ts-ignore
const FrontPage = lazy(() => import("../pages/frontPage"));

export const FRONT_PAGE_PATH = "/frontpage";

/**
 * app  routes
 */
export const appRoutes: CustomRoute[] = [
  {
    path: FRONT_PAGE_PATH,
    name: "FrontPage",
    component: FrontPage,
  },
];
