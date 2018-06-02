import React, { Component } from "react";
import { View } from "react-native";
import { AccessToken, LoginButton } from "react-native-fbsdk";
import { LoginView, Header } from "./components";

export default class App extends Component {
  state = { fbauth: false };

  async componentDidMount() {
    const user = await AccessToken.getCurrentAccessToken();
    if (user) this.setState({ fbauth: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header heading="TODO LIST"/>
        <LoginView
          fbLogoutFinished={() => this.setState({ fbauth: false })}
          fbLogin={() => this.setState({ fbauth: true })}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#57a1c1"
  }
}