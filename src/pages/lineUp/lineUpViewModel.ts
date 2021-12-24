import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getLeagues,
  getTeams,
  selectSystemState,
} from "../../state-mgmt/store";

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

export const LineUpViewModel = () => {
  const { loading, error, data } = useQuery(USERS);

  const system = useSelector(getLeagues);
  const teamSelector = useSelector(getTeams);
  const { leagues, activeLeague } = system;
  const { leagueId } = activeLeague;
  const { teams } = leagues[leagueId!];

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

  function navigateToProfile(userName: string) {
    navigate(`profile/${userName}`);
  }

  console.log(`LEAGUES -->`, leagues);

  console.log(`ACTIVE LEAGUE -->`, leagueId);

  console.log(`LEAGUES DETAILS -->`, leagues[leagueId!]);

  console.log(`LEAGUES TEAMS -->`, teams);

  console.log(`TEAMS -->`, teamSelector[teams[0]]);

  console.log(`TEAM PLAYERS -->`, teamSelector[teams[0]]["players"]);

  const players = teamSelector[teams[0]]["players"];
  return {
    lineUpState,
    loading,
    error,
    data,
    players,
    toggleSelection,
    navigateToProfile,
    navigate,
  };
};
