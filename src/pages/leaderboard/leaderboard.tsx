import React, { Fragment } from "react";
import "./styles/_leaderboardStyles.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Leaderboard = () => {
  const Buttons = () => (
    <div className="leaderboardButtonContainers">
      <button className="leaderboardButtonContainers__button">
        <Link
          className="leaderboardButtonContainers__button_link"
          to="/dashboard"
        >
          Dashboard
        </Link>
      </button>
      <button className="leaderboardButtonContainers__button">
        <Link
          className="leaderboardButtonContainers__button_link"
          to="/teamLineUp"
        >
          Team Line-Up
        </Link>
      </button>
      <button className="leaderboardButtonContainers__button">
        <Link
          className="leaderboardButtonContainers__button_link"
          to="/matches"
        >
          Match Statistics
        </Link>
      </button>
      <button className="leaderboardButtonContainers__button">
        <Link
          className="leaderboardButtonContainers__button_link"
          to="/leaderboard"
        >
          Leaderboard
        </Link>
      </button>
    </div>
  );

  const playerList = [
    { position: "defense", name: "mario berdic", goals: 16, assists: 16 },
    { position: "midfielder", name: "mario berdic", goals: 11, assists: 9 },
    { position: "midfielder", name: "mario berdic", goals: 11, assists: 9 },
    { position: "striker", name: "mario berdic", goals: 7, assists: 3 },
    { position: "striker", name: "mario berdic", goals: 6, assists: 3 },
    { position: "defense", name: "mario berdic", goals: 5, assists: 3 },
    { position: "goalkeeper", name: "mario berdic", goals: 4, assists: 3 },
    { position: "goalkeeper", name: "mario berdic", goals: 3, assists: 3 },
  ];

  const PlayerList = () => (
    <Fragment>
      {playerList.map((player, idx) => (
        <div key={idx} className="leaderboardContainer_list_element">
          <div>{player.position}</div>
          <div>{player.name}</div>
          <div>{player.goals}</div>
          <div>{player.assists}</div>
        </div>
      ))}
    </Fragment>
  );

  const ease = [0.6, -0.05, 0.01, 0.99];
  const duration = 1.0;
  const transition = {
    duration,
    ease,
  };

  const motionSettings = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div key="leaderboard" className="leaderboard">
      <motion.div
        key="leaderboard"
        {...motionSettings}
        className="leaderboardContainer"
      >
        <div className="leaderboardTitle">MOST GOALS</div>
        <div>2022/23</div>
        <div className="leaderboardContainer_preview">PLAYER PREVIEW</div>
        <div className="leaderboardContainer_list">
          <PlayerList />
        </div>
        <Buttons />
      </motion.div>
    </div>
  );
};

export default Leaderboard;
