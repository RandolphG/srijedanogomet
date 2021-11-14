import gsap, { TweenMax } from "gsap";
import $ from "jquery";
import { useEffect } from "react";

export const MobileNavigationViewModel = () => {
  useEffect(() => {
    function menu() {
      let menuInner = $(".js-menu-inner");
      let menuTrigger = $(".js-menu-trigger");
      let menuInnerBackgroundItem = $(".js-menu-inner-background").find("i");
      let menuItem = $(".js-menu-items-list").find("li");
      let menuItemsShape = $(".js-menu-items-shape");
      let menuClose = $(".js-menu-close");
      let timeline = gsap.timeline({
        paused: true,
      });
      let logoShape = $(".js-logo-shape");
      let logoShapePath =
        "M 189,80.37 C 243,66.12 307.3,87.28 350.9,124.1 389.3,156.6 417,211.2 418.1,263.4 419.1,305.7 401.8,355.6 368.5,379.1 298.8,428 179.2,446.4 117.6,386.3 65.4,335.3 78.55,230.3 105.5,160.5 119.7,123.6 152.6,89.85 189,80.37 Z";
      let _selfA = $(".menu__items-wrapper .js-menu-items-wrapper");
      let _selfB = $("js-menu-item");
      let linksWrapper = $(".js-menu-items-wrapper");
      let linksItems: JQuery<HTMLElement> = $(".js-menu-items-list").find("li");
      let activeItem: JQuery<HTMLElement> = $(".js-menu-item.is-active");
      let activeItemPosition = activeItem.position().top;
      let menuItemsShapePath: any = $(".js-items-shape-path");
      let topOffset = 8;

      timeline
        .to(
          menuInner,
          1,
          {
            autoAlpha: 1,
            ease: Power4.easeOut,
          },
          "start"
        )
        .fromTo(
          menuInnerBackgroundItem,
          0.25,
          {
            x: "-100%",
            autoAlpha: 0,
          },
          {
            x: "0%",
            autoAlpha: 1,
            ease: Power1.easeOut,
          },
          "start"
        )
        .fromTo(
          menuItem,
          0.4,
          {
            x: -30,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            delay: 0.35,
            ease: Back.easeOut.config(1),
          },
          "start"
        )
        .fromTo(
          menuItemsShape,
          0.25,
          {
            scale: 0.7,
            autoAlpha: 0,
          },
          {
            scale: 1,
            autoAlpha: 1,
            delay: 0.95,
            ease: Back.easeOut.config(1.7),
          },
          "start"
        )
        .fromTo(
          menuClose,
          0.2,
          {
            x: -10,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            delay: 1,
            ease: Power1.easeOut,
          },
          "start"
        );

      function _logoShapeAnimation() {
        TweenMax.to(logoShape, 3, {
          attr: { d: logoShapePath },
          repeat: -1,
          yoyo: true,
          ease: Power0.easeNone,
        });
      }

      const onMouseEnter = () => {
        let selfParent = _selfB.closest(linksWrapper);
        let targetCircle = selfParent.find(menuItemsShape);
        let circlePosition = _selfB.position().top;

        TweenMax.to(targetCircle, 0.4, {
          y: circlePosition + topOffset,
          ease: Power2.easeOut,
        });

        TweenMax.to(menuItemsShapePath, 1, {
          // morphSVG: this.dataset.morph,
        });
      };

      const onMouseLeave = () => {
        let selfParent = _selfA.closest(linksWrapper);
        let activeLink = selfParent.find(activeItem);
        let targetCircle = selfParent.find(menuItemsShape);
        let activeLinkPosition = activeLink.position().top;

        TweenMax.to(targetCircle, 0.4, {
          y: activeLinkPosition + topOffset,
          ease: Power2.easeOut,
        });

        TweenMax.to(menuItemsShapePath, 1, {
          morphSVG: menuItemsShapePath,
        });
      };

      const _hoverAnimation = () => {
        TweenMax.set(menuItemsShape, {
          y: activeItemPosition + topOffset,
        });

        linksItems.on({
          mouseenter: onMouseEnter,
        });

        linksWrapper.on({
          mouseleave: onMouseLeave,
        });
      };

      menuTrigger.on("click", function () {
        timeline.play();
      });

      menuClose.on("click", function () {
        timeline.timeScale(1.25);
        timeline.reverse();
      });

      _logoShapeAnimation();
      _hoverAnimation();
    }

    menu();
  });
};
