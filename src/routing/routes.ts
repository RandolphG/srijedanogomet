import { lazy } from "react";
const ProtoType = lazy(() => import("../pages/protoType/prototype"));
const SignIn = lazy(() => import("../pages/signIn/signIn"));

export const PROTOTYPE_PATH = "/app/prototype";
export const SIGN_IN_PATH = "/signIn";

/**
 *  Routes
 */
export const appRoutes: any[] = [
  {
    path: PROTOTYPE_PATH,
    name: "Prototype",
    component: ProtoType,
  },
  {
    path: SIGN_IN_PATH,
    name: "SignIn",
    component: SignIn,
  },
];
