import React, { FC, memo } from "react";
import { SigninViewModel } from "./signinViewModel";
import "./styles/_signinStyles.scss";

/**
 * SignIn
 **/
const SignIn: FC = memo(() => {
  const { handleSubmit, handleChange, inputType, playerInfo, navigate } =
    SigninViewModel();

  return (
    <div className="signin">
      <div className="signin_container">
        <div className="signin_container_max">
          <div className="signin_container_max_title">Sign in</div>
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
          <button
            className="signin_container_max_button"
            type="submit"
            onClick={handleSubmit}
          >
            Sign in
          </button>
          <button
            className="signin_container_max_button"
            type="submit"
            onClick={() => navigate("/registration")}
          >
            Registration
          </button>
        </div>
      </div>
    </div>
  );
});

export default SignIn;
