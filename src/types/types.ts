import { RouterState } from "connected-react-router";
import React, { ChangeEvent, FC, FormEvent, LazyExoticComponent } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Reducer } from "redux";
import { ActionType } from "typesafe-actions";
import { History } from "history";
import {
  requestCurrentUserActionSuccess,
  requestLoginAction,
  requestLoginActionFailure,
  requestLoginSuccessAction,
  rootReducer,
} from "../state-mgmt/store";

export interface IState {
  system: ISystemState;
  router: (
    history: History<RouterState<ISystemState>>
  ) => Reducer<RouterState<RouterState<ISystemState>>>;
}

export interface ISystemState {
  admin: Boolean;
  status: string;
  token: string;
  name: string;
  userName: string;
  showModal: TShowModal;
  showSignInModal: TShowSignInModal;
  isLoggedIn: boolean;
  loggedInStatus: ILoggedInStatus;
}

export interface ILoggedInStatus {
  userId: string | null;
  status: boolean;
  token: string | null;
}

export interface IUserInput {
  readonly username: string;
  readonly password: string;
}

export interface ICurrentUser {
  name: string;
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

export interface ISignInModalState {
  show: Boolean;
}

export interface IPrivateRoute {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | LazyExoticComponent<React.ComponentType<any>>;
  path: string;
}

export interface CustomRoute {
  path: string;
  name: string;
  component: FC<RouteComponentProps>;
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
