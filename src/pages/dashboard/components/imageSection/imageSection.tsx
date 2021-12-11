import React from "react";
import { ImageSectionViewModel } from "./imageSectionViewModel";
import "./styles/_imageSectionStyles.scss";

const ImageSection = () => {
  const { motion, prezimeMotion, imeMotion, resourceImages } =
    ImageSectionViewModel();
  const Name = () => (
    <div className="playerImageSection__name">
      <motion.div {...imeMotion} className="playerImageSection__name_ime">
        MARIO
      </motion.div>
      <motion.div
        {...prezimeMotion}
        className="playerImageSection__name_prezime"
      >
        BERDIC
      </motion.div>
    </div>
  );

  const Number = () => <div className="playerNumber">#19</div>;

  const PlayerImage = () => (
    <div className="playerImage">
      <img
        className="playerImage_image"
        src={resourceImages.raheemSterling}
        alt="player"
      />
    </div>
  );

  return (
    <div className="playerImageSection">
      <Number />
      <Name />
      <PlayerImage />
    </div>
  );
};

export default ImageSection;
