import { PayloadAction } from "@reduxjs/toolkit";
import { Dashboard, DashboardLeagueID } from "./types";

export const reducers = {
  addLeague: (state: Dashboard, action: PayloadAction<DashboardLeagueID>) => {
    const { leagueId } = action.payload;

    return [...state, leagueId];
  },
  removeLeague: (
    state: Dashboard,
    action: PayloadAction<DashboardLeagueID>
  ) => {
    const { leagueId } = action.payload;
    console.log(`delete ${leagueId}`);

    return state.filter((val) => val !== leagueId);
  },
};
