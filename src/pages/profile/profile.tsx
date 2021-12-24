import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { getPlayer } from "../../state-mgmt/store";

/**
 * Profile
 */
const Profile: FC = () => {
  let { id } = useParams<"id">();
  const players = useSelector(getPlayer);

  console.log(`PLAYERS`, players);
  console.log(`ID`, id!.toString());
  console.log(`PLAYERS[randi]`, players[id!.toString()]);
  const player = players[id!.toString()];
  return (
    <div style={{ color: "white", fontSize: "5rem" }}>
      <div> Profile : {id}</div>
      <div> Profile : {player.userName}</div>
      <div> height : {player.height}</div>
      <div> league : {player.league}</div>
      <div> email : {player.email}</div>
      <Outlet />
    </div>
  );
};

export default Profile;
