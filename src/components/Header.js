import React from "react";
import { Text, View } from "react-native";

const Header = ({ heading }) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>{heading}</Text>
    </View>
  );
};

const styles = {
    headerStyle:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        paddingTop: 20,
    },
    textStyle:{
        fontSize: 50,
        fontFamily: "Futura-Medium"
    }
}

export default Header;
