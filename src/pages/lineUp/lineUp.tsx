import React, { FC, Fragment, memo } from "react";
import { useParams } from "react-router-dom";
import { Checkbox } from "../../components/";
import { LineUpViewModel } from "./lineUpViewModel";
import "./styles/_lineUpStyles.scss";

/**
 * LineUp
 */
const LineUp: FC = memo(() => {
  const {
    lineUpState,
    loading,
    data,
    toggleSelection,
    navigateToProfile,
    navigate,
  } = LineUpViewModel();

  /* loading default*/
  const Loading = () => (
    <Fragment>
      {loading && (
        <div className="lineUp_container">
          <div>... LineUp</div>
        </div>
      )}
    </Fragment>
  );

  /* profile navigation button */
  const ProfileButton = ({ user }: { user: { userName: string } }) => (
    <div
      className="lineUp_container_max_players_player_profileBtn"
      onClick={() => navigateToProfile(`${user.userName}`)}
    >
      Profile
    </div>
  );

  /* logout button */
  const LogOutButton = () => (
    <div
      className="lineUp_container_max_logoutButton"
      onClick={() => navigate("/")}
    >
      Log Out
    </div>
  );

  /* container for list of containers */
  const LineUpContainer = ({ children }: any) => (
    <div className="dashboard_container">{children}</div>
  );
  let { id } = useParams<"id">();

  /* list of players */
  const Players = () => (
    <div style={{ border: "purple 5px solid", width: "100%", height: "100%" }}>
      <div>league: {id}</div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0 2rem",
          marginBottom: "1rem",
        }}
      >
        <div>players : {data && data.users.length}</div>
        <div>active : {lineUpState.selection.length}</div>
      </div>
      <div className="lineUp_container_max_players">
        {data &&
          data.users.map((user: any, idx: number) => (
            <span
              key={`player-${idx}`}
              className="lineUp_container_max_players_player"
            >
              <Checkbox
                selected={lineUpState.selection.includes(user.userName)}
                onClick={() => toggleSelection(user.userName)}
                label={user.userName}
              />
              <ProfileButton user={user} />
            </span>
          ))}
      </div>
      <LogOutButton />
    </div>
  );

  return (
    <LineUpContainer>
      <Loading />
      <Players />
    </LineUpContainer>
  );
});

export default LineUp;
