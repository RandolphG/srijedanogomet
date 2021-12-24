import { ILeagues } from "./types";

export const initialState: ILeagues = {
  activeLeague: { leagueId: "" },
  leagues: {
    "utorak-nogomet": {
      id: "utorak-nogomet",
      teams: ["team-2"],
      name: "Utorak Nogomet",
    },
    "srijeda-nogomet": {
      id: "srijeda-nogomet",
      teams: ["team-1"],
      name: "Srijeda Nogomet",
    },
    "cetvrtak-nogomet": {
      id: "cetvrtak-nogomet",
      teams: ["team-3"],
      name: "Cetvrtak Nogomet",
    },
    "petak-nogomet": {
      id: "petak-nogomet",
      teams: ["team-4"],
      name: "Petak Nogomet",
    },
  },
};
