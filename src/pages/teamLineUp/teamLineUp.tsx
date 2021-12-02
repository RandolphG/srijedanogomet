import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/_teamLineUpStyles.scss";

const TeamLineUp = () => {
  const Buttons = () => (
    <div className="buttonContainers">
      <button className="buttonContainers__button">
        <Link className="buttonContainers__button_link" to="/dashboard">
          Dashboard
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

  const ease = [0.6, -0.05, 0.01, 0.99];
  const duration = 1.0;
  const transition = {
    duration,
    ease,
  };

  const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
  };

  const motionSettings = {
    initial: {
      opacity: 0,
      x: "-50vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: springTransition,
    },
    exit: {
      opacity: 0,
      x: "50vw",
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
