import { IState } from "../../../types";

export const getLeagues = (state: IState) => {
  console.log(`leagues state`, state);
  return state.leagues;
};
