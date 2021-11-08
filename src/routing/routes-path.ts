import { lazy } from "react";
import { CustomRoute } from "../types/";

// @ts-ignore
const FrontPage = lazy(() => import("../pages/frontPage"));
// @ts-ignore
const AboutPage = lazy(() => import("../pages/aboutPage"));

export const FRONT_PAGE_PATH = "/frontpage";
export const ABOUT_PAGE_PATH = "/aboutpage";

/**
 * app  routes
 */
export const appRoutes: CustomRoute[] = [
  {
    path: FRONT_PAGE_PATH,
    name: "FrontPage",
    component: FrontPage,
  },
  {
    path: ABOUT_PAGE_PATH,
    name: "AboutPage",
    component: AboutPage,
  },
];
