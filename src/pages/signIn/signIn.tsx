import React from "react";
import "./styles/_signInStyles.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
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
      <div className="signInContainer">
        <div className="signInTitle">Sign In</div>
        <Buttons />
      </div>
    </div>
  );
};

export default SignIn;
