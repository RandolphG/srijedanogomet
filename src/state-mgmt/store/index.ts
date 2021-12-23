import { finalActions, RootState } from "../../types";
import systemReducer from "./system/slice";
import playersReducer from "./players/slice";
import teamsReducer from "./teams/slice";
import leaguesReducer from "./leagues/slice";
import dashboardReducer from "./dashboard/slice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { doLoginEpic, ISystemState } from "./system";
import {
  connectRouter,
  routerMiddleware,
  RouterState, // @ts-ignore
} from "connected-react-router";

const epics = combineEpics(doLoginEpic);

//@ts-ignore
export const history = createBrowserHistory<RouterState<ISystemState>>();

export const rootReducer = combineReducers({
  router: connectRouter<RouterState<ISystemState>>(history),
  system: systemReducer,
  player: playersReducer,
  teams: teamsReducer,
  leagues: leaguesReducer,
  dashboard: dashboardReducer,
});

const epicMiddleware = createEpicMiddleware<
  finalActions, // input actions
  finalActions, // output actions
  RootState
>();

function configureAppStore(initialState?: any) {
  // configure middlewares
  const middlewares = [routerMiddleware(history), epicMiddleware];
  // create store
  return configureStore<RootState>({
    reducer: rootReducer,
    //@ts-ignore
    middleware: middlewares,
    preloadedState: initialState,
  });
}

export const store = configureAppStore();

export * from "./system";
export * from "./teams";
export * from "./players";
export * from "./leagues";
export * from "./dashboard";

epicMiddleware.run(epics);
