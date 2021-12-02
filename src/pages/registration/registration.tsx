import { motion } from "framer-motion";
import React from "react";
import "./styles/_registrationStyles.scss";

const Registration = () => {
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

  return (
    <div className="registration">
      <motion.div
        key="registration"
        className="registrationContainer"
        {...animationSettings}
      >
        Registration
      </motion.div>
    </div>
  );
};

export default Registration;
