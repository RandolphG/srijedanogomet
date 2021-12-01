import React from "react";
import { Link } from "react-router-dom";
import "./styles/_matchesStyles.scss";

const Matches = () => {
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
        <Link className="buttonContainers__button_link" to="/leaderboard">
          Leaderboard
        </Link>
      </button>
    </div>
  );
  return (
    <div className="matches">
      <div className="matchesContainer">
        <div className="matchesTitle">Matches</div>
        <Buttons />
      </div>
    </div>
  );
};

export default Matches;
