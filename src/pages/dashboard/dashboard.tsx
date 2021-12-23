import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addLeague, getDashboard, removeLeague } from "../../state-mgmt/store";
import "./styles/_dashboardStyles.scss";

/**
 * @description Dashboard page
 */
const Dashboard = () => {
  let navigate = useNavigate();
  const dashboard = useSelector(getDashboard);
  const [league, setLeagueName] = useState({ leagueId: "" });
  const dispatch = useDispatch();

  function handleAddLeague(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();

    dispatch(addLeague(league));
    setLeagueName({ leagueId: "" });
  }

  function handleDeleteLeague(id: any) {
    dispatch(removeLeague({ leagueId: id }));
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    setLeagueName({ ...league, [event.target.name]: event.target.value });
  }

  function handleLogout(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
  }

  return (
    <div className="dashboard">
      <div className="dashboard_container">
        <div className="dashboard_container_max">
          {dashboard.map((item, idx) => (
            <div className="dashboard_container_max_league" key={idx}>
              <div
                className="dashboard_container_max_league_name"
                onClick={() => {
                  navigate(`/${item}`);
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
          <button
            className="dashboard_container_max_button"
            onClick={handleLogout}
          >
            log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
