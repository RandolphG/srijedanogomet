import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { getSignInModalState } from "../../../state-mgmt/store";
import { motion } from "framer-motion";
import { SignInViewModel } from "./signInViewModel";
import "./styles/_signInStyles.scss";

/**
 * Login Form
 * @constructor
 */
const SignIn = () => {
  const { handleChange, handleSubmit, credentials, inputType, showPassword } =
    SignInViewModel();

  const show = useSelector(getSignInModalState);

  const [signUp, setSignUp] = useState(true);

  const SigninButton = () => (
    <button className="signInButton">{signUp ? `Sign In` : `Sign Up`}</button>
  );

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

  const motionSettings = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <Fragment>
      {show && (
        <motion.div {...motionSettings} className="loginFormContainer">
          <div className="box">
            <LogoImage />
            <p className="signin">Sign in</p>
            {signUp ? <SocialSignIn /> : null}
            <div className="signin-row" />
            <UserName />
            <br />
            <Password />
            <SigninButton />
            {signUp ? <Footer /> : null}
          </div>
        </motion.div>
      )}
    </Fragment>
  );
};
export default SignIn;
