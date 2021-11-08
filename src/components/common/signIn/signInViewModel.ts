import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { requestSetLogin, requestSetName } from "../../../state-mgmt/store";

export const SignInViewModel = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [inputType, setInputType] = useState("password");

  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const requestBody = {
    query: `
      query  {
        login(
          userName: "${credentials.userName}",
          email: "${credentials.email}",
          password: "${credentials.password}") {
            userId
            token
            tokenExpiration
          }
      }
    `,
  };

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`\ncredentials`, credentials);
    setLoading(true);
    try {
      setLoading(false);

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
            dispatch(requestSetName({ credentials }));
            dispatch(
              requestSetLogin({
                userId: login.userId,
                status: true,
                token: login.token,
              })
            );
            history.push("/app/dashboard");
          }
        })
        .catch((err) => {
          console.log(`\nError Signing In: -->`, err);
        });
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  function showPassword() {
    setInputType(inputType === "text" ? "password" : "text");
  }

  return {
    credentials,
    error,
    loading,
    inputType,
    handleSubmit,
    handleChange,
    showPassword,
  };
};
