import { PayloadAction } from "@reduxjs/toolkit";
import { IModalState, ISignInModalState } from "../../../types/";
import { IPlayerCredentials } from "../players";
import {
  ICurrentUser,
  ILoggedInStatus,
  ISystemState,
  IUserInput,
} from "./types";

export const reducers = {
  requestLoginAction: (
    state: ISystemState,
    action: PayloadAction<IUserInput>
  ) => {
    const isLoggedIn = action.payload;
    return { ...state, isLoggedIn };
  },
  requestLoginSuccessAction: (
    state: ISystemState,
    action: PayloadAction<ISystemState>
  ) => {
    const { admin, status, token } = action.payload;

    return {
      ...state,
      admin,
      status,
      token,
    };
  },
  requestLoginActionFailure: (
    state: ISystemState,
    action: PayloadAction<Error>
  ) => {},
  requestLogoutAction: (state: ISystemState) => {
    return {
      ...state,
      loggedInStatus: { userId: null, status: false, token: null },
    };
  },
  requestCurrentUserActionSuccess: (
    state: ISystemState,
    action: PayloadAction<ICurrentUser>
  ) => {
    return { ...state, name: action.payload.name };
  },
  requestShowModalSuccess: (state: any, action: PayloadAction<IModalState>) => {
    return { ...state, showModal: action.payload.show };
  },
  requestShowSignInModalSuccess: (
    state: ISystemState,
    action: PayloadAction<ISignInModalState>
  ) => {
    return { ...state, showSignInModal: action.payload.show };
  },
  requestSetLogin: (
    state: ISystemState,
    action: PayloadAction<ILoggedInStatus>
  ) => {
    return { ...state, loggedInStatus: action.payload };
  },
  requestSetUserNameAction: (
    state: ISystemState,
    action: PayloadAction<IPlayerCredentials>
  ) => {
    const playerInfo = action.payload;
    return { ...state, userName: playerInfo.userName };
  },
};
