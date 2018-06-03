import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { LoginButton, AccessToken } from "react-native-fbsdk";
import { Actions } from "react-native-router-flux";
import { Header, Button } from "../common";

const AuthView = () => {
  return (
    <View>
      <Header heading="TODO APP" />

      <Button onPress={() => Actions.loginView()} style={{ marginTop: 150 }}>
        Log in
      </Button>
      <Button
        onPress={() => Actions.signinView()}
        style={{ backgroundColor: "#f44336" }}
      >
        Sign Up
      </Button>

      <View style={styles.fbBtnStyle}>
        <LoginButton
          readPermissions={["public_profile"]}
          onLoginFinished={(error, result) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                alert(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => alert("logout.")}
        />
      </View>
    </View>
  );
};

const styles = {
  fbBtnStyle: {
    justifyContent: "center",
    alignItems: "center"
  }
};

export default AuthView;
