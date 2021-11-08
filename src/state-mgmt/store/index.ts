import { finalActions, ISystemState, RootState } from "../../types";
import systemReducer from "./system/slice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { doLoginEpic } from "./system";
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

epicMiddleware.run(epics);
