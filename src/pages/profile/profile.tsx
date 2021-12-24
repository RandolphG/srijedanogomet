import React, { FC } from "react";
import { Outlet, useParams } from "react-router-dom";

/**
 * Profile
 */
const Profile: FC = () => {
  let { id } = useParams<"id">();

  return (
    <div>
      <div style={{ color: "white", fontSize: "5rem" }}> Profile : {id}</div>
      <Outlet />
    </div>
  );
};

export default Profile;
