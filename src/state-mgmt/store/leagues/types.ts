export interface ILeagues {
  activeLeague: string | undefined;
  "srijeda-nogomet": Srijeda;
}

export interface Srijeda {
  id: string;
  teams: string[];
  name: string;
}
