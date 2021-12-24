import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectSystemState } from "../../state-mgmt/store";
import "./styles/_dashboardStyles.scss";

/**
 * @description Dashboard page
 */
const Dashboard = () => {
  const system = useSelector(selectSystemState);

  return (
    <div className="dashboard">
      <div className="dashboard_container">
        <div className="dashboard_container_max">
          <div className="dashboard_container_max_userInfo">
            Signed in as : {system.system.userName}
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
