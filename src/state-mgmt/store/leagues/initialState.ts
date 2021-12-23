import { ILeagues } from "./types";

export const initialState: ILeagues = {
  activeLeague: undefined,
  leagues: {
    "srijeda-nogomet": {
      id: "srijeda-nogomet",
      teams: ["team-1", "team-2"],
      name: "Srijeda Nogomet",
    },
  },
};
