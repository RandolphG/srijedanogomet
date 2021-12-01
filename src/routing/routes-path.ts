import { lazy } from "react";
import { CustomRoute } from "../types/";

const ProtoType = lazy(() => import("../pages/protoType/prototype"));
const SignIn = lazy(() => import("../pages/protoType/signInSignUp/signIn"));
const SignUp = lazy(() => import("../pages/protoType/signInSignUp/signUp"));

export const PROTOTYPE_PATH = "/app/prototype";
export const SIGN_IN_PATH = "/signIn";
export const SIGN_UP_PATH = "/signUp";

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
    path: SIGN_IN_PATH,
    name: "SignIn",
    component: SignIn,
  },
  {
    path: SIGN_UP_PATH,
    name: "SignUp",
    component: SignUp,
  },
];
