import React, { FC, memo } from "react";
import "./styles/_registrationStyles.scss";
import { ProfileImage } from "../../components";
import { RegistrationViewModel } from "./registrationViewModel";
import { motion } from "framer-motion";

/**
 * Registration
 **/
const Registration: FC = memo(() => {
  const {
    playerInfo,
    onChange,
    onClick,
    handleSubmit,
    navigate,
    handleSelectOnChange,
    dashboard,
  } = RegistrationViewModel();

  const motionSettings = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="registration">
      <motion.div
        key="registration"
        {...motionSettings}
        className="registration_container"
      >
        <div className="registration_container_max">
          <div className="registration_container_max_title">SIGN UP</div>

          <div className="registration_container_max_information">
            <div className="registration_container_max_information_profileImage">
              <ProfileImage />
            </div>
            {playerInfo.isInEditMode ? (
              <select
                className="registration_container_max_information_labelTeam"
                name="league"
                id="league"
                value={playerInfo.league}
                onChange={handleSelectOnChange}
              >
                {dashboard &&
                  dashboard.map((value, idx) => (
                    <option
                      className="registration_container_max_information_labelSelect"
                      key={`selection-${idx}`}
                      value={value}
                    >
                      {value}
                    </option>
                  ))}
              </select>
            ) : (
              <div className="registration_container_max_information_label">
                {playerInfo.league}
              </div>
            )}
            {playerInfo.isInEditMode ? (
              <input
                className="registration_container_max_information_labelName"
                type="text"
                name="userName"
                id="userName"
                value={playerInfo.userName}
                onChange={onChange}
                placeholder="Enter your name"
                required
              />
            ) : (
              <div className="registration_container_max_information_label">
                {playerInfo.userName}
              </div>
            )}
            {playerInfo.isInEditMode ? (
              <input
                className="registration_container_max_information_labelEmail"
                type="text"
                name="email"
                id="email"
                value={playerInfo.email}
                onChange={onChange}
                required
              />
            ) : (
              <div className="registration_container_max_information_label">
                {playerInfo.email}
              </div>
            )}
            {playerInfo.isInEditMode ? (
              <input
                className="registration_container_max_information_labelPassword"
                type="text"
                name="password"
                id="password"
                value={playerInfo.password}
                onChange={onChange}
                required
              />
            ) : (
              <div className="registration_container_max_information_label">
                {playerInfo.password}
              </div>
            )}
            {playerInfo.isInEditMode ? (
              <input
                className="registration_container_max_information_labelHeight"
                type="text"
                name="height"
                id="name"
                value={playerInfo.height}
                onChange={onChange}
                required
              />
            ) : (
              <div className="registration_container_max_information_label">
                {playerInfo.height}
              </div>
            )}
            <button
              className="registration_container_max_buttons_editButton"
              onClick={onClick}
            >
              Edit
            </button>
          </div>

          <div className="registration_container_max_buttons">
            <button
              className="registration_container_max_buttons_editButton"
              onClick={handleSubmit}
            >
              CREATE
            </button>
            <button
              className="registration_container_max_buttons_editButton"
              onClick={() => navigate("/signin")}
            >
              SIGN IN
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

export default Registration;
