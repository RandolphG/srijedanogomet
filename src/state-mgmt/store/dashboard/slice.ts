import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { Dashboard } from "./types";

const initState: Dashboard = ["srijeda-nogomet"];

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initState,
  reducers,
});

export const {} = dashboardSlice.actions;

export default dashboardSlice.reducer;
