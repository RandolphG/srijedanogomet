import { AnimatePresence, motion } from "framer-motion";
import React, { FC, memo } from "react";
import { SigninViewModel } from "./signinViewModel";
import "./styles/_signinStyles.scss";

/**
 * SignIn
 **/
const SignIn: FC = memo(() => {
  const { handleSubmit, handleChange, inputType, playerInfo, navigate } =
    SigninViewModel();

  const motionSettings = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className="signin">
      <motion.div key="signIn" {...motionSettings} className="signin_container">
        <div className="signin_container_max">
          <div className="signin_container_max_title">SIGN IN</div>
          <div className="signin_container_max_information">
            <input
              className="signin_container_max_userName"
              onChange={handleChange}
              value={playerInfo.userName}
              type="text"
              name="userName"
              id="userName"
              placeholder="userName"
              autoComplete="off"
              required
            />
            <input
              className="signin_container_max_email"
              onChange={handleChange}
              type="text"
              name="email"
              id="email"
              value={playerInfo.email}
              placeholder="email"
              required
            />
            <input
              className="signin_container_max_password"
              onChange={handleChange}
              value={playerInfo.password}
              type={inputType}
              name="password"
              id="password"
              placeholder="password"
              required
            />
          </div>

          <div className="home_container_max_buttons">
            <button
              className="signin_container_max_buttons_button"
              type="submit"
              onClick={handleSubmit}
            >
              LOGIN
            </button>
            <button
              className="signin_container_max_buttons_button"
              type="submit"
              onClick={() => navigate("/registration")}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

export default SignIn;
