import { ITeams } from "./types";

export const initialState: ITeams = {
  "team-1": {
    id: "Team-1",
    title: "Team-1",
    players: ["randi", "pavao", "teslim", "rido", "vedran", "chris"],
    group: "srijeda-nogomet",
  },
  "team-2": {
    id: "Team-2",
    title: "Team-2",
    players: ["randi", "maria"],
    group: "srijeda-nogomet",
  },
};
