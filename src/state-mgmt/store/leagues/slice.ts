import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { ILeagues } from "./types";

const initState: ILeagues = {
  activeLeague: undefined,
  "srijeda-nogomet": {
    id: "srijeda-nogomet",
    teams: ["team-1", "team-2"],
    name: "Srijeda Nogomet",
  },
};

export const leaguesSlice = createSlice({
  name: "leagues",
  initialState: initState,
  reducers,
});

export const {} = leaguesSlice.actions;

export default leaguesSlice.reducer;
