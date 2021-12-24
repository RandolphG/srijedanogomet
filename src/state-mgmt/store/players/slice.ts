import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { reducers } from "./reducers";

export const playersSlice = createSlice({
  name: "players",
  initialState, // @ts-ignore
  reducers,
});

export const { requestAddPlayer } = playersSlice.actions;

export default playersSlice.reducer;
