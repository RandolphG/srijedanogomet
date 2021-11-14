import { lazy } from "react";
import { CustomRoute } from "../types/";

// @ts-ignore
const GlitchEffect = lazy(() => import("../components/common/glitchEffect"));

export const GLITCH_EFFECT_PATH = "/twitch";

/**
 * app  routes
 */
export const appRoutes: CustomRoute[] = [
  {
    path: GLITCH_EFFECT_PATH,
    name: "GlitchEffect",
    component: GlitchEffect,
  },
];
