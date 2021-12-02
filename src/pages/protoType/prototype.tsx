import React from "react";
import { Link } from "react-router-dom";
import { Twitch } from "../../components";
import "./styles/_prototypeStyles.scss";

const Prototype = () => {
  const Buttons = () => (
    <div className="buttonContainers">
      <button className="buttonContainers__button">
        <Link className="buttonContainers__button_link" to="/signIn">
          <div className="buttonContainers__button_link_text">Sign In</div>
        </Link>
      </button>
      <button className="buttonContainers__button">
        <Link className="buttonContainers__button_link" to="/registration">
          Registration
        </Link>
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
