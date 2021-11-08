import React, { FC, useRef } from "react";
import { createPortal } from "react-dom";
import { ExpandableSidebarNavigationViewModel } from "./expandableSidebarNavigationViewModel";
import "./styles/_expandableSidebarNavigationStyles.scss";

/**
 * Expandable Sidebar Navigation
 * @constructor
 */
const ExpandableSidebarNavigation: FC = () => {
  const triggerRef = useRef(null);
  const navigationContainerRef = useRef(null);

  ExpandableSidebarNavigationViewModel({ triggerRef, navigationContainerRef });

  const sidebarLinks = [
    {
      title: "Dashboard",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="navigation-link__icon feather feather-grid"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      title: "Analytics",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="navigation-link__icon feather feather-activity"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: "Accounts",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="navigation-link__icon feather feather-users"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Calendar",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="navigation-link__icon feather feather-calendar"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      title: "Documents",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="navigation-link__icon feather feather-file-text"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
  ];

  const Trigger = () => (
    <div ref={triggerRef} className="navigation-collapse-trigger">
      <span
        className="navigation-collapse-trigger__orb"
        id="js_navigation-collapse-trigger"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </span>
    </div>
  );

  const NavigationContainer = ({ children }: any) => (
    <div
      ref={navigationContainerRef}
      className="navigation-container"
      id="js_navigation-container"
    >
      {children}
    </div>
  );

  const Navigation = () => (
    <nav role="navigation">
      <ul className="navigationLinks">
        {sidebarLinks.map(({ svg, title }, idx) => (
          <li key={idx}>
            <a className="navigation-link" href="#">
              {svg}
              <span className="navigation-link__name js_navigation-item-name">
                {title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  const Header = () => (
    <a className="navigation-logo" href="#">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-box navigation-logo__icon"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
      <span className="navigation-logo__name js_navigation-item-name">
        title
      </span>
    </a>
  );

  const Searchbar = () => (
    <div className="navigation-search">
      <input
        type="search"
        placeholder="search"
        className="navigation-search__input"
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="navigation-search__icon"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
  );

  const Logout = () => (
    <a className="navigation-link logout" href="#">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="navigation-link__icon feather feather-power"
      >
        <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
        <line x1="12" y1="2" x2="12" y2="12" />
      </svg>
      <span className="navigation-link__name js_navigation-item-name">
        Logout
      </span>
    </a>
  );

  return (
    <>
      {createPortal(
        <div className="expandableSidebarNavigation">
          <NavigationContainer>
            <Trigger />
            <div className="navigation">
              <Header />
              <Searchbar />
              <Navigation />
              <Logout />
            </div>
          </NavigationContainer>
        </div>,
        document.body
      )}
    </>
  );
};

export default ExpandableSidebarNavigation;
