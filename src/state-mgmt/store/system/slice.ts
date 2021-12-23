import { createSlice } from "@reduxjs/toolkit";
import { initState } from "./initialState";
import { reducers } from "./reducers";

export const systemSlice = createSlice({
  name: "system",
  initialState: initState,
  //@ts-ignore
  reducers,
});

export const {
  requestLoginAction,
  requestLoginSuccessAction,
  requestCurrentUserActionSuccess,
  requestLoginActionFailure,
  requestShowModalSuccess,
  requestShowSignInModalSuccess,
  requestSetLogin,
  requestSetUserNameAction,
  requestLogoutAction,
} = systemSlice.actions;

export default systemSlice.reducer;
