import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { ITeams } from "./types";

const initialState: ITeams = {
  "team-1": {
    id: "list-0",
    title: "planning",
    players: ["player-1", "player-2"],
    group: "srijeda-nogomet",
  },
  "team-2": {
    id: "list-1",
    title: "in progress",
    players: ["player-1", "player-2"],
    group: "srijeda-nogomet",
  },
};
export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers,
});

export const {} = teamsSlice.actions;

export default teamsSlice.reducer;
