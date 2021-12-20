import React, { FC, memo } from "react";
import "./styles/_signinStyles.scss";
import { SigninViewModel } from "./signinViewModel";

/**
 * SignIn
 **/
const SignIn: FC = memo(() => {
  const {
    handleSubmit,
    handleChange,
    showPassword,
    inputType,
    playerInfo,
    navigate,
  } = SigninViewModel();

  return (
    <div className="signin">
      <div className="signin_container">
        <div className="signin_container_max">
          <div className="">
            <input
              className=""
              onChange={handleChange}
              value={playerInfo.userName}
              type="text"
              name="userName"
              id="userName"
              placeholder="&nbsp;"
              autoComplete="off"
              required
            />
            <label className="">Username</label>
          </div>
          <div className="">
            <input
              className=""
              onChange={handleChange}
              type="text"
              name="email"
              id="email"
              value={playerInfo.email}
              placeholder="&nbsp;"
              required
            />
            <label className="">Email</label>
          </div>
          <div className="">
            <input
              className=""
              onChange={handleChange}
              value={playerInfo.password}
              type={inputType}
              name="password"
              id="password"
              placeholder="&nbsp;"
              required
            />
            <label className="">Password</label>
            <span className="" onClick={showPassword}>
              {inputType === "text" ? "Hide" : "show"}
            </span>
          </div>
          <button className="" type="submit" onClick={handleSubmit}>
            Sign in
          </button>
          <button className="" type="submit" onClick={() => navigate("/")}>
            Signup / Registration
          </button>
        </div>
      </div>
    </div>
  );
});

export default SignIn;
