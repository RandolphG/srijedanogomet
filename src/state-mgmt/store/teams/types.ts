export interface ITeams {
  "team-1": Team;
  "team-2": Team;
}

export interface Team {
  id: string;
  title: string;
  players: string[];
  group: string;
}
