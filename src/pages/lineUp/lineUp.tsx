import React, { FC, memo } from "react";
import { gql, useQuery } from "@apollo/client";
import "./styles/_lineUpStyles.scss";

const USERS = gql`
  query users {
    users {
      userName
      password
      createdAt
    }
  }
`;

/**
 * LineUp
 */
const LineUp: FC = memo(() => {
  const { loading, error, data } = useQuery(USERS);

  console.log(`DATA`, data);

  return (
    <div className="registration">
      {loading ? (
        <div className="registration_container">... LineUp</div>
      ) : (
        data.users.map((user: any, idx: number) => (
          <div className="registration_container">
            <p>{user.userName}</p>
          </div>
        ))
      )}
    </div>
  );
});

export default LineUp;
