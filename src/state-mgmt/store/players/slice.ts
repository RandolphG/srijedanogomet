import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { reducers } from "./reducers";
import { IPlayers } from "./types";

const initialState: IPlayers = {
  players: {
    randi: {
      display: false,
      id: `randi`,
      key: uuid(),
      team: "team-2",
      name: "Randolph Gordon",
      height: "183cm",
      tags: ["attacker", "defense", "power", "speed", "technique"],
      isInEditMode: false,
    },
    vedran: {
      display: false,
      id: `vedran`,
      key: uuid(),
      team: "team-2",
      name: "Vedran",
      height: "173cm",
      tags: ["attacker", "defense", "power", "speed", "technique"],
      isInEditMode: false,
    },
  },
  tempInfo: {},
  isLoggedIn: { userId: undefined, status: false, token: undefined },
};

export const playersSlice = createSlice({
  name: "players",
  initialState, // @ts-ignore

  reducers,
});

export const {} = playersSlice.actions;

export default playersSlice.reducer;
