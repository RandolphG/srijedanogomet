import React from "react";
import "./styles/_leaderboardStyles.scss";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const Buttons = () => (
    <div className="buttonContainers">
      <button className="buttonContainers__button">
        <Link className="buttonContainers__button_link" to="/dashboard">
          Dashboard
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
    </div>
  );
  return (
    <div key="leaderboard" className="leaderboard">
      <div className="leaderboardContainer">
        <div className="leaderboardTitle">leaderboard</div>
        <Buttons />
      </div>
    </div>
  );
};

export default Leaderboard;
