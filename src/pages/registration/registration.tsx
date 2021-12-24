import React, { FC, memo } from "react";
import "./styles/_registrationStyles.scss";
import { RegistrationViewModel } from "./registrationViewModel";

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

  return (
    <div className="registration">
      <div className="registration_container">
        <div className="registration_container_max">
          <div className="registration_container_max_title">
            Signup / Registration
          </div>
          {playerInfo.isInEditMode ? (
            <select
              className="registration_container_max_labelTeam"
              name="league"
              id="league"
              value={playerInfo.league}
              onChange={handleSelectOnChange}
            >
              {dashboard &&
                dashboard.map((value, idx) => (
                  <option
                    className="registration_container_max_labelSelect"
                    key={`selection-${idx}`}
                    value={value}
                  >
                    {value}
                  </option>
                ))}
            </select>
          ) : (
            <div className="registration_container_max_label">
              {playerInfo.league}
            </div>
          )}
          {playerInfo.isInEditMode ? (
            <input
              className="registration_container_max_labelName"
              type="text"
              name="userName"
              id="userName"
              value={playerInfo.userName}
              onChange={onChange}
              placeholder="Enter your name"
              required
            />
          ) : (
            <div className="registration_container_max_label">
              {playerInfo.userName}
            </div>
          )}
          {playerInfo.isInEditMode ? (
            <input
              className="registration_container_max_labelEmail"
              type="text"
              name="email"
              id="email"
              value={playerInfo.email}
              onChange={onChange}
              required
            />
          ) : (
            <div className="registration_container_max_label">
              {playerInfo.email}
            </div>
          )}
          {playerInfo.isInEditMode ? (
            <input
              className="registration_container_max_labelPassword"
              type="text"
              name="password"
              id="password"
              value={playerInfo.password}
              onChange={onChange}
              required
            />
          ) : (
            <div className="registration_container_max_label">
              {playerInfo.password}
            </div>
          )}
          {playerInfo.isInEditMode ? (
            <input
              className="registration_container_max_labelHeight"
              type="text"
              name="height"
              id="name"
              value={playerInfo.height}
              onChange={onChange}
              required
            />
          ) : (
            <div className="registration_container_max_label">
              {playerInfo.height}
            </div>
          )}
          <button
            className="registration_container_max_editButton"
            onClick={onClick}
          >
            Edit
          </button>
          <button
            className="registration_container_max_editButton"
            onClick={handleSubmit}
          >
            Create Profile
          </button>
          <button
            className="registration_container_max_editButton"
            onClick={() => navigate("/signin")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
});

export default Registration;
