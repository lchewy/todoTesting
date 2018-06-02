import React from "react";
import { Text, View } from "react-native";

export const Header = ({ heading }) => {
  return <Text style={styles.headingStyle}>{heading}</Text>;
};

const styles = {
  headingStyle: {
    fontSize: 40,
    fontFamily: "Courier-Bold",
    textAlign: "center",
    color: "#fff"
  }
};
