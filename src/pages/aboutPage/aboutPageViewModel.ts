import $ from "jquery";
import _ from "lodash";
import { useEffect } from "react";

export const AboutPageViewModel = () => {
  let scrollSensitivitySetting: number = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
  let slideDurationSetting: number = 600; //Amount of time for which slide is "locked"
  let currentSlideNumber: number = 0;
  let ticking: boolean = false;
  let isFirefox: boolean = /Firefox/i.test(navigator.userAgent);
  let isIe: boolean =
    /MSIE/i.test(navigator.userAgent) ||
    /Trident.*rv\:11\./i.test(navigator.userAgent);

  let totalSlideNumber: any = $(".background").length;

  useEffect(() => {
    // ------------- VARIABLES ------------- //

    // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
    function parallaxScroll(evt: any) {
      let delta: any;
      if (isFirefox) {
        //Set delta for Firefox
        delta = evt.detail * -120;
      } else if (isIe) {
        //Set delta for IE
        delta = -evt.deltaY;
      } else {
        //Set delta for all other browsers
        delta = evt.wheelDelta;
      }

      if (!ticking) {
        if (delta <= -scrollSensitivitySetting) {
          //Down scroll
          ticking = true;
          if (currentSlideNumber !== totalSlideNumber - 1) {
            currentSlideNumber++;
            nextItem();
          }
          slideDurationTimeout(slideDurationSetting);
        }
        if (delta >= scrollSensitivitySetting) {
          //Up scroll
          ticking = true;
          if (currentSlideNumber !== 0) {
            currentSlideNumber--;
          }
          previousItem();
          slideDurationTimeout(slideDurationSetting);
        }
      }
    }

    // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
    function slideDurationTimeout(slideDuration: number) {
      setTimeout(function () {
        // @ts-ignore
        ticking = false;
      }, slideDuration);
    }

    // ------------- ADD EVENT LISTENER ------------- //
    // @ts-ignore
    let mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
    // @ts-ignore
    window.addEventListener(
      mousewheelEvent,
      // @ts-ignore
      _.throttle(parallaxScroll, 60),
      false
    );

    // ------------- SLIDE MOTION ------------- //
    function nextItem() {
      // @ts-ignore
      let $previousSlide = $(".background").eq(currentSlideNumber - 1);
      $previousSlide.removeClass("up-scroll").addClass("down-scroll");
    }

    function previousItem() {
      // @ts-ignore
      let $currentSlide = $(".background").eq(currentSlideNumber);
      $currentSlide.removeClass("down-scroll").addClass("up-scroll");
    }
  });

  const motionSettings = {
    initial: { opacity: 0, scale: 0, y: -25 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    exit: { opacity: 0, y: -25 },
  };
};
