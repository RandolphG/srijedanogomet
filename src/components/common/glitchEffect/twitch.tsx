import React, { Fragment } from "react";
import "./styles/_twitchStyles.scss";

/**
 * Twitch Title Component
 * @constructor
 */
const Twitch = () => {
  const Logo = () => (
    <Fragment>
      <div className="glitch" data-text="SriJedaFB">
        SriJedaFC
      </div>
      <div className="glow">SriJedaFC</div>
      <p className="subtitle">WEDNESDAY's FOOTBALL CLUB</p>
    </Fragment>
  );

  const Message = () => (
    <p className="twitchMessage">
      Discover Srijeda Football Club. All your favorite players in one place.
    </p>
  );

  return (
    <Fragment>
      <div className="glitchContainer">
        <Logo />
        <Message />
      </div>
      <div className="scanlines" />
    </Fragment>
  );
};

export default Twitch;
