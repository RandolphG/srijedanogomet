import React, { FC, Fragment, memo } from "react";
import { Checkbox } from "../../components/";
import { LineUpViewModel } from "./lineUpViewModel";
import "./styles/_lineUpStyles.scss";

/**
 * LineUp
 * re-render stackoverflow :
 * https://stackoverflow.com/questions/41004631/trace-why-a-react-component-is-re-rendering
 */
const LineUp: FC = memo(() => {
  const {
    id,
    lineUpState,
    // loading,
    players,
    toggleSelection,
    navigateToProfile,
    navigate,
    currentPlayer,
  } = LineUpViewModel();

  /* loading default*/
  const Loading = () => (
    <Fragment>
      {/*      {loading && (
        <div className="lineUp_container">
          <div>... LineUp</div>
        </div>
      )}*/}
    </Fragment>
  );

  /* profile navigation button */
  const ProfileButton = ({ user }: { user: { userName: string } }) => (
    <div
      className="lineUp_container_max_players_player_profileBtn"
      onClick={() => navigateToProfile(`${user}`)}
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
        <div>players : {players && players.length}</div>
        <div>active : {lineUpState.selection.length}</div>
      </div>
      <div className="lineUp_container_max_players">
        {players &&
          players.map((user: any, idx: number) => {
            const name = currentPlayer[user!.toString()];

            return (
              <span
                key={`player-${idx}`}
                className="lineUp_container_max_players_player"
              >
                <Checkbox
                  // selected={lineUpState.selection.includes(user.userName)}
                  selected={name.attendance}
                  onClick={() => toggleSelection(user.userName)}
                  label={user}
                />
                <ProfileButton user={user} />
              </span>
            );
          })}
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
