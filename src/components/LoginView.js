import React from "react";
import { Text, View } from "react-native";
import { LoginButton, AccessToken } from "react-native-fbsdk";

export const LoginView = ({ fbLogoutFinished, fbLogin }) => {
  const loginFinished = async (err, res) => {
    if (err) alert("login has error: " + res.err);
    else if (res.isCancelled) alert("login is cancelled.");
    else {
      const user = await AccessToken.getCurrentAccessToken();
      if (user) fbLogin();
    }
  };

  const logoutFinished = () => {
    fbLogoutFinished();
    alert("logout.");
  };

  return (
    <View>
      <LoginButton
        readPermissions={["public_profile"]}
        onLoginFinished={(error, result) => loginFinished(error, result)}
        onLogoutFinished={() => logoutFinished()}
      />
    </View>
  );
};
// style={styles.container}
// <Text style={styles.title}>TODO LIST</Text>
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#57a1c1"
  },
  title: {
    fontSize: 40,
    fontFamily: "Courier-Bold",
    textAlign: "center",
    color: "#fff"
  }
};
