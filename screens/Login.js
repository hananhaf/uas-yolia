import * as React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={[styles.loginChild, styles.loginChildPosition]} />
      <View style={[styles.loginChild, styles.loginChildPosition]} />
      <View style={[styles.loginChild, styles.loginChildPosition]} />
      <View style={[styles.loginChild, styles.loginChildPosition]} />
      <Image
        style={[styles.rectangleIcon, styles.loginChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <View
        style={[
          styles.loginChild1,
          styles.loginChildLayout,
          styles.loginChildLayout1,
          styles.loginChild1Border,
        ]}
      />
      <Image
        style={[
          styles.loginChild2,
          styles.loginChildLayout,
          styles.loginChildLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Pressable
        style={[
          styles.rectanglePressable,
          styles.loginChildLayout,
          styles.loginChild1Border,
        ]}
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.username, styles.passwordTypo]}>Username</Text>
      <Text style={[styles.forgotPassword, styles.dontHaveAnTypo]}>
        Forgot Password?
      </Text>
      <Text style={[styles.dontHaveAn, styles.dontHaveAnTypo]}>
        Don’t have an account?Sign Up
      </Text>
      <Text style={[styles.cupsell, styles.login1FlexBox]}>CUPSELL</Text>
      <Text style={[styles.login1, styles.login1FlexBox]}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginChildPosition: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  loginChildLayout: {
    height: 46,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  loginChildLayout1: {
    width: 253,
    left: 60,
    height: 46,
    borderRadius: Border.br_md,
  },
  loginChild1Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  passwordTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.gray_400,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  dontHaveAnTypo: {
    fontSize: FontSize.size_2xs,
    color: Color.white,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  login1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  loginChild: {
    backgroundColor: Color.pink,
    height: 640,
  },
  rectangleIcon: {
    height: 800,
  },
  loginChild1: {
    top: 323,
    backgroundColor: Color.black,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "#fff",
  },
  loginChild2: {
    top: 395,
  },
  rectanglePressable: {
    top: 490,
    left: 128,
    backgroundColor: Color.white,
    borderColor: "#000",
    width: 118,
    height: 46,
    borderRadius: Border.br_md,
    borderWidth: 1,
    borderStyle: "solid",
  },
  password: {
    top: 409,
    left: 88,
  },
  username: {
    top: 337,
    left: 89,
  },
  forgotPassword: {
    top: 446,
    left: 226,
    color: Color.white,
  },
  dontHaveAn: {
    top: 558,
    left: 123,
    color: Color.white,
  },
  cupsell: {
    top: 186,
    left: 100,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.oswald,
    color: Color.white,
  },
  login1: {
    top: 501,
    left: 162,
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    textAlign: "center",
  },
  login: {
    backgroundColor: "#8c96ef",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default Login;
