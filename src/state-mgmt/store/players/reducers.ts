import { PayloadAction } from "@reduxjs/toolkit";
import { IPlayers, Player } from "./types";

export const reducers = {
  requestAddPlayer: (state: IPlayers, action: PayloadAction<Player>) => {
    const { userName, email, height, league } = action.payload;
    const player = {
      id: `player-${userName}`,
      key: userName,
      userName,
      email,
      height,
      league,
      isInEditMode: { status: false },
    };

    return {
      ...state,
      players: { ...state.players, [`${userName}`]: player },
    };
  },
};
