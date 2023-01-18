import * as React from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Margin } from "../GlobalStyles";

const Keranjang = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.keranjang, styles.iconLayout]}>
      <Image
        style={[styles.arrowLeft1Icon, styles.arrowPosition]}
        resizeMode="cover"
        source={require("../assets/36arrowleft1.png")}
      />
      <Pressable
        style={styles.arrowPosition}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/36arrowleft1.png")}
        />
      </Pressable>
      <Text style={styles.keranjang1}>Keranjang</Text>
      <Text style={styles.keranjang1}>Keranjang</Text>
      <View style={styles.frameParent}>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <Image
            style={[styles.frameChild, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-46.png")}
          />
          <Text style={[styles.samsungGalaxyS20, styles.asusZenbook14Typo]}>
            Samsung Galaxy S20
          </Text>
          <Text style={[styles.couldPink128Container, styles.containerTypo]}>
            <Text style={styles.couldPink128}>Could pink, 128 GB</Text>
            <Text style={styles.smG980flbdxid}>SM-G980FLBDXID</Text>
          </Text>
          <Text style={[styles.rp872900000, styles.homeTypo]}>
            Rp. 8.729.000,00
          </Text>
          <View style={[styles.rectangleGroup, styles.groupLayout1]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text style={[styles.text, styles.textTypo]}>+</Text>
            <Text style={[styles.text1, styles.textTypo]}>-</Text>
            <Text style={[styles.text2, styles.homeTypo]}>1</Text>
          </View>
        </View>
        <Image
          style={styles.trashIcon}
          resizeMode="cover"
          source={require("../assets/61trash.png")}
        />
      </View>
      <Text style={[styles.rp8729000001, styles.rp8729000001Typo]}>
        Rp. 8.729.000,00
      </Text>
      <Text style={[styles.totalPesanan, styles.rp8729000001Typo]}>
        Total Pesanan
      </Text>
      <Pressable
        style={[styles.vectorParent, styles.groupInnerLayout]}
        onPress={() => navigation.navigate("Checkout3")}
      >
        <Image
          style={[styles.groupInner, styles.groupInnerLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Text style={[styles.bayarSekarang, styles.bayarSekarangTypo]}>
          Bayar Sekarang
        </Text>
      </Pressable>
      <View
        style={[
          styles.groupParent,
          styles.groupParentLayout,
          styles.groupLayout2,
        ]}
      >
        <View style={[styles.rectangleContainer, styles.groupLayout1]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo]}>+</Text>
          <Text style={[styles.text1, styles.textTypo]}>-</Text>
          <Text style={[styles.text2, styles.homeTypo]}>1</Text>
        </View>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-43.png")}
        />
        <Text style={[styles.asusZenbook14, styles.asusZenbook14Typo]}>
          Asus Zenbook 14
        </Text>
        <Text style={[styles.lilacmist512GbContainer, styles.containerTypo]}>
          <Text style={styles.couldPink128}>Lilacmist, 512 GB</Text>
          <Text style={styles.smG980flbdxid}>UM425UA</Text>
        </Text>
        <Text style={[styles.rp1449900000, styles.rp59900000Typo]}>
          Rp. 14.499.000,00
        </Text>
      </View>
      <View
        style={[
          styles.groupContainer,
          styles.groupParentLayout,
          styles.groupLayout2,
        ]}
      >
        <View style={[styles.groupView, styles.groupLayout1]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo]}>+</Text>
          <Text style={[styles.text1, styles.textTypo]}>-</Text>
          <Text style={[styles.text2, styles.homeTypo]}>1</Text>
        </View>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-431.png")}
        />
        <Text style={[styles.graphiteBlack, styles.containerTypo]}>
          Graphite Black
        </Text>
        <Text style={[styles.rp59900000, styles.rp59900000Typo]}>
          Rp. 599.000,00
        </Text>
        <Text style={[styles.huaweiBand7Container, styles.bayarSekarangTypo]}>
          <Text style={styles.couldPink128}>Huawei Band</Text>
          <Text style={styles.smG980flbdxid}>7</Text>
        </Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupChild4Layout]}>
        <View style={[styles.groupChild4, styles.groupChild4Layout]} />
        <View style={[styles.groupParent1, styles.parentLayout]}>
          <View style={[styles.home11Parent, styles.parentLayout]}>
            <Pressable
              style={[styles.home11, styles.noteLayout]}
              onPress={() => navigation.navigate("Dashboard")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/2home11.png")}
              />
            </Pressable>
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            <Pressable
              style={[styles.note, styles.noteLayout]}
              onPress={() => navigation.navigate("PesananDikirim")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/8note.png")}
              />
            </Pressable>
            <Text style={[styles.pesanan, styles.akunTypo]}>Pesanan</Text>
            <Pressable
              style={[styles.profile, styles.noteLayout]}
              onPress={() => navigation.navigate("AkunSaya")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/11profile.png")}
              />
            </Pressable>
          </View>
          <Text style={[styles.akun, styles.akunTypo]}>Akun</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  arrowPosition: {
    height: 30,
    left: 20,
    width: 30,
    top: 20,
    position: "absolute",
  },
  groupParentLayout: {
    backgroundColor: Color.gray_100,
    height: 135,
    borderRadius: Border.br_xs,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    height: 102,
    width: 99,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  asusZenbook14Typo: {
    textAlign: "center",
    color: Color.gray_300,
    fontWeight: "700",
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  containerTypo: {
    fontSize: FontSize.size_lg,
    color: Color.gray_300,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  homeTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  groupLayout1: {
    height: 22,
    width: 51,
    position: "absolute",
  },
  groupLayout: {
    width: 17,
    borderRadius: Border.br_2xs,
    height: 22,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    top: 3,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  rp8729000001Typo: {
    top: 619,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  groupInnerLayout: {
    height: 40,
    width: 165,
    position: "absolute",
  },
  bayarSekarangTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  groupLayout2: {
    width: 333,
    backgroundColor: Color.gray_100,
  },
  rp59900000Typo: {
    width: 108,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  groupChild4Layout: {
    height: 54,
    width: 302,
    position: "absolute",
  },
  parentLayout: {
    height: 41,
    position: "absolute",
  },
  noteLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  akunTypo: {
    height: 15,
    top: 24,
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  arrowLeft1Icon: {
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  keranjang1: {
    left: 139,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    color: Color.black,
    fontWeight: "500",
    top: 23,
    position: "absolute",
  },
  frameChild: {
    left: 11,
    top: 21,
  },
  samsungGalaxyS20: {
    left: 112,
    top: 21,
  },
  couldPink128: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  smG980flbdxid: {
    margin: Margin.m_md,
  },
  couldPink128Container: {
    top: 40,
    left: 112,
  },
  rp872900000: {
    top: 85,
    width: 106,
    left: 112,
    color: Color.black,
  },
  groupChild: {
    left: 0,
    backgroundColor: Color.white,
  },
  groupItem: {
    left: 34,
    backgroundColor: Color.black,
  },
  text: {
    left: 38,
    width: 8,
    color: Color.white,
  },
  text1: {
    left: 6,
    width: 5,
    color: Color.black,
  },
  text2: {
    top: 4,
    left: 23,
    width: 7,
    color: Color.black,
  },
  rectangleGroup: {
    top: 82,
    left: 227,
  },
  rectangleParent: {
    width: 287,
    left: 0,
    top: 0,
  },
  trashIcon: {
    top: 56,
    left: 296,
    width: 24,
    height: 24,
    position: "absolute",
  },
  frameParent: {
    height: 135,
    borderRadius: Border.br_xs,
    width: 333,
    backgroundColor: Color.black,
    left: 13,
    top: 79,
    position: "absolute",
    overflow: "hidden",
  },
  rp8729000001: {
    left: 222,
    width: 106,
  },
  totalPesanan: {
    left: 28,
  },
  groupInner: {
    borderRadius: Border.br_md,
    left: 0,
    top: 0,
  },
  bayarSekarang: {
    top: 11,
    left: 31,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.white,
  },
  vectorParent: {
    top: 652,
    left: 98,
  },
  rectangleContainer: {
    left: 248,
    top: 79,
    width: 51,
  },
  frameItem: {
    left: 10,
    top: 20,
  },
  asusZenbook14: {
    left: 115,
    top: 20,
  },
  lilacmist512GbContainer: {
    top: 45,
    left: 115,
  },
  rp1449900000: {
    top: 83,
    left: 116,
  },
  groupParent: {
    top: 234,
    left: 13,
    width: 333,
  },
  groupView: {
    top: 84,
    left: 249,
  },
  graphiteBlack: {
    top: 59,
    left: 115,
  },
  rp59900000: {
    top: 87,
    left: 115,
  },
  huaweiBand7Container: {
    width: 139,
    left: 115,
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    top: 20,
  },
  groupContainer: {
    top: 389,
    left: 16,
  },
  groupChild4: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    backgroundColor: Color.black,
  },
  home11: {
    left: 8,
    top: 0,
  },
  home: {
    width: 36,
    height: 18,
    color: Color.white,
    left: 0,
    top: 23,
    fontSize: FontSize.size_base,
  },
  note: {
    left: 96,
    top: 1,
  },
  pesanan: {
    left: 81,
    width: 52,
  },
  profile: {
    left: 190,
    top: 0,
  },
  home11Parent: {
    width: 210,
    left: 0,
    top: 0,
  },
  akun: {
    left: 185,
    width: 30,
    top: 24,
  },
  groupParent1: {
    top: 7,
    left: 45,
    width: 215,
  },
  rectangleParent1: {
    top: 738,
    left: 30,
  },
  keranjang: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Keranjang;
