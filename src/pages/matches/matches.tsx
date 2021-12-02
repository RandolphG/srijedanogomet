import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/_matchesStyles.scss";

const Matches = () => {
  const ease = [0.6, -0.05, 0.01, 0.99];
  const duration = 1.0;
  const transition = {
    duration,
    ease,
  };

  const animationSettings = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition,
    },
    exit: { opacity: 0, transition },
  };

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
      <motion.div className="matchesContainer">
        <div key="matchesTitle" {...animationSettings} className="matchesTitle">
          Matches
        </div>
        <Buttons />
      </motion.div>
    </div>
  );
};

export default Matches;
