import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { ISystemState } from "../../../types/";

const initState: ISystemState = {
  admin: false,
  userName: "",
  status: "",
  token: "",
  name: "",
  isLoggedIn: true,
  loggedInStatus: { userId: null, status: false, token: null },
  teams: ["team-0"],
};

export const systemSlice = createSlice({
  name: "system",
  initialState: initState,
  // @ts-ignore

  reducers,
});

export const {
  requestLoginAction,
  requestLoginSuccessAction,
  requestCurrentUserActionSuccess,
  requestLoginActionFailure,
  requestShowModalSuccess,
  requestShowSignInModalSuccess,
  requestSetName,
  requestSetLogout,
  requestSetLogin,
} = systemSlice.actions;

export default systemSlice.reducer;
