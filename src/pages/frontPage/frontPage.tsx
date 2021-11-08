import React, { FC } from "react";
import { CookieStorage } from "../../components";
import { FrontPageViewModel } from "./frontPageViewModel";
import { slides } from "./utils";
import classNames from "classnames";
import "./styles/_frontPageStyles.scss";

/**
 * Front Page
 */
const FrontPage: FC = () => {
  const { IMAGE_PARTS, slideState, changeSlides } = FrontPageViewModel();

  const partsOfImages = ({ slide }: any) => (
    <div className="slider__slide-parts">
      {[...Array(IMAGE_PARTS).fill(undefined)].map((x, i) => (
        <div className="slider__slide-part" key={i}>
          <div
            className="slider__slide-part-inner"
            style={{ backgroundImage: `url(${slide.img})` }}
          />
        </div>
      ))}
    </div>
  );

  const slideContent = ({ slide }: any) => (
    <div className="slider__slide-content">
      <h3 className="slider__slide-subheading">
        {slide.country || slide.city}
      </h3>
      <h2 className="slider__slide-heading">
        {slide.city.split("").map((l: any, i: number) => (
          <span key={i}>{l}</span>
        ))}
      </h2>
      <p className="slider__slide-readmore">read more</p>
    </div>
  );

  return (
    <div
      key="frontPage"
      className={classNames("slider", { "s--ready": slideState.sliderReady })}
    >
      <p className="slider__top-heading">
        Animafi Aduana Development Organization
      </p>
      <div className="slider__slides">
        {slides.map((slide: any, index: number) => (
          <div
            className={classNames("slider__slide", {
              "s--active": slideState.activeSlide === index,
              "s--prev": slideState.prevSlide === index,
            })}
            key={slide.city}
          >
            {slideContent({ slide })}
            {partsOfImages({ slide })}
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div
        className="slider__control slider__control--right"
        onClick={() => changeSlides(1)}
      />
    </div>
  );
};

export default FrontPage;
