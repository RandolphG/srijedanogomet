import React, { FC } from "react";
import "./styles/_homeStyles.scss";
import { useNavigate } from "react-router-dom";

/**
 * Home
 */
const Home: FC = () => {
  let navigate = useNavigate();

  return (
    <div className="home">
      <div className="home_container">
        <div className="home_container_max">
          <div className="home_container_max_title">HOME</div>
          <button
            className="home_container_max_button"
            onClick={() => navigate("/registration")}
          >
            go to some place
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
