import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLeagues, selectSystemState } from "../../state-mgmt/store";

export const LineUpViewModel = () => {
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

  const leagues = useSelector(getLeagues);

  console.log(`LEAGUES -->`, leagues);
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

  function navigateToProfile(userName: string) {
    navigate(`profile/${userName}`);
  }

  return {
    lineUpState,
    loading,
    error,
    data,
    toggleSelection,
    navigateToProfile,
    navigate,
  };
};
