import React, { Fragment, MouseEvent } from "react";
import { Link } from "react-router-dom";
import "./styles/_dashboardStyles.scss";
import { resourceImages } from "../../resources";
import { AnimatePresence, motion } from "framer-motion";
import { DashboardViewModel } from "./dashboardViewModel";

const Dashboard = () => {
  const {
    motionSettings,
    imeMotion,
    prezimeMotion,
    infoViews,
    displayNone,
    playerStatStyle,
  } = DashboardViewModel();
  const [currentView, setView] = React.useState(1);

  /**
   * set view to the next view
   * @param event {MouseEvent}
   * @param props
   */
  const onClick = (event: MouseEvent<HTMLButtonElement>, ...props: any[]) => {
    event.preventDefault();
    console.log(`Button Clicked`, event);
    setView(props.length > 0 ? props[0] : currentView + 1);
  };

  const PlayerSpecsButtons = () => (
    <div className="playerSpecsButtonContainers">
      <button
        className="playerSpecsButtonContainers__button"
        onClick={(event) => onClick(event, 1)}
      >
        Profile
      </button>
      <button
        className="playerSpecsButtonContainers__button"
        onClick={(event) => onClick(event, 2)}
      >
        Stats
      </button>
      <button
        className="playerSpecsButtonContainers__button"
        onClick={(event) => onClick(event, 3)}
      >
        Results
      </button>
    </div>
  );

  const BackButton = () => (
    <button className="backButton">
      <Link className="backButton_link" to="/">
        Log Out
      </Link>
    </button>
  );

  const PlayerImageSection = () => {
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

  const Buttons = () => (
    <div className="dashboardButtonContainers">
      <button className="dashboardButtonContainers__button">
        <Link
          className="dashboardButtonContainers__button_link"
          to="/dashboard"
        >
          Dashboard
        </Link>
      </button>
      <button className="dashboardButtonContainers__button">
        <Link
          className="dashboardButtonContainers__button_link"
          to="/teamLineUp"
        >
          Team Line-Up
        </Link>
      </button>
      <button className="dashboardButtonContainers__button">
        <Link className="dashboardButtonContainers__button_link" to="/matches">
          Match Statistics
        </Link>
      </button>
      <button className="dashboardButtonContainers__button">
        <Link
          className="dashboardButtonContainers__button_link"
          to="/leaderboard"
        >
          Leaderboard
        </Link>
      </button>
    </div>
  );

  const PlayerStats = () => (
    <Fragment>
      {infoViews.map((item, idx) => {
        console.log(`NUMBER`, item.id);
        console.log(`Component`, item.component);
        return (
          <div
            key={idx}
            style={currentView === item.id ? playerStatStyle : displayNone}
          >
            {item.component}
          </div>
        );
      })}
    </Fragment>
  );

  return (
    <AnimatePresence exitBeforeEnter>
      <div key="dashboard" className="dashboard">
        <motion.div
          key="dashboard"
          {...motionSettings}
          className="dashboardContainer"
        >
          {/*<BackButton />*/}
          <PlayerImageSection />
          <PlayerSpecsButtons />
          <PlayerStats />
          <Buttons />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Dashboard;
