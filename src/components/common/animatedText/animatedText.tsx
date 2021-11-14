import React, { useEffect } from "react";
import { TimelineMax, Back } from "gsap";
import "./styles/_animatedTextStyles.scss";

/**
 * Animated text component
 * @constructor
 */
const AnimatedText = () => {
  /*
  useEffect(() => {
    $(document).ready(function () {
      $(".title").lettering();
      $(".button").lettering();
    });
  });
*/

  useEffect(() => {
    animation();
  }, []);

  function animation() {
    let title1 = new TimelineMax();
    title1.to(".button", 0, { visibility: "hidden", opacity: 0 });
    title1.staggerFromTo(
      ".title span",
      0.5,
      { ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
      { ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 },
      0.05
    );
    title1.to(".button", 0.2, { visibility: "visible", opacity: 1 });
  }

  return (
    <section className="container">
      <h1>
        <span className="title">This is</span>
        <span className="title">a long</span>
        <span className="title">long title</span>
      </h1>

      <div className="button" onClick={animation}>
        restart
      </div>
    </section>
  );
};

export default AnimatedText;
