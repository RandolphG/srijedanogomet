import React, { useState } from "react";

import logo from "../../resources/platter.svg";
import { useHistory } from "react-router-dom";
import { ISystemState } from "../../types";

interface OwnProps {
  doLogin: Function;
  login: ISystemState;
}

// Main functional component login page
const Login: React.FC<OwnProps> = (props: OwnProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // High level CSS styling for the Login page. Can be refactored to another file
  // We should use CSS Grid https://css-tricks.com/snippets/css/complete-guide-grid/

  // Test function to handle react-router and redux connection at the same time
  let historyApp = useHistory();
  const handleClick = () => {
    if (username !== "" && password !== "") {
      props.doLogin(username, password);
      historyApp.push("/home");
    }
    // silently do not submit the form as input color validation is enough to inform the user
  };
  return (
    <div key="login">
      <div>
        <div>
          <div
            style={{
              gridRow: "2",
              justifySelf: "center",
              alignSelf: "center",
              display: "grid",
            }}
          >
            <img
              style={{
                width: "50px",
                justifySelf: "center",
                alignSelf: "center",
              }}
              src={logo}
              alt="logo"
            />
            <h5>Platter</h5>
          </div>
          <input
            style={{ gridRow: "3" }}
            required
            onChange={(e: any) => setUsername(e.target.value)}
            id="validation-outlined-input"
          />
          <input
            style={{ gridRow: "4" }}
            required
            onChange={(e: any) => setPassword(e.target.value)}
            type="password"
            id="validation-outlined-input"
          />
          <button
            onClick={() => handleClick()}
            style={{ gridRow: "6" }}
            color="primary"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
