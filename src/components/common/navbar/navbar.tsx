import React from "react";
import { motion } from "framer-motion";
import { NavbarViewModel } from "./navbarViewModel";
import "./styles/_navbarStyles.scss";

/**
 * Navigational bar
 * @constructor
 */
const Navbar = () => {
  const { links, goToLink, motionSettings } = NavbarViewModel();

  const Snake = () => (
    <svg className="snake" viewBox="0 0 100 100">
      <path d="M 5,50.000015 H 35 C 35,50.000015 35.966338,49.750005 36.875001,49.750005 C 37.783664,49.750005 38.749998,50.000015 38.749998,50.000015 C 38.749998,50.000015 39.622117,50.500015 40.624999,50.500015 C 41.627882,50.500015 42.5,50.000015 42.5,50.000015 C 42.5,50.000015 43.476418,48.5 44.374997,48.5 C 45.273576,48.5 46.249998,50.000015 46.249998,50.000015 C 46.249998,50.000015 47.22755,53 48.124999,53 C 49.022448,53 50,50.000015 50,50.000015 C 50,50.000015 50.977541,47 51.875001,47 C 52.772461,47 53.749998,50.000015 53.749998,50.000015 C 53.749998,50.000015 54.726428,51.5 55.624999,51.5 C 56.52357,51.5 57.5,50.000015 57.5,50.000015 C 57.5,50.000015 58.486661,49.500025 59.375001,49.500025 C 60.263341,49.500025 61.249998,50.000015 61.249998,50.000015 C 61.249998,50.000015 62.232702,50.249995 63.124999,50.249995 C 64.017296,50.249995 65,50.000015 65,50.000015 H 95" />
    </svg>
  );

  return (
    <motion.div key="navbar" {...motionSettings} className="container">
      {Snake()}
      <div className="navbarMenu">
        {links.map(({ link, name }, idx) => (
          <div
            key={`navbar-links-${idx}`}
            className="item"
            onClick={() => goToLink(name)}
          >
            {link}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
