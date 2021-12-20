export interface IPlayers {
  players: Players;
  tempInfo: TempInfo;
  isLoggedIn: IPlayerIsLoggedIn;
}

export interface Players {
  [key: string]: Player;
}

export interface Player {
  display: boolean;
  id: string;
  key: string;
  team: string;
  name: string;
  height: string;
  tags: string[];
  isInEditMode: boolean;
}

export interface Types {
  [key: string]: string;
}

export interface IPlayerIsLoggedIn {
  userId: string | undefined;
  status: boolean;
  token: string | undefined;
}

export interface IPlayerCredentials {
  userName: string;
  email: string;
  password: string;
}

export interface TempInfo {}
