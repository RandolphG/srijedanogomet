import React, { FC, Fragment, memo } from "react";
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
    error,
    data,
    toggleSelection,
    navigateToProfile,
    navigate,
    system,
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

  /* error default*/
  const Error = () => (
    <Fragment>
      {error && (
        <div className="lineUp_container">
          <div>... Error</div>
        </div>
      )}
    </Fragment>
  );

  /* profile navigation button */
  const ProfileButton = ({ user }: { user: { userName: string } }) => (
    <div
      className="lineUp_container_max_players_player_profileBtn"
      onClick={() => navigateToProfile(user.userName)}
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

  /* component container */
  const Container = ({ children }: any) => (
    <div className="lineUp">{children}</div>
  );

  /* container for list of containers */
  const LineUpContainer = ({ children }: any) => (
    <div className="lineUp_container">{children}</div>
  );

  /* list of players */
  const Players = () => (
    <div className="lineUp_container_max">
      <div style={{ color: "white" }}>
        Signed in as : {system.system.userName}
      </div>
      <div className="lineUp_container_max_title">
        players : {data && data.users.length}
      </div>
      <div className="lineUp_container_max_active">
        active : {lineUpState.selection.length}
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
    </div>
  );

  return (
    <Container>
      <LineUpContainer>
        <Loading />
        <Players />
        <LogOutButton />
      </LineUpContainer>
      <Error />
    </Container>
  );
});

export default LineUp;
