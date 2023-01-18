import * as React from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AkunSaya = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.akunSaya, styles.iconLayout]}>
      <Pressable
        style={styles.arrowLeft1}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/36arrowleft1.png")}
        />
      </Pressable>
      <Text style={styles.akunSaya1}>Akun Saya</Text>
      <Image
        style={styles.akunSayaChild}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Pressable
        style={styles.profile}
        onPress={() => navigation.navigate("AkunSaya")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/11profile1.png")}
        />
      </Pressable>
      <Text style={[styles.immaculataYoliaDewi, styles.logoutTypo]}>
        Immaculata Yolia Dewi
      </Text>
      <View style={[styles.nohandphoneParent, styles.parentLayout]}>
        <Text style={[styles.nohandphone, styles.emailTypo]}>No.Handphone</Text>
        <Text style={styles.text}>0857 6764 5656</Text>
      </View>
      <View style={[styles.emailParent, styles.parentLayout]}>
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        <Text style={styles.text}>sriwahyuni@gmail.com</Text>
      </View>
      <View style={[styles.tentangParent, styles.parentLayout]}>
        <Text style={[styles.tentang, styles.emailTypo]}>Tentang</Text>
        <Text style={styles.text}>apa dia cakap tu opett?</Text>
      </View>
      <Pressable
        style={[styles.groupParent, styles.groupLayout]}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-41.png")}
        />
        <Text style={[styles.logout, styles.logoutTypo]}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  logoutTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  parentLayout: {
    height: 53,
    width: 287,
    borderBottomWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    left: 38,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  emailTypo: {
    height: 19,
    top: 8,
    left: 7,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 109,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrowLeft1: {
    left: 20,
    top: 20,
    width: 30,
    height: 30,
    position: "absolute",
  },
  akunSaya1: {
    top: 25,
    left: 132,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    color: Color.black,
    position: "absolute",
  },
  akunSayaChild: {
    top: 93,
    left: 127,
    width: 100,
    height: 100,
    position: "absolute",
  },
  profile: {
    left: 137,
    top: 103,
    width: 80,
    height: 80,
    position: "absolute",
  },
  immaculataYoliaDewi: {
    top: 210,
    left: 103,
    color: Color.black,
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  nohandphone: {
    width: 111,
  },
  text: {
    top: 31,
    fontSize: FontSize.size_base,
    left: 7,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  nohandphoneParent: {
    top: 236,
  },
  email: {
    width: 39,
  },
  emailParent: {
    top: 289,
  },
  tentang: {
    width: 58,
  },
  tentangParent: {
    top: 342,
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  logout: {
    top: 11,
    left: 31,
    color: Color.white,
  },
  groupParent: {
    top: 521,
    left: 117,
  },
  akunSaya: {
    flex: 1,
    height: 800,
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default AkunSaya;
