import { ISystemState } from "./types";

export const initState: ISystemState = {
  admin: false,
  userName: "",
  status: "",
  token: "",
  name: "",
  isLoggedIn: true,
  loggedInStatus: { userId: null, status: false, token: null },
};
