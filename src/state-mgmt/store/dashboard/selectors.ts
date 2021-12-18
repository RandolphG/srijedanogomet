import { IState } from "../../../types";

export const getDashboard = (state: IState) => {
  console.log(`dashboard state`, state);
  return state.dashboard;
};
