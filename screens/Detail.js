import * as React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Detail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detail}>
      <View style={[styles.detailChild, styles.childShadowBox]} />
      <Pressable
        style={[styles.arrowLeft1, styles.trollyLayout]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/36arrowleft19.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.trolly, styles.trollyLayout]}
        onPress={() => navigation.navigate("Keranjang")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/25trolly1.png")}
        />
      </Pressable>
      <Text style={[styles.detail1, styles.detail1Typo]}>Detail</Text>
      <Image
        style={styles.detailItem}
        resizeMode="cover"
        source={require("../assets/rectangle-37.png")}
      />
      <Text style={[styles.samsungGalaxyS20, styles.tersediaWarnaTypo]}>
        Samsung Galaxy S20
      </Text>
      <Text style={[styles.tersediaWarna, styles.tersediaWarnaTypo]}>
        Tersedia Warna :
      </Text>
      <Image
        style={[styles.detailInner, styles.detailInnerLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-38.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.detailInnerLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-39.png")}
      />
      <Text style={styles.samsungGalaxyS201}>
        Samsung Galaxy S20 menggunakan chipset seri terbaru Exynos 990. Samsung
        Galaxy S20 hadir dengan kualitas layar yang memanjakan dan set kamera
        yang komplet dan dapat diandalkan untuk fotografi.
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Detail1")}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.childShadowBox,
          ]}
        />
        <Text style={[styles.keranjang, styles.detail1Typo]}>Keranjang</Text>
        <Image
          style={styles.trollyIcon}
          resizeMode="cover"
          source={require("../assets/25trolly2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  childShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.black,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  trollyLayout: {
    height: 30,
    width: 30,
    top: 18,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  detail1Typo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  tersediaWarnaTypo: {
    textAlign: "center",
    color: Color.gray_300,
    fontWeight: "700",
    fontSize: FontSize.size_2xl,
    left: 25,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  detailInnerLayout: {
    height: 172,
    width: 137,
    top: 503,
    position: "absolute",
  },
  groupChildLayout: {
    height: 40,
    width: 128,
    position: "absolute",
  },
  detailChild: {
    width: 360,
    height: 319,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  arrowLeft1: {
    left: 11,
  },
  trolly: {
    left: 305,
  },
  detail1: {
    top: 21,
    left: 154,
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
  },
  detailItem: {
    top: 64,
    left: 43,
    width: 274,
    height: 307,
    position: "absolute",
  },
  samsungGalaxyS20: {
    top: 369,
  },
  tersediaWarna: {
    top: 493,
  },
  detailInner: {
    borderRadius: Border.br_sm,
    left: 25,
    height: 172,
    width: 137,
    top: 503,
  },
  rectangleIcon: {
    left: 176,
  },
  samsungGalaxyS201: {
    top: 400,
    left: 29,
    fontSize: FontSize.size_base,
    color: Color.black,
    textAlign: "justify",
    display: "flex",
    alignItems: "center",
    width: 305,
    height: 60,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
  },
  keranjang: {
    top: 11,
    left: 51,
    fontSize: FontSize.size_xl,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
  },
  trollyIcon: {
    top: 8,
    left: 19,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 704,
    left: 116,
  },
  detail: {
    backgroundColor: Color.white,
    shadowRadius: 1,
    elevation: 1,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default Detail;
