export interface ITeams {
  [key: string]: Team;
}

export interface Team {
  id: string;
  title: string;
  players: string[];
  group: string;
}
