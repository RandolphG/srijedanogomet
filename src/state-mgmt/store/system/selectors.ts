import { createSelector } from "reselect";
import { IState } from "../../../types";

const selectSystemState = (state: IState) => {
  console.log(`selector state`, state);
  return state;
};

/* modal state */
export const selectShowModal = createSelector(selectSystemState, (state) => {
  return state.system.showModal;
});

/* loggedIn state */
export const getLoggedInState = createSelector(
  selectSystemState,
  (state) => state.system.isLoggedIn
);

/* SignIn state */
export const getSignInModalState = createSelector(
  selectSystemState,
  (state) => {
    return state.system.showSignInModal;
  }
);
