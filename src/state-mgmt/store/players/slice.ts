import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { reducers } from "./reducers";
import { IPlayers } from "./types";

const initState: IPlayers = {
  players: {
    "player-1": {
      display: false,
      id: `player-1`,
      key: uuid(),
      team: "team-0",
      name: "Randolph Gordon",
      height: "183cm",
      tags: ["attacker", "defense", "power", "speed", "technique"],
      isInEditMode: false,
    },
    "player-2": {
      display: false,
      id: `player-2`,
      key: uuid(),
      team: "team-0",
      name: "Vedran",
      height: "173cm",
      tags: ["attacker", "defense", "power", "speed", "technique"],
      isInEditMode: false,
    },
  },
  tempInfo: {},
};

export const playersSlice = createSlice({
  name: "players",
  initialState: initState,
  reducers,
});

export const {} = playersSlice.actions;

export default playersSlice.reducer;
