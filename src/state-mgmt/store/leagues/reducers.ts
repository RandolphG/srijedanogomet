import { PayloadAction } from "@reduxjs/toolkit";
import { DashboardLeagueID } from "../dashboard";
import { ILeagues } from "./types";

export const reducers = {
  requestAddTeamToLeague: (
    state: ILeagues,
    action: PayloadAction<DashboardLeagueID>
  ) => {
    // const { board: boardID, id } = action.payload;
    // const newListID = `list-${id}`;
    // const board = state[boardID.activeBoard];
    // board.lists = [...board.lists, newListID];
  },
  requestDeleteTeamFromLeague: (
    state: ILeagues,
    action: PayloadAction<DashboardLeagueID>
  ) => {
    // const { listID, board: boardID } = action.payload;
    // const board = state[boardID.activeBoard];
    // const lists = board.lists;
    // const newLists = lists.filter((id) => id !== listID);
    // board.lists = newLists;
  },
  requestAddLeagueDetails: (
    state: ILeagues,
    action: PayloadAction<DashboardLeagueID>
  ) => {
    // const { title, id } = action.payload;
    // const newID = `board-${id}`;
    /*  const newBoard = {
      id: newID,
      lists: [],
      title,
    };*/
    // return { ...state, [newID]: newBoard };
  },
  requestRemoveLeague: (
    state: ILeagues,
    action: PayloadAction<DashboardLeagueID>
  ) => {
    // const { leagueId } = action.payload;
    // const newState = state;
    // delete newState[leagueId];
    // return newState;
  },
  requestSetActiveLeague: (
    state: ILeagues,
    action: PayloadAction<DashboardLeagueID>
  ) => {
    return { ...state, activeLeague: action.payload };
  },
};
