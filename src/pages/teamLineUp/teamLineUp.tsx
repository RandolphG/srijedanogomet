import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/_teamLineUpStyles.scss";

const TeamLineUp = () => {
  const Buttons = () => (
    <div className="teamLineUpButtonContainers">
      <button className="teamLineUpButtonContainers__button">
        <Link
          className="teamLineUpButtonContainers__button_link"
          to="/dashboard"
        >
          Dashboard
        </Link>
      </button>
      <button className="teamLineUpButtonContainers__button">
        <Link
          className="teamLineUpButtonContainers__button_link"
          to="/teamLineUp"
        >
          Team Line-Up
        </Link>
      </button>
      <button className="teamLineUpButtonContainers__button">
        <Link className="teamLineUpButtonContainers__button_link" to="/matches">
          Match Statistics
        </Link>
      </button>
      <button className="teamLineUpButtonContainers__button">
        <Link
          className="teamLineUpButtonContainers__button_link"
          to="/leaderboard"
        >
          Leaderboard
        </Link>
      </button>
    </div>
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
    <div className="teamLineUp">
      <motion.div
        key="teamLineUp"
        {...motionSettings}
        className="teamLineUpContainer"
      >
        <div className="teamLineUpTitle">Team Lineup</div>
        <Buttons />
      </motion.div>
    </div>
  );
};

export default TeamLineUp;
