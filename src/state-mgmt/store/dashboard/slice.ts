import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { reducers } from "./reducers";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  //@ts-ignore
  reducers,
});

export const { removeLeague, addLeague } = dashboardSlice.actions;

export default dashboardSlice.reducer;
