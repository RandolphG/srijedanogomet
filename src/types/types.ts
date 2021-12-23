import { RouterState } from "connected-react-router";
import React, { ChangeEvent, FC, FormEvent, LazyExoticComponent } from "react";
import { Reducer } from "redux";
import { ActionType } from "typesafe-actions";
import { History } from "history";
import {
  IPlayers,
  ISystemState,
  ILeagues,
  Dashboard,
  ITeams,
  requestCurrentUserActionSuccess,
  requestLoginAction,
  requestLoginActionFailure,
  requestLoginSuccessAction,
  rootReducer,
} from "../state-mgmt/store";

export interface IState {
  system: ISystemState;
  players: IPlayers;
  teams: ITeams;
  leagues: ILeagues;
  dashboard: Dashboard;
  router: (
    history: History<RouterState<ISystemState>>
  ) => Reducer<RouterState<RouterState<ISystemState>>>;
}

export interface IInputField {
  credentials: { userName: string; email: string; password: string };
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  inputType: any;
  showPassword: () => void;
}

export interface IModalState {
  show: Boolean;
}

export interface ILoggedInState {
  isLoggedIn: boolean;
}

export interface ICredentialsState {
  credentials: {
    userName: string;
    email: string;
    password: string;
  };
}

export interface ITeamState {
  team: string;
}

export interface ITeamId {
  teamId: string;
}

export interface ISignInModalState {
  show: Boolean;
}

export interface IPrivateRoute {
  component:
    | React.ComponentType<any>
    | LazyExoticComponent<React.ComponentType<any>>;
  path: string;
}

export type TShowModal = Boolean;

export type TShowSignInModal = Boolean;

export type SourceActions =
  | typeof requestLoginAction
  | typeof requestLoginSuccessAction
  | typeof requestCurrentUserActionSuccess;

export type Action = ActionType<SourceActions>;

export type SystemActionsWithPayload =
  | typeof requestLoginAction
  | typeof requestLoginSuccessAction
  | typeof requestCurrentUserActionSuccess
  | typeof requestLoginActionFailure;

export type SystemActions = ActionType<SystemActionsWithPayload>;

export type finalActions = SystemActions;

export type RootState = ReturnType<typeof rootReducer>;
