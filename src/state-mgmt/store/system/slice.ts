import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { ISystemState } from "../../../types/";

const initState: ISystemState = {
  admin: false,
  userName: "",
  status: "",
  token: "",
  name: "",
  showModal: true,
  showSignInModal: false,
  isLoggedIn: true,
  loggedInStatus: { userId: null, status: false, token: null },
};

export const systemSlice = createSlice({
  name: "system",
  initialState: initState as ISystemState,
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
