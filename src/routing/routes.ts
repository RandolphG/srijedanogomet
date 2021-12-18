import { lazy } from "react";
const Registration = lazy(() => import("../pages/registration/registration"));

export const REGISTRATION_PATH = "/registration";

/**
 *  Routes
 */
export const appRoutes: any[] = [
  {
    path: REGISTRATION_PATH,
    name: "Registration",
    component: Registration,
  },
];
