import React from "react";
import { View, ActivityIndicator } from "react-native";

export const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || "large"} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    // flex: 1,
    position:"absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 12
  }
};
