import React, { Fragment } from "react";
import { ChooseViewModel } from "./chooseViewModel";
import "./styles/_chooseStyles.scss";

/**
 * Choose selection
 */
const Choose = () => {
  const { agentImages, totalyCorrupted, resourceImages, agentSelect } =
    ChooseViewModel();

  /* corrupted images */

  const Images = () => (
    <div className="content">
      <div className="images">
        {agentImages.map((agent, idx) => (
          <div
            key={idx}
            className={`agent-container ${agent.name}`}
            onClick={(agent) => agentSelect(agent.currentTarget)}
          >
            <div className="agent-image-container">
              {idx === 0 && <div className="shine" />}
              <div className="agent-image-left" />
              <div className="agent-image-right" />
              <img
                src={resourceImages.me}
                alt={`${agent.name}`}
                id={`${agent.name}`}
                className="agent-image"
                onError={totalyCorrupted}
              />
              <p>Striker</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Fragment>
      <Images />
      <div className="overlay" />
    </Fragment>
  );
};

export default Choose;
