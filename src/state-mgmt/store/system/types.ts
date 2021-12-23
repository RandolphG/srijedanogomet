export interface ISystemState {
  admin: Boolean;
  status: string;
  token: string;
  name: string;
  userName: string;
  isLoggedIn: boolean;
  loggedInStatus: ILoggedInStatus;
}

export interface ILoggedInStatus {
  userId: string | null;
  status: boolean;
  token: string | null;
}

export interface IUserInput {
  isLoggedIn: {
    userId: string | undefined;
    status: boolean;
    token: string | undefined;
  };
}

export interface ICurrentUser {
  name: string;
}
