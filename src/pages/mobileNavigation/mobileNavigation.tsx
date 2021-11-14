import React from "react";
import { MobileNavigationViewModel } from "./mobileNavigationViewModel";
import "./styles/_mobileNavigationStyles.scss";

/**
 * Mobile Navigation
 */
const MobileNavigation = () => {
  MobileNavigationViewModel();
  const Logo = () => (
    <div className="menu__logo">
      <svg viewBox="0 0 500 500">
        <defs>
          <linearGradient id="main-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#EE43BD", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FFD779", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          className="js-logo-shape"
          fill="url(#main-gradient)"
          d="M 378.1,121.2 C 408.4,150 417.2,197.9 411,245.8 404.8,293.7 383.5,341.7 353.4,370.7 303.2,419.1 198.7,427.7 144.5,383.8 86.18,336.5 67.13,221.3 111.9,161 138.6,125 188.9,99.62 240.7,90.92 292.4,82.24 345.6,90.32 378.1,121.2 Z"
        />
      </svg>
      <h1>MICRO FRONT</h1>
    </div>
  );

  const Trigger = () => (
    <div className="menu__trigger js-menu-trigger">
      <span>MENU</span>
    </div>
  );

  const MenuItem = () => (
    <div className="menu__items-wrapper js-menu-items-wrapper">
      <ul className="menu__items-list js-menu-items-list">
        <li
          className="js-menu-item is-active"
          data-morph="M 418.1,159.8 C 460.9,222.9 497,321.5 452.4,383.4 417.2,432.4 371.2,405.6 271.3,420.3 137.2,440 90.45,500.6 42.16,442.8 -9.572,381 86.33,289.1 117.7,215.5 144.3,153.4 145.7,54.21 212.7,36.25 290.3,15.36 373.9,94.6 418.1,159.8 Z"
        >
          <a href="#">Home</a>
        </li>
        <li
          className="js-menu-item"
          data-morph="M 402.7,215.5 C 433.9,280.4 488.1,367.2 447.7,426.8 410.1,482.2 316.7,460.2 249.7,460.6 182.8,461.1 88.08,485.5 51.26,429.5 10.29,367.3 73.19,279.4 106.9,213 141.8,144 176.6,33.65 253.9,33.7 332.2,33.75 368.8,144.9 402.7,215.5 Z"
        >
          <a href="#">About</a>
        </li>
        <li
          className="js-menu-item"
          data-morph="M 451.5,185.8 C 441.5,266.2 339.6,305 272.3,350.2 207.7,393.6 226.7,444.7 182.6,447.9 132.8,451.4 83.97,399.9 66.37,353.1 34.6,268.4 41.16,141.8 112,85.44 186.1,26.329999999999984 313.8,54.099999999999994 396,101.4 425.2,118.2 455.6,152.4 451.5,185.8 Z"
        >
          <a href="#">Hover Me</a>
        </li>
        <li
          className="js-menu-item"
          data-morph="M 378.1,121.2 C 408.4,150 417.2,197.9 411,245.8 404.8,293.7 383.5,341.7 353.4,370.7 303.2,419.1 198.7,427.7 144.5,383.8 86.18,336.5 67.13,221.3 111.9,161 138.6,125 188.9,99.62 240.7,90.92 292.4,82.24 345.6,90.32 378.1,121.2 Z"
        >
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="menu__items-shape js-menu-items-shape">
        <svg id="circle" viewBox="0 0 500 500">
          <path
            id="object"
            className="js-items-shape-path"
            fill="url(#main-gradient)"
            d="M 418.1,159.8 C 460.9,222.9 497,321.5 452.4,383.4 417.2,432.4 371.2,405.6 271.3,420.3 137.2,440 90.45,500.6 42.16,442.8 -9.572,381 86.33,289.1 117.7,215.5 144.3,153.4 145.7,54.21 212.7,36.25 290.3,15.36 373.9,94.6 418.1,159.8 Z"
          />
        </svg>
      </div>
    </div>
  );

  const MenuSelector = () => (
    <ul className="menu__inner-background js-menu-inner-background">
      {[0, 1, 2, 3, 4].map(() => (
        <li>
          <i />
        </li>
      ))}
    </ul>
  );

  const CloseButton = () => (
    <div className="menu__trigger menu__trigger--close js-menu-close">
      <span>Close</span>
    </div>
  );

  const MenuWrapper = ({ children }: any) => (
    <div className="menu__inner js-menu-inner">{children}</div>
  );

  const Menu = ({ children }: any) => <div className="menu">{children}</div>;

  return (
    <Menu>
      <Trigger />
      <Logo />
      <MenuWrapper>
        <MenuSelector />
        <MenuItem />
        <CloseButton />
      </MenuWrapper>
    </Menu>
  );
};

export default MobileNavigation;
