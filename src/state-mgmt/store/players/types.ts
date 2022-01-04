export interface IPlayers {
  players: Players;
  tempInfo: TempInfo;
}

export interface Players {
  [key: string]: Player;
}

export interface Player {
  id?: string;
  key?: string;
  userName: string;
  password?: string;
  email: string;
  height: string;
  team?: string;
  league: string;
  attendance: boolean;
  isInEditMode?: boolean;
}

export interface Types {
  [key: string]: string;
}

export interface IPlayerCredentials {
  userName: string;
  email: string;
  password: string;
}

export interface TempInfo {}
