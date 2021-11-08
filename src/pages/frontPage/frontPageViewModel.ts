import { useEffect, useState } from "react";
import { AUTOCHANGE_TIME, slides } from "./utils";

interface ISlideState {
  activeSlide: number;
  prevSlide: number;
  sliderReady: boolean;
}

export const FrontPageViewModel = () => {
  const IMAGE_PARTS: number = 4;
  let changeTO: any = null;
  const { length } = slides;

  const motionSettings = {
    initial: { opacity: 0, scale: 0, y: -25 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: { opacity: 0, y: -25 },
  };

  const [slideState, setSlideState] = useState<ISlideState>({
    activeSlide: -1,
    prevSlide: -1,
    sliderReady: false,
  });

  /* auto change the images */
  const runAutochangeTO = () => {
    changeTO = setTimeout(() => {
      changeSlides(1);
      runAutochangeTO();
    }, AUTOCHANGE_TIME);
  };

  /* change the slides */
  const changeSlides = (change: number) => {
    clearTimeout(changeTO);
    const prevSlide: number = slideState.activeSlide;
    let activeSlide: number = prevSlide + change;

    if (activeSlide < 0) {
      activeSlide = length - 1;
    }

    if (activeSlide >= length) {
      activeSlide = 0;
    }

    setSlideState({ ...slideState, activeSlide, prevSlide });
  };

  useEffect(() => {
    runAutochangeTO();
    /*setTimeout(() => {
          setSlideState({ ...slideState, activeSlide: 0, sliderReady: true });
        }, 0);
      */ return () => {
      clearTimeout(changeTO);
    };
  });

  return {
    IMAGE_PARTS,
    slideState,
    changeSlides,
  };
};
