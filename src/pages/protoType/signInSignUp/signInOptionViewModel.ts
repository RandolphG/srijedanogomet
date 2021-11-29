import SignIn from "./signIn";
import SignUp from "./signUp";

export const SignInOptionViewModel = () => {
  /* sign up & sign in views*/
  const signInOptionsView = [
    { id: 1, title: "signIn", component: SignIn },
    { id: 1, title: "signUp", component: SignUp },
  ];
  return { signInOptionsView };
};
