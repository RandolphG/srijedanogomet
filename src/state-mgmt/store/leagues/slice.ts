import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { reducers } from "./reducers";

export const leaguesSlice = createSlice({
  name: "leagues",
  initialState,
  //@ts-ignore
  reducers,
});

export const {
  requestAddLeagueDetails,
  requestAddTeamToLeague,
  requestDeleteTeamFromLeague,
  requestRemoveLeague,
  requestSetActiveLeague,
} = leaguesSlice.actions;

export default leaguesSlice.reducer;
