import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getLeagues,
  getPlayer,
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
  let { id } = useParams<"id">();

  // const { loading, error, data } = useQuery(USERS);

  const system = useSelector(getLeagues);
  const teamSelector = useSelector(getTeams);
  const currentPlayer = useSelector(getPlayer);

  const { leagues, activeLeague } = system;
  const { leagueId } = activeLeague;
  const { teams } = leagues[leagueId!];

  let navigate = useNavigate();

  // console.log(`\nPLAYERS -->`, currentPlayer);
  // console.log(`\nLENGTH -->`, Object.keys(currentPlayer).length);

  const [lineUpState, setLineUpState] = useState<lineUp>({
    type: "checkbox",
    selection: [],
  });

  function createPlayersAttendance() {
    /* to get properties length :
     * https://stackoverflow.com/questions/5223/length-of-a-javascript-object
     * */

    for (const [key, value] of Object.entries(currentPlayer)) {
      const { attendance, id } = value;
      if (attendance === true) {
        console.log(`\nKEY -->`, key);
        console.log(`\nVALUE -->`, value);

        if (!lineUpState.selection.includes(value)) {
          lineUpState.selection.push(id);
          console.log(value);
        }
      }
    }
    console.log(`\nLINEUP STATE -->`, lineUpState);
  }

  createPlayersAttendance();

  function toggleSelection(id: string) {
    console.log(`\nTOGGLE -->`, id);

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

  /*
  console.log(`\nLEAGUES -->`, leagues);
  console.log(`\nACTIVE LEAGUE -->`, leagueId);
  console.log(`\nLEAGUES DETAILS -->`, leagues[leagueId!]);
  console.log(`\nLEAGUES TEAMS -->`, teams);
  console.log(`\nTEAMS -->`, teamSelector[teams[0]]);
  console.log(`\nTEAM PLAYERS -->`, teamSelector[teams[0]]["players"]);
  */

  const players = teamSelector[teams[0]]["players"];

  return {
    id,
    lineUpState,
    // loading,
    // error,
    // data,
    players,
    toggleSelection,
    navigateToProfile,
    navigate,
    currentPlayer,
  };
};
