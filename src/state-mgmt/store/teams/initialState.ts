import { ITeams } from "./types";

export const initialState: ITeams = {
  "team-1": {
    id: "team-1",
    title: "Team-A",
    players: [
      "randi",
      "marija",
      "pavao",
      "teslim",
      "rido",
      "vedran",
      "chris",
      "darko",
      "kreso",
      "dominick",
      "filip",
      "sokre",
    ],
    group: "srijeda-nogomet",
  },
  "team-2": {
    id: "team-2",
    title: "Team-2",
    players: ["victor", "charles", "suzie"],
    group: "srijeda-nogomet",
  },
};
