import React from "react";
import { Link } from "react-router-dom";
import "./styles/_dashboardStyles.scss";

const Dashboard = () => {
  const Buttons = () => (
    <div className="buttonContainers">
      <button className="buttonContainers__button">
        <Link className="buttonContainers__button_link" to="/">
          Sign Out
        </Link>
      </button>
      <button className="buttonContainers__button">
        <Link className="buttonContainers__button_link" to="/teamLineUp">
          Team Line-Up
        </Link>
      </button>
      <button className="buttonContainers__button">
        <Link className="buttonContainers__button_link" to="/matches">
          Match Statistics
        </Link>
      </button>
      <button className="buttonContainers__button">
        <Link className="buttonContainers__button_link" to="/leaderboard">
          Leaderboard
        </Link>
      </button>
    </div>
  );
  return (
    <div key="dashboard" className="dashboard">
      <div className="dashboardContainer">
        <div className="dashboardTitle">Dashboard</div>
        <Buttons />
      </div>
    </div>
  );
};

export default Dashboard;
