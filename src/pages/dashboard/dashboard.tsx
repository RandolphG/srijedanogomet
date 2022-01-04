import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { DropdownMenu } from "../../components";
import { selectSystemState } from "../../state-mgmt/store";
import {
  faClone,
  faBullhorn,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/_dashboardStyles.scss";

/**
 * @description Dashboard page
 */
const Dashboard = () => {
  const system = useSelector(selectSystemState);
  const menuItems = [
    {
      label: "Clone",
      icon: faClone,
      onClick: () => alert("Clone"),
    },
    {
      label: "Share",
      icon: faBullhorn,
      onClick: () => alert("Share"),
    },
    {
      label: "Delete",
      icon: faTrash,
      onClick: () => alert("Delete"),
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard_container">
        <div className="dashboard_container_max">
          <div className="dashboard_container_max_userInfo">
            Signed in as : {system.system.userName}
          </div>
          {/*<DropdownMenu items={menuItems} />*/}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
