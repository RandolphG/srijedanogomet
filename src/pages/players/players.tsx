import React from "react";
import { Routes, Route } from "react-router-dom";
import { PlayerGallery } from "./playerGallery";
import { Player } from "./player";
import "./styles/_playersStyles.scss";

/**
 * Players page
 * @function Players
 **/
const Players = () => {
  return (
    <Routes>
      <Route path="/player" element={<PlayerGallery />} />
      <Route path="/player/image/:id" element={<Player />} />
    </Routes>
  );
};

export default Players;
