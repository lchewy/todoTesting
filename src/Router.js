import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import AuthView from "./components/Auth/AuthView";
import LoginView from "./components/Auth/LoginView";
import SigninView from "./components/Auth/SigninView";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="authView"
          component={AuthView}
          title="Login/Signup"
          initial
        />
        <Scene
          key="loginView"
          component={LoginView}
          title="Login w/ Email"
        />
        <Scene
          key="signinView"
          component={SigninView}
          title="Signin w/ Email"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
