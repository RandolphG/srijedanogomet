import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  requestLoginAction,
  requestSetUserNameAction,
} from "../../state-mgmt/store";

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
    fetch("http://localhost:8000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          console.log(`\nFailure!`, response);
          throw new Error("Failed");
        }
        console.log(`\nSuccess!`, response);
        return response.json();
      })
      .then(({ data }) => {
        const { login } = data;
        console.log(`\nlogin`, login);

        if (login.token) {
          dispatch(requestSetUserNameAction(playerInfo));
          dispatch(
            requestLoginAction({
              isLoggedIn: {
                userId: login.userId,
                status: true,
                token: login.token,
              },
            })
          );
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(`\nError Signing In: `, err);
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