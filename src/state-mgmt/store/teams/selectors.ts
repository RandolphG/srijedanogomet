import { IState } from "../../../types";

export const getTeams = (state: IState) => {
  console.log(`teams state`, state);
  return state.system.teams;
};
