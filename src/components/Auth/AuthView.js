import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { LoginButton, AccessToken } from "react-native-fbsdk";
import { Actions } from "react-native-router-flux";
import Header from "../Header";

const AuthView = () => {
  return (
    <View>
      <Header heading="TODO APP" />

      <TouchableOpacity
        onPress={() => Actions.loginView()}
        style={[styles.btnStyle, { marginTop: 150 }]}
      >
        <Text style={styles.btnTextStyle}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Actions.signinView()}
        style={[styles.btnStyle, { backgroundColor: "#f44336" }]}
      >
        <Text style={styles.btnTextStyle}>Sign Up</Text>
      </TouchableOpacity>
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
  btnStyle: {
    backgroundColor: "#008CBA",
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 15
  },
  btnTextStyle: {
    alignSelf: "center",
    fontSize: 15,
    color: "#fff"
  },
  fbBtnStyle: {
    justifyContent: "center",
    alignItems: "center"
  }
};

export default AuthView;
