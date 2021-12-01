import React from "react";
import { useHistory } from "react-router-dom";
import { Twitch } from "../../components";
import "./styles/_prototypeStyles.scss";

const Prototype = () => {
  let historyApp = useHistory();
  const handleClick = ({ path }: any) => {
    historyApp.push(`/${path}`);
  };

  const Buttons = () => (
    <div className="buttonContainers">
      <button
        className="buttonContainers__button"
        onClick={() => handleClick("signIn")}
      >
        Sign In
      </button>
      <button
        onClick={() => handleClick("signUp")}
        className="buttonContainers__button"
      >
        Sign Up
      </button>
    </div>
  );

  return (
    <div className="prototype">
      <div className="prototypeContainer">
        <Twitch />
        <Buttons />
      </div>
    </div>
  );
};

export default Prototype;
