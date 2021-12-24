import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { reducers } from "./reducers";

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  //@ts-ignore
  reducers,
});

export const { requestRemoveTeam, requestAddTeam } = teamsSlice.actions;

export default teamsSlice.reducer;
