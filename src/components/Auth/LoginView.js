import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Button, Input } from "../common";

class LoginView extends Component {
  render() {
    return (
      <View style={styles.containerStyles}>
        <Input
          label="Email"
          placeholder="john@gmail.com"
          onChangeText={() => []}
          value=""
        />

        <Input
          label="Password"
          secureTextEntry
          placeholder="password"
          onChangeText={() => []}
          value=""
        />

        <Button onPress={() => console.log("hi")}>Log in</Button>
      </View>
    );
  }
}

export default LoginView;

const styles = {
  containerStyles: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
};