import React, { useState, FC, memo } from "react";
import "./styles/_registrationStyles.scss";

/**
 * Registration
 **/
const Registration: FC = memo(() => {
  const [inputType, setInputType] = useState<any>("password");
  const [playerInfo, setPlayerInfo] = useState<any>({
    userName: "Randi",
    email: "randolph.gordon@poplogics.com",
    password: "password",
    height: "183cm",
    tags: ["attacker", "defense", "midfielder"],
    isInEditMode: false,
  });

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("submit");
    fetch("http://localhost:8000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          throw new Error("Failed");
        }
        console.log(`response`, response);
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    console.log(event.target.value);
    setPlayerInfo({
      ...playerInfo,
      [event.target.name]: event.target.value,
    });
  }

  function onClick(event: any) {
    setPlayerInfo({
      ...playerInfo,
      isInEditMode: !playerInfo.isInEditMode,
    });
  }

  function showPassword() {
    setInputType(inputType === "text" ? "password" : "text");
  }

  const requestBody = {
    query: `
      mutation {
        createUser(userInput: {
          userName: "${playerInfo.userName}",
          email: "${playerInfo.email}",
          password: "${playerInfo.password}"}) {
            _id
            userName
            email
          }
      }
    `,
  };

  return (
    <div className="registration">
      <div className="registration_container">
        <div className="registration_container_max">
          <div className="registration_container_max_title">
            Signup / Registration
          </div>

          {playerInfo.isInEditMode ? (
            <input
              className="registration_container_max_labelName"
              type="text"
              name="name"
              id="name"
              value={playerInfo.userName}
              onChange={onChange}
              required
            />
          ) : (
            <div className="registration_container_max_label">
              {playerInfo.userName}
            </div>
          )}
          {playerInfo.isInEditMode ? (
            <input
              className="registration_container_max_labelEmail"
              type="text"
              name="email"
              id="email"
              value={playerInfo.email}
              onChange={onChange}
              required
            />
          ) : (
            <div className="registration_container_max_label">
              {playerInfo.email}
            </div>
          )}
          {playerInfo.isInEditMode ? (
            <input
              className="registration_container_max_labelPassword"
              type="text"
              name="password"
              id="password"
              value={playerInfo.password}
              onChange={onChange}
              required
            />
          ) : (
            <div className="registration_container_max_label">
              {playerInfo.password}
            </div>
          )}
          {playerInfo.isInEditMode ? (
            <input
              className="registration_container_max_labelHeight"
              type="text"
              name="height"
              id="name"
              value={playerInfo.height}
              onChange={onChange}
              required
            />
          ) : (
            <div className="registration_container_max_label">
              {playerInfo.height}
            </div>
          )}
          <button
            className="registration_container_max_editButton"
            onClick={onClick}
          >
            Edit
          </button>
          <button
            className="registration_container_max_editButton"
            onClick={handleSubmit}
          >
            Create Profile
          </button>
        </div>
      </div>
    </div>
  );
});

export default Registration;
