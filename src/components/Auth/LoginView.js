import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

class LoginView extends Component {
  render() {
    return (
      <View style={styles.containerStyles}>
        <View style={styles.inputContainerStyles}>
          <Text style={styles.labelStyles}>Email</Text>

          <TextInput style={styles.inputStyles} placeholder="john@gmail.com" />
        </View>

        <View style={styles.inputContainerStyles}>
          <Text style={styles.labelStyles}>Password</Text>
          <TextInput style={styles.inputStyles} placeholder="password" />
        </View>

        <TouchableOpacity style={styles.btnStyle}>
          <Text style={styles.btnTextStyle}>Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  containerStyles: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  inputContainerStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 40
  },
  labelStyles: {
    marginRight: 20,
    fontSize: 25,
    flex: 1
  },
  inputStyles: {
    flex: 2,
    height: 40,
    borderColor: "red",
    borderWidth: 2
  },
  btnStyle: {
    backgroundColor: "#008CBA",
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 15,
    alignSelf: "stretch"
  },
  btnTextStyle: {
    alignSelf: "center",
    fontSize: 15,
    color: "#fff"
  }
};

export default LoginView;
