import { createSelector } from "reselect";
import { IState } from "../../../types";

export const selectSystemState = (state: IState) => {
  console.log(`selector state`, state);
  return state;
};

/* loggedIn state */
export const getLoggedInState = createSelector(
  selectSystemState,
  (state) => state.system.isLoggedIn
);
