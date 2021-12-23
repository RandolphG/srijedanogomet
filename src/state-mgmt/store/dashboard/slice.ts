import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { reducers } from "./reducers";
import { Dashboard } from "./types";

const initState: Dashboard = ["srijeda-nogomet"];

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers,
});

export const { removeLeague, addLeague } = dashboardSlice.actions;

export default dashboardSlice.reducer;
