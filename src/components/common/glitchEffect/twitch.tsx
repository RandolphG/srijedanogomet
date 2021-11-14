import React from "react";
import "./styles/_twitchStyles.scss";

/**
 * Twitch Title Component
 * @constructor
 */
const Twitch = () => {
  return (
    <div className="glitchBackground">
      <div className="glitchContainer">
        <div className="glitch" data-text="SriJedaFB">
          SriJedaFB
        </div>
        <div className="glow">SriJedaFB</div>
        <p className="subtitle">WEDNESDAY's FOOTBALL</p>
      </div>
      <div className="scanlines" />
    </div>
  );
};

export default Twitch;
