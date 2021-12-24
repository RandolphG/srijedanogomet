import React, { FC } from "react";
import { LeaguesViewModel } from "./leaguesViewModel";

/**
 * Leagues
 */
const Leagues: FC = () => {
  const {
    navigate,
    league,
    handleAddLeague,
    handleDeleteLeague,
    handleChange,
    handleLogout,
    dashboard,
    handleSetLeagueId,
  } = LeaguesViewModel();

  return (
    <div style={{ border: "purple 5px solid", width: "100%", height: "100%" }}>
      {dashboard.map((item, idx) => (
        <div className="dashboard_container_max_league" key={idx}>
          <div
            className="dashboard_container_max_league_name"
            onClick={() => {
              handleSetLeagueId(item);
            }}
          >
            {item}
          </div>
          <div
            className="dashboard_container_max_league_deleteBtn"
            onClick={() => handleDeleteLeague(item)}
          >
            Delete
          </div>
        </div>
      ))}
      <input
        className="dashboard_container_max_input"
        value={league.leagueId}
        onChange={handleChange}
        type="text"
        name="leagueId"
        id="leagueId"
        placeholder="enter league name"
      />
      <button
        className="dashboard_container_max_button"
        onClick={handleAddLeague}
      >
        add league
      </button>
      <button className="dashboard_container_max_button" onClick={handleLogout}>
        log out
      </button>
    </div>
  );
};

export default Leagues;
