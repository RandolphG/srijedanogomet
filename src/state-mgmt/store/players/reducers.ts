import { PayloadAction } from "@reduxjs/toolkit";
import { IPlayers, Player } from "./types";

export const reducers = {
  requestAddPlayer: (state: IPlayers, action: PayloadAction<Player>) => {
    console.log(`PAYLOAD -->`, action.payload);
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

    console.log(`PLAYER -->`, player);

    return {
      ...state,
      players: { ...state.players, [`${userName}`]: player },
    };
  },
};
