import { PayloadAction } from "@reduxjs/toolkit";
import { ITeamId, ITeamState } from "../../../types/";
import { ISystemState } from "../system";

export const reducers = {
  requestAddTeam: (state: ISystemState, action: PayloadAction<ITeamState>) => {
    const { payload } = action;
    const teams = `team-${payload}`;

    return { ...state, teams };
  },
  requestRemoveTeam: (state: ISystemState, action: PayloadAction<ITeamId>) => {
    const { teamId } = action.payload;
    const newState = state;
    // return newState.teams.filter((val) => val !== teamId);
  },
};
