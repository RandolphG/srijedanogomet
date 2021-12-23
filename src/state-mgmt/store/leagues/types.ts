export interface ILeagues {
  activeLeague: string | undefined;
  leagues: Leagues;
}

export interface Leagues {
  [key: string]: League;
}

export type League = {
  id: string;
  name: string;
  teams: string[];
};
