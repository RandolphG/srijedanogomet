import { createSelector } from "reselect";
import { IState } from "../../../types";

export const getPlayers = (state: IState) => {
  console.log(`player state`, state);
  return state.players;
};

export const getPlayer = createSelector(getPlayers, (players) => {
  return players.players;
});
