import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "./styles/_dropdownMenuStyles.scss";

/**
 * Dropdown menu
 */
const DropdownMenu = ({ items }: any) => {
  const [isActive, setIsActive] = React.useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function close() {
    setIsActive(false);
  }

  return (
    <div className="dropdown-menu" /*tabIndex="0" */ onBlur={close}>
      <div className={`toggle ${isActive ? "active" : ""}`} onClick={toggle}>
        <span>
          <FontAwesomeIcon icon={faEllipsisV} />
        </span>
      </div>
      <div className={`menu ${isActive ? "expanded" : "collapsed"}`}>
        <ul>
          {items.map((i: any, index: number) => (
            <li key={index} onClick={i.onClick}>
              <span>
                <FontAwesomeIcon icon={i.icon} />
              </span>
              <span className="label">{i.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
