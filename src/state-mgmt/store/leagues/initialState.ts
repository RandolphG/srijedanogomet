import { ILeagues } from "./types";

export const initialState: ILeagues = {
  activeLeague: undefined,
  leagues: {
    "utorak-nogomet": {
      id: "utorak-nogomet",
      teams: ["team-1", "team-2"],
      name: "Utorak Nogomet",
    },
    "srijeda-nogomet": {
      id: "srijeda-nogomet",
      teams: ["team-1", "team-2"],
      name: "Srijeda Nogomet",
    },
    "cetvrtak-nogomet": {
      id: "cetvrtak-nogomet",
      teams: ["team-1", "team-2"],
      name: "cetvrtak Nogomet",
    },
    "petak-nogomet": {
      id: "petak-nogomet",
      teams: ["team-1", "team-2"],
      name: "Petak Nogomet",
    },
  },
};
