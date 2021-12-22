import React, { FC, Fragment, memo, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "../../components/";
import "./styles/_lineUpStyles.scss";

const USERS = gql`
  query users {
    users {
      userName
      password
      email
      createdAt
    }
  }
`;

type lineUp = {
  type: string;
  selection: any[];
};

/**
 * LineUp
 */
const LineUp: FC = memo(() => {
  const { loading, error, data } = useQuery(USERS);

  let navigate = useNavigate();

  const [lineUpState, setLineUpState] = useState<lineUp>({
    type: "checkbox",
    selection: [],
  });

  function toggleSelection(id: string) {
    const { type, selection } = lineUpState;

    if (type === "checkbox") {
      if (selection.includes(id)) {
        setLineUpState({
          type,
          selection: selection.filter((sel) => sel !== id),
        });
      } else {
        setLineUpState({
          type,
          selection: [...selection, id],
        });
      }
    } else {
      setLineUpState({ type, selection: [id] });
    }
  }

  const Loading = () => (
    <Fragment>
      {loading && (
        <div className="lineUp_container">
          <div>... LineUp</div>
        </div>
      )}
    </Fragment>
  );

  const Error = () => (
    <Fragment>
      {error && (
        <div className="lineUp_container">
          <div>... LineUp</div>
        </div>
      )}
    </Fragment>
  );

  const Players = () => (
    <div className="lineUp_container_max">
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
            </span>
          ))}
      </div>
    </div>
  );

  return (
    <div className="lineUp">
      <div className="lineUp_container">
        <Loading />
        <div className="lineUp_container">
          <Players />
          <button
            className="lineUp_container_max_button"
            onClick={() => navigate("/")}
          >
            Logout
          </button>
        </div>
      </div>
      <Error />
    </div>
  );
});

export default LineUp;
