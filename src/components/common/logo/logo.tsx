import React from "react";
import "./styles/_logoStyles.scss";
import { useHistory } from "react-router-dom";

const Logo = () => {
  let historyApp = useHistory();

  function goToLink(link: any) {
    historyApp.push(`/`);
  }

  return (
    <div className="animafiLogo" onClick={goToLink}>
      Animafi Aduana
    </div>
  );
};

export default Logo;
