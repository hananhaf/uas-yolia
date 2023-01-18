import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splashscreen}
      onPress={() => navigation.navigate("Login")}
    >
      <Text style={styles.cupsell}>CUPSELL</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cupsell: {
    position: "absolute",
    top: 363,
    left: 99,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.oswald,
    color: Color.white,
    textAlign: "center",
  },
  splashscreen: {
    backgroundColor: Color.black,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Splashscreen;
