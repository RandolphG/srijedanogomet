import { DashboardLeagueID } from "../dashboard";

export interface ILeagues {
  activeLeague: DashboardLeagueID;
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
