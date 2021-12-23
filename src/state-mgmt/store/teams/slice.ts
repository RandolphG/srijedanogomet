import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { ITeams } from "./types";

const initialState: ITeams = {
  "team-1": {
    id: "Team-1",
    title: "Team-1",
    players: ["william", "andrea"],
    group: "srijeda-nogomet",
  },
  "team-2": {
    id: "Team-2",
    title: "Team-2",
    players: ["randi", "maria"],
    group: "srijeda-nogomet",
  },
};
export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  //@ts-ignore
  reducers,
});

export const { requestRemoveTeam, requestAddTeam } = teamsSlice.actions;

export default teamsSlice.reducer;
