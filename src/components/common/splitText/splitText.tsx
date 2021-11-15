import React, { Fragment, useEffect } from "react";
import "./styles/_splitTextStyles.scss";

/**
 * SplitText
 */
const SplitText = () => {
  useEffect(() => {
    /* window width */
    let w = window.innerWidth;
    /* window height */
    let h = window.innerHeight;

    let menu: any = document.getElementsByClassName("Menu-list");
    let itemSelectors: any = document.querySelectorAll(".Menu-list-item");

    const onMouseMove = (e: any) => {
      /* cursor position X */
      let offsetX = 0.5 - e.pageX / w;
      /* cursor position Y */
      let offsetY = 0.5 - e.pageY / h;
      /*h2 = center of poster*/
      let dy = e.pageY - h / 2;
      /*w2 = center of poster*/
      let dx = e.pageX - w / 2;
      /* angle between cursor and center of poster in RAD */
      let theta = Math.atan2(dy, dx);
      /* convert rad in degrees */
      let angle = (theta * 180) / Math.PI - 90;
      let offsetPoster = menu[0].dataset.offset;
      /* poster transform */
      let transformPoster =
        "translate3d(0, " +
        -offsetX * offsetPoster +
        "px, 0) rotateX(" +
        -offsetY * offsetPoster +
        "deg) rotateY(" +
        offsetX * (offsetPoster * 2) +
        "deg)";
      /* get angle between 0-360 */
      if (angle < 0) {
        angle = angle + 360;
      }
      /* poster transform */
      menu[0].style.transform = transformPoster;

      /* parallax for each layer */
      for (let index = 0; index < itemSelectors.length; index++) {
        let offsetLayer = itemSelectors[index].dataset.offset || 0;
        let transformLayer =
          "translate3d(" +
          offsetX * offsetLayer +
          "px, " +
          offsetY * offsetLayer +
          "px, 20px)";

        itemSelectors[index].style.transform = transformLayer;
      }
    };
  }, []);

  const menuItems = [
    { name: "Home", dataOffset: "20" },
    { name: "About", dataOffset: "16" },
    { name: "Work", dataOffset: "12" },
    { name: "Contact", dataOffset: "8" },
  ];

  const MenuListItem = () => (
    <Fragment>
      {menuItems.map((menu, idx) => (
        <li key={idx} className="Menu-list-item" data-offset={menu.dataOffset}>
          {menu.name}
          <span className="Mask">
            <span>{menu.name}</span>
          </span>
          <span className="Mask">
            <span>{menu.name}</span>
          </span>
        </li>
      ))}
    </Fragment>
  );

  return (
    <div className="Menu">
      <ul className="Menu-list" data-offset="10">
        <MenuListItem />
      </ul>
    </div>
  );
};

export default SplitText;
