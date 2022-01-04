import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services";
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
    attendance: false,
  });

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

  function handleSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();

    registerUser(requestBody).then((data: any) => {
      console.log(`DATA : `, data);
      if (data) {
        dispatch(requestAddPlayer(playerInfo));
        dispatch(requestAddNotification({ title: playerInfo.userName }));
        navigate("/signIn");
      }
    });
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
