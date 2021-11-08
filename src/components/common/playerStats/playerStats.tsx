import React, { Fragment } from "react";
import "./styles/_playerStatsStyles.scss";

const PlayerStats = () => {
  const statInfo = [
    { stat: "Matches", value: 396 },
    { stat: "Goals", value: 46 },
    { stat: "Assists", value: 33 },
    { stat: "Minutes", value: 1233 },
  ];

  const Stats = () => (
    <dl className="player-stats">
      {statInfo.map(({ stat, value }, idx) => (
        <div key={idx}>
          <dt className="player-stat">{stat}</dt>
          <dd className="player-stat-number">{value}</dd>
        </div>
      ))}
    </dl>
  );
  return (
    <div className="playerStatsContainer">
      <div className="player">
        <div className="player-info">
          <h2 className="player-name">
            <span className="player-team">West Ham United</span>R. Gordon
          </h2>
          <Stats />
        </div>
        <div className="player-image">
          <img alt="player" src="https://assets.codepen.io/285131/noble.png" />
          <span className="captain-badge">C</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
