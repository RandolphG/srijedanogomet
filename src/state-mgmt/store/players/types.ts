export interface IPlayers {
  players: Players;
  tempInfo: TempInfo;
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

export interface TempInfo {}
