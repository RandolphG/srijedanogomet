import { Profile, Results, Stats } from "./components";

export const DashboardViewModel = () => {
  const ease = [0.6, -0.05, 0.01, 0.99];
  const duration = 1.0;
  const transition = {
    duration,
    ease,
  };

  const motionSettings = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition,
    },
    exit: {
      opacity: 0,
      transition,
    },
  };

  const imeMotion = {
    initial: {
      opacity: 0,
      x: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: 40,
    },
  };

  const prezimeMotion = {
    initial: {
      opacity: 0,
      x: 40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: -40,
    },
  };

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

  const infoViews = [
    {
      id: 1,
      title: "Profile",
      component: Profile({ profileInfo }),
    },
    {
      id: 2,
      title: "Stats",
      component: Stats({ statsInfo }),
    },
    {
      id: 3,
      title: "Stats",
      component: Results({ resultsInfo }),
    },
  ];

  return {
    motionSettings,
    imeMotion,
    prezimeMotion,
    infoViews,
    displayNone,
    playerStatStyle,
  };
};
