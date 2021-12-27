import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services";
import { requestAddNotification } from "../../state-mgmt/store";

interface SignInViewModelProps {
  handleSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SigninViewModel = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputType, setInputType] = useState<string>("password");
  const [playerInfo, setCredentials] = useState<{
    userName: string;
    email: string;
    password: string;
  }>({
    userName: "",
    email: "",
    password: "",
  });

  const requestBody = {
    query: `
      query  {
        login(
          userName: "${playerInfo.userName}",
          email: "${playerInfo.email}",
          password: "${playerInfo.password}") {
            userId
            token
            tokenExpiration
          }
      }
    `,
  };

  function handleSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    console.log(`\nplayerInfo`, playerInfo);
    loginUser(requestBody, dispatch, playerInfo, navigate).then((r) => {
      console.log(`LOGIN RESULT`, r);
      dispatch(requestAddNotification({ title: r }));
    });
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setCredentials({
      ...playerInfo,
      [event.target.name]: event.target.value,
    });
  }

  function showPassword() {
    setInputType(inputType === "text" ? "password" : "text");
  }

  return {
    handleSubmit,
    handleChange,
    showPassword,
    inputType,
    playerInfo,
    navigate,
  };
};
