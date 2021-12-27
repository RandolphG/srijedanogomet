import {
  requestLoginAction,
  requestSetUserNameAction,
} from "../../state-mgmt/store";

const url: string = "http://localhost:8000/graphql";

export const doSomething = (body: { query: string }) => {
  return fetch("/api/endpoint", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
};

export const loginUser = (
  requestBody: any,
  dispatch: any,
  playerInfo: any,
  navigate: any
) => {
  return fetch(url, {
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
        return "Success";
      }
    })
    .catch((err) => {
      console.log(`\nError Signing In!`, err);
      return err;
    });
};

export const registerUser = async (requestBody: any) => {
  await fetch(url, {
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
      return response;
    })
    .catch((err) => {
      console.log(err[0]);
      return err;
    });
};
