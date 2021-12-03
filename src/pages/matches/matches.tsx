import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/_matchesStyles.scss";

const Matches = () => {
  const Buttons = () => (
    <div className="matchesButtonContainers">
      <button className="matchesButtonContainers__button">
        <Link className="matchesButtonContainers__button_link" to="/dashboard">
          Dashboard
        </Link>
      </button>
      <button className="matchesButtonContainers__button">
        <Link className="matchesButtonContainers__button_link" to="/teamLineUp">
          Team Line-Up
        </Link>
      </button>
      <button className="matchesButtonContainers__button">
        <Link className="matchesButtonContainers__button_link" to="/matches">
          Match Statistics
        </Link>
      </button>
      <button className="matchesButtonContainers__button">
        <Link
          className="matchesButtonContainers__button_link"
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
    <div className="matches">
      <motion.div
        key="matches"
        {...motionSettings}
        className="matchesContainer"
      >
        <div className="matchesTitle">SRIJEDA LEAGUE</div>
        <div className="matchesTitle">WEEK 12</div>
        <div className="matchesTitle">MATCH PREVIEW</div>
        <div className="matchesTitle">OPTIONS</div>
        <div className="matchesTitle">LIST OF STATS</div>
        <Buttons />
      </motion.div>
    </div>
  );
};

export default Matches;
