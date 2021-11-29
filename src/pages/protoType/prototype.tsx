import React from "react";
import { Twitch } from "../../components";

const Prototype = () => {
  return (
    <div
      style={{
        border: "2px solid white",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "1rem",
      }}
    >
      <Twitch />
    </div>
  );
};

export default Prototype;
