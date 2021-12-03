import React, { Fragment, MouseEvent } from "react";
import { Link } from "react-router-dom";
import "./styles/_dashboardStyles.scss";
import { resourceImages } from "../../resources";
import { AnimatePresence, motion } from "framer-motion";

const Dashboard = () => {
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
        <div className="playerImageSection__name_ime">MARIO</div>
        <div className="playerImageSection__name_prezime">BERDIC</div>
      </div>
    );

    const Number = () => <div className="playerNumber">#19</div>;

    const PlayerImage = () => (
      <div className="playerImage">
        <img
          className="playerImage_image"
          src={resourceImages.marioBerdic}
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

  const profileInfo = [
    { name: "COUNTRY", value: "Croatia" },
    { name: "NICKNAME", value: "..." },
    { name: "HEIGHT", value: 182 },
    { name: "WEIGHT", value: "106kg" },
    { name: "HOMETOWN", value: "Zagreb" },
    { name: "POSITION", value: "VERSATILE" },
    { name: "FAVORITE CLUB", value: "Dinamo Zagreb" },
    { name: "SIGNED", value: "SRIJEDA FC" },
  ];

  const Profile = () => {
    return (
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 3.5 } }}
          exit={{ opacity: 0 }}
          className="profile"
        >
          <div className="profile_info">
            <div className="profile_info_title">PROFILE</div>
            <div className="profile_info_container">
              <div className="profile_info_container_details">
                {profileInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="profile_info_container_details_detail"
                  >
                    <div className="profile_info_container_details_detail_name">
                      {info.name}
                    </div>
                    <div className="profile_info_container_details_detail_value">
                      {info.value}
                    </div>
                  </div>
                ))}
              </div>
              <div>ACHIEVEMENTS</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  const statsInfo = [
    { name: "OVERALL POINTS", value: 99 },
    { name: "PASS", value: 99 },
    { name: "TACTICS", value: 99 },
    { name: "CREATIVITY", value: 99 },
    { name: "SKILL", value: 99 },
    { name: "SHOOTING", value: 99 },
    { name: "DEFENSE", value: 99 },
    { name: "ACCURACY", value: 99 },
    { name: "DRIBBLE", value: 99 },
  ];

  const Stats = () => {
    return (
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 3.5 } }}
          exit={{ opacity: 0 }}
          className="stats"
        >
          <div className="stats_info">
            <h1 className="stats_info_title">STATS</h1>
            <div className="stats_info_details">
              {statsInfo.map((stat, idx) => (
                <div key={idx} className="stats_info_details_detail">
                  <div className="stats_info_details_detail_name">
                    {stat.name}
                  </div>
                  <div className="stats_info_details_detail_value">99</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  const resultsInfo = [
    { name: "GOALS", value: 12 },
    { name: "GOALS SAVED", value: 0 },
    { name: "CLEAN SHEET", value: 0 },
    { name: "NO GOALS STREAK", value: 0 },
    { name: "ASSISTS", value: 12 },
    { name: "BALL RECOVERED", value: 2 },
    { name: "CHANCES CREATED", value: 13 },
    { name: "CHANCES SQUANDERED", value: 34 },
  ];

  const Results = () => {
    return (
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 3.5 } }}
          exit={{ opacity: 0 }}
          className="results"
        >
          <div className="results_info">
            <div className="results_info_title">RESULTS</div>
            <div className="results_info_stats">
              <div className="results_info_stats_results">
                {resultsInfo.map((result, idx) => (
                  <div className="results_info_stats_results_detail" key={idx}>
                    <div className="results_info_stats_results_detail_name">
                      {result.name}
                    </div>
                    <div className="results_info_stats_results_detail_name">
                      {result.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="results_info_stats_rating">
                <div className="results_info_stats_rating_title">
                  AVERAGE RATING
                </div>
                <div className="results_info_stats_rating_value">90</div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  const infoViews = [
    {
      id: 1,
      title: "Profile",
      component: Profile(),
    },
    {
      id: 2,
      title: "Stats",
      component: Stats(),
    },
    {
      id: 3,
      title: "Stats",
      component: Results(),
    },
  ];

  const playerStatStyle = {
    color: "white",
    border: "2px solid white",
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const displayNone = { display: "none" };

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
    <div key="dashboard" className="dashboard">
      <div className="dashboardContainer">
        <BackButton />
        <PlayerImageSection />
        <PlayerSpecsButtons />
        <PlayerStats />
        <Buttons />
      </div>
    </div>
  );
};

export default Dashboard;
