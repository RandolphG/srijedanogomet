import React from "react";
import "./styles/_signInStyles.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignIn = () => {
  const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
  };

  const motionSettings = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
    },
  };

  const Buttons = () => (
    <div className="buttonContainers">
      <button className="buttonContainers__button">
        <Link className="buttonContainers__button_link" to="/">
          Cancel
        </Link>
      </button>
      <button className="buttonContainers__button">
        <Link className="buttonContainers__button_link" to="/dashboard">
          Proceed
        </Link>
      </button>
    </div>
  );
  return (
    <div className="signIn">
      <motion.div key="signUp" {...motionSettings} className="signInContainer">
        <div className="signInTitle">Sign In</div>
        <Buttons />
      </motion.div>
    </div>
  );
};

export default SignIn;
