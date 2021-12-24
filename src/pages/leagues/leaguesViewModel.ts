import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addLeague,
  getDashboard,
  removeLeague,
  requestSetActiveLeague,
} from "../../state-mgmt/store";

export const LeaguesViewModel = () => {
  let navigate = useNavigate();
  const dashboard = useSelector(getDashboard);
  const [league, setLeagueName] = useState({ leagueId: "" });
  const dispatch = useDispatch();

  /* add league */
  function handleAddLeague(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();

    dispatch(addLeague(league));
    setLeagueName({ leagueId: "" });
  }

  /* delete league */
  function handleDeleteLeague(id: string) {
    dispatch(removeLeague({ leagueId: id }));
  }

  function handleSetLeagueId(id: string) {
    dispatch(requestSetActiveLeague({ leagueId: id }));
  }

  /* handle input of league name */
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    setLeagueName({ ...league, [event.target.name]: event.target.value });
  }

  /* handle logout of user */
  function handleLogout(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    navigate("/");
  }

  return {
    league,
    navigate,
    dashboard,
    handleAddLeague,
    handleDeleteLeague,
    handleChange,
    handleLogout,
    handleSetLeagueId,
  };
};
