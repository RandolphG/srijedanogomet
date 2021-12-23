import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

type playerInfo = {
  userName: string;
  email: string;
  password: string;
  height: string;
  tags: string[];
  isInEditMode: boolean;
};

export const RegistrationViewModel = () => {
  let navigate = useNavigate();

  const [inputType, setInputType] = useState<string>("password");
  const [playerInfo, setPlayerInfo] = useState<playerInfo>({
    userName: "",
    height: "cm",
    email: "@poplogics.com",
    password: "password",
    tags: ["attacker", "defense", "midfielder"],
    isInEditMode: false,
  });

  function handleSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
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

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    console.log(event.target.value);
    setPlayerInfo({
      ...playerInfo,
      [event.target.name]: event.target.value,
    });
  }

  function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
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
          height: "${playerInfo.height}",
          email: "${playerInfo.email}",
          password: "${playerInfo.password}"}) {
            _id
            userName
            email
          }
      }
    `,
  };

  return {
    playerInfo,
    navigate,
    onChange,
    onClick,
    showPassword,
    handleSubmit,
  };
};
