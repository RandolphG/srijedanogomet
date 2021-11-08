import React, { Fragment, FC } from "react";
import "./styles/_signInStyles.scss";
import { motion } from "framer-motion";
import { SignUpViewModel } from "./signUpViewModel";

/**
 * SignUp Form
 * @constructor
 */
const SignUp: FC = () => {
  const {
    motionSettings,
    handleChange,
    handleSubmit,
    credentials,
    inputType,
    showPassword,
  } = SignUpViewModel();

  const SigninButton = () => <button className="signInButton">Sign Up</button>;

  const UserName = () => (
    <input
      onChange={handleChange}
      value={credentials.userName}
      type="text"
      name="userName"
      id="userName"
      autoComplete="off"
      required
      placeholder="Username or Email"
    />
  );

  const Password = () => (
    <>
      <input
        name="password"
        onChange={handleChange}
        value={credentials.password}
        type={inputType}
        id="password"
        placeholder="Password"
        required
      />
      <span className="passwordShow" onClick={showPassword}>
        {inputType === "text" ? "Hide" : "show"}
      </span>
    </>
  );

  const SocialSignIn = () => (
    <p className="signin-text">
      Login with Twitter, Facebook,
      <br /> Google or:
    </p>
  );

  const LogoImage = () => (
    <img
      className="logo"
      alt="dribble-logo"
      src="https://www.dropbox.com/s/vwcn548w1gsk7lb/dribbble-ball-icon.png?raw=1"
    />
  );

  const Footer = () => (
    <>
      <p className="foot-txt">Forgot your password?</p>
      <p className="foot-txt">
        Not a member? <span className="bold" />
        Sign up now
      </p>
    </>
  );

  return (
    <Fragment>
      <motion.div {...motionSettings} className="loginFormContainer">
        <form className="form" onSubmit={handleSubmit}>
          <div className="box">
            <LogoImage />
            <p className="signin">Sign Up</p>
            <SocialSignIn />
            <div className="signin-row" />
            <UserName />
            <br />
            <Password />
            <SigninButton />
            <Footer />
          </div>
        </form>
      </motion.div>
    </Fragment>
  );
};
export default SignUp;
