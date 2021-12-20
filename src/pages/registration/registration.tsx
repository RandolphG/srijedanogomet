import React, { FC, memo } from "react";
import "./styles/_registrationStyles.scss";
import { RegistrationViewModel } from "./registrationViewModel";

/**
 * Registration
 **/
const Registration: FC = memo(() => {
  const { playerInfo, onChange, onClick, handleSubmit, navigate } =
    RegistrationViewModel();

  return (
    <div className="registration">
      <div className="registration_container">
        <div className="registration_container_max">
          <div className="registration_container_max_title">
            Signup / Registration
          </div>
          {playerInfo.isInEditMode ? (
            <input
              className="registration_container_max_labelName"
              type="text"
              name="userName"
              id="userName"
              value={playerInfo.userName}
              onChange={onChange}
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
