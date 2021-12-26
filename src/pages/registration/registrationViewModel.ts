import React, { ChangeEvent, SelectHTMLAttributes, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getDashboard,
  Player,
  requestAddNotification,
  requestAddPlayer,
} from "../../state-mgmt/store";

export const RegistrationViewModel = () => {
  let navigate = useNavigate();
  const dashboard = useSelector(getDashboard);
  const dispatch = useDispatch();
  const [inputType, setInputType] = useState<string>("password");
  const [playerInfo, setPlayerInfo] = useState<Player>({
    league: "srijeda-nogomet",
    userName: "",
    height: "cm",
    email: "@poplogics.com",
    password: "password",
  });

  function handleSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    dispatch(requestAddPlayer(playerInfo));
    dispatch(requestAddNotification({ title: playerInfo.userName }));

    /*fetch("http://localhost:8000/graphql", {
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
      .catch((err) => console.log(err));*/
  }

  function handleSelectOnChange(event: ChangeEvent<HTMLSelectElement>) {
    console.log(event.target.value);
    setPlayerInfo({
      ...playerInfo,
      [event.target.name]: event.target.value,
    });
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
    dashboard,
    playerInfo,
    navigate,
    handleSelectOnChange,
    onChange,
    onClick,
    showPassword,
    handleSubmit,
  };
};
