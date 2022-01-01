import React, { FC } from "react";
import "./styles/_homeStyles.scss";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Home
 */
const Home: FC = () => {
  let navigate = useNavigate();

  const motionSettings = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const Title = () => <div className="home_container_max_title">NOGOMET</div>;

  const Logo = () => (
    <div className="home_container_max_logoContainer">LOGO</div>
  );
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="home">
        <motion.div key="home" className="home_container" {...motionSettings}>
          <div className="home_container_max">
            <Title />
            <Logo />
            <div className="home_container_max_buttons">
              <button
                className="home_container_max_buttons_button"
                onClick={() => navigate("/signIn")}
              >
                SIGN IN
              </button>
              <button
                className="home_container_max_buttons_button"
                onClick={() => navigate("/registration")}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Home;
