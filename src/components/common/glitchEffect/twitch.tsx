import React from "react";
import "./styles/_twitchStyles.scss";
import { Link } from "react-router-dom";

/**
 * Twitch Title Component
 * @constructor
 */
const Twitch = () => {
  return (
    <div className="glitchBackground">
      <div className="glitchContainer">
        <div className="glitch" data-text="SriJedaFB">
          SriJedaFC
        </div>
        <div className="glow">SriJedaFC</div>
        <p className="subtitle">WEDNESDAY's FOOTBALL CLUB</p>
        <p
          style={{
            width: "70%",
            fontSize: "1.2rem",
            color: "white",
            marginTop: "1rem",
          }}
        >
          Discover all about Srijeda Nogomet Football Club. All you favorite
          players in one place.
        </p>
        <div
          style={{
            boxSizing: "border-box",
            border: "2px solid white",
            width: "100%",
            height: "10%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Link
            style={{
              width: "20%",
              color: "black",
            }}
            to="/gettingStarted"
          >
            <button
              style={{
                width: "100%",
                background: "black",
                color: "white",
                marginTop: "1rem",
              }}
            >
              Sign In
            </button>
          </Link>
          <Link
            style={{
              width: "20%",
              color: "black",
            }}
            to="/gettingStarted"
          >
            <button
              style={{
                width: "100%",
                background: "black",
                color: "white",
                marginTop: "1rem",
              }}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <div className="scanlines" />
    </div>
  );
};

export default Twitch;
