import { PayloadAction } from "@reduxjs/toolkit";
import { IPlayerCredentials, IPlayerIsLoggedIn, IPlayers } from "./types";

export const reducers = {
  requestLogin: (state: IPlayers, action: PayloadAction<IPlayerIsLoggedIn>) => {
    const isLoggedIn = action.payload;
    return { ...state, isLoggedIn };
  },
  requestLogout: (state: IPlayers) => {
    const isLoggedIn = { userId: null, status: false, token: null };
    return { ...state, isLoggedIn };
  },
  requestPlayerUserName: (
    state: IPlayers,
    action: PayloadAction<IPlayerCredentials>
  ) => {
    const playerInfo = action.payload;
    return { ...state, userName: playerInfo.userName };
  },
};
