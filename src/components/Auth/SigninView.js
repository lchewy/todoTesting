import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Button, Input } from "../common";

class Signin extends Component {
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

        <Button
          onPress={() => console.log("hi")}
          style={{ backgroundColor: "#f44336" }}
        >
          Sign up
        </Button>
      </View>
    );
  }
}

export default Signin;

const styles = {
  containerStyles: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
};
