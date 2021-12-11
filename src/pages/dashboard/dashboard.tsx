import React, { Fragment, MouseEvent } from "react";
import { Link } from "react-router-dom";
import "./styles/_dashboardStyles.scss";
import { AnimatePresence, motion } from "framer-motion";
import { ImageSection } from "./components";
import { DashboardViewModel } from "./dashboardViewModel";

const Dashboard = () => {
  const { motionSettings, infoViews, displayNone, playerStatStyle } =
    DashboardViewModel();
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

  const Container = ({ children }: any) => (
    <motion.div
      key="dashboard"
      {...motionSettings}
      className="dashboardContainer"
    >
      {children}
    </motion.div>
  );

  return (
    <AnimatePresence exitBeforeEnter>
      <div key="dashboard" className="dashboard">
        <Container>
          {/*<BackButton />*/}
          <ImageSection />
          <PlayerSpecsButtons />
          <PlayerStats />
          <Buttons />
        </Container>
      </div>
    </AnimatePresence>
  );
};

export default Dashboard;
