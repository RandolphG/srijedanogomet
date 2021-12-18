import { PayloadAction } from "@reduxjs/toolkit";
import {
  ICredentialsState,
  ICurrentUser,
  ILoggedInStatus,
  IModalState,
  ISignInModalState,
  ISystemState,
  ITeamId,
  ITeamState,
  IUserInput,
} from "../../../types/";

export const reducers = {
  requestLoginAction: (
    state: ISystemState,
    action: PayloadAction<IUserInput>
  ) => {},
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
  requestCurrentUserActionSuccess: (
    state: ISystemState,
    action: PayloadAction<ICurrentUser>
  ) => {
    return { ...state, name: action.payload.name };
  },
  requestLoginActionFailure: (
    state: ISystemState,
    action: PayloadAction<Error>
  ) => {},
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
  requestSetLogout: (state: ISystemState) => {
    return {
      ...state,
      loggedInStatus: { userId: null, status: false, token: null },
    };
  },
  requestSetName: (
    state: ISystemState,
    action: PayloadAction<ICredentialsState>
  ) => {
    return { ...state, userName: action.payload.credentials.userName };
  },
  requestAddTeam: (state: ISystemState, action: PayloadAction<ITeamState>) => {
    const { payload } = action;
    const teams = `board-${payload}`;

    return { ...state, teams };
  },
  requestRemoveTeam: (state: ISystemState, action: PayloadAction<ITeamId>) => {
    const { teamId } = action.payload;
    const newState = state;
    return newState.teams.filter((val) => val !== teamId);
  },
};
