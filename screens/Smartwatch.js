import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Margin } from "../GlobalStyles";

const Smartwatch = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.smartwatch}>
      <View style={[styles.smartwatchInner, styles.groupParentLayout]}>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <View
            style={[
              styles.rectangleParent,
              styles.groupLayout1,
              styles.rectanglePosition,
            ]}
          >
            <View style={[styles.groupChild, styles.groupLayout1]} />
            <Image
              style={[styles.groupItem, styles.groupChildLayout1]}
              resizeMode="cover"
              source={require("../assets/group-241.png")}
            />
            <Image
              style={[styles.groupInner, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-541.png")}
            />
            <Text
              style={[styles.huaweiBand7Container, styles.huaweiContainerTypo]}
            >
              <Text style={styles.huaweiBand}>Huawei Band</Text>
              <Text style={styles.text}>7</Text>
            </Text>
            <Text style={[styles.rp59900000, styles.rp59900000Typo]}>
              Rp. 599.000,00
            </Text>
          </View>
          <View
            style={[
              styles.rectangleGroup,
              styles.groupLayout1,
              styles.rectanglePosition,
            ]}
          >
            <View style={[styles.groupChild, styles.groupLayout1]} />
            <Image
              style={[styles.rectangleIcon, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-521.png")}
            />
            <Text style={[styles.miBand6, styles.bandTypo]}>Mi Band 6</Text>
            <Text style={[styles.rp57900000, styles.rp57900000Typo]}>
              Rp. 579.000,00
            </Text>
            <Image
              style={[styles.groupIcon, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-241.png")}
            />
          </View>
          <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
            <View style={[styles.groupChild, styles.groupLayout1]} />
            <Image
              style={[styles.groupChild2, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-531.png")}
            />
            <Text style={[styles.appleWatchSeries, styles.rp337000000Typo]}>
              Apple Watch Series 3
            </Text>
            <Text style={[styles.rp337000000, styles.rp337000000Typo]}>
              Rp. 3.370.000,00
            </Text>
            <Image
              style={[styles.groupChild3, styles.groupChildLayout1]}
              resizeMode="cover"
              source={require("../assets/group-241.png")}
            />
          </View>
          <View style={[styles.groupView, styles.groupViewPosition]}>
            <View style={[styles.groupChild, styles.groupLayout1]} />
            <Image
              style={[styles.rp35000000Position, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-551.png")}
            />
            <Text style={[styles.miBand5, styles.bandTypo]}>Mi Band 5</Text>
            <Text
              style={[
                styles.rp35000000,
                styles.rp35000000Position,
                styles.rp57900000Typo,
              ]}
            >
              Rp. 350.000,00
            </Text>
            <Image
              style={[styles.groupChild6, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-241.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent1, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild, styles.groupLayout1]} />
            <Image
              style={[styles.groupChild8, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-561.png")}
            />
            <Text
              style={[styles.huaweiBand7Container1, styles.huaweiContainerTypo]}
            >
              <Text style={styles.huaweiBand}>Huawei Band</Text>
              <Text style={styles.text}>7</Text>
            </Text>
            <Text style={[styles.rp19500000, styles.rp59900000Typo]}>
              Rp. 195.000,00
            </Text>
            <Image
              style={[styles.groupChild9, styles.groupChildLayout1]}
              resizeMode="cover"
              source={require("../assets/group-242.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent2, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild, styles.groupLayout1]} />
            <Image
              style={[styles.groupChild8, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-581.png")}
            />
            <Text
              style={[styles.huaweiBand7Container1, styles.huaweiContainerTypo]}
            >
              Realme Band 2
            </Text>
            <Text style={[styles.rp19500000, styles.rp59900000Typo]}>
              Rp. 254.000,00
            </Text>
            <Image
              style={[styles.groupChild12, styles.groupChildLayout1]}
              resizeMode="cover"
              source={require("../assets/group-242.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameView, styles.frameViewPosition]}>
        <View style={styles.frameChild} />
        <Text style={styles.searchForBrand}>Search for brand</Text>
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/38search.png")}
        />
        <Pressable
          style={[styles.arrowLeft1, styles.bag6Layout]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/36arrowleft1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.bag6, styles.bag6Layout]}
          onPress={() => navigation.navigate("Keranjang")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/24bag62.png")}
          />
        </Pressable>
        <Text style={styles.smartwatch1}>SmartWatch</Text>
      </View>
      <View style={[styles.smartwatchChild, styles.frameViewPosition]}>
        <View style={[styles.rectangleParent3, styles.groupChild13Layout]}>
          <View style={[styles.groupChild13, styles.groupChild13Layout]} />
          <View style={[styles.groupContainer, styles.home11ParentLayout]}>
            <View style={[styles.home11Parent, styles.home11ParentLayout]}>
              <View style={[styles.home11, styles.noteLayout]}>
                <Image
                  style={[styles.vectorIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
                <Pressable
                  style={styles.vector}
                  onPress={() => navigation.navigate("Dashboard")}
                >
                  <Image
                    style={[styles.iconLayout, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/vector1.png")}
                  />
                </Pressable>
              </View>
              <Text style={styles.home}>Home</Text>
              <Pressable
                style={[styles.note, styles.noteLayout]}
                onPress={() => navigation.navigate("PesananDikirim")}
              >
                <Image
                  style={[styles.icon, styles.iconLayout1]}
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
                  style={[styles.icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/11profile.png")}
                />
              </Pressable>
            </View>
            <Text style={[styles.akun, styles.akunTypo]}>Akun</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    width: 334,
    position: "absolute",
  },
  groupLayout1: {
    height: 279,
    width: 160,
    position: "absolute",
  },
  rectanglePosition: {
    left: 2,
    width: 160,
  },
  groupChildLayout1: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  groupLayout: {
    height: 165,
    width: 135,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  huaweiContainerTypo: {
    width: 98,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rp59900000Typo: {
    width: 92,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  bandTypo: {
    width: 78,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rp57900000Typo: {
    width: 90,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  groupPosition: {
    left: 117,
    height: 25,
    width: 25,
    position: "absolute",
  },
  groupViewPosition: {
    left: 174,
    height: 279,
    width: 160,
    position: "absolute",
  },
  groupChildLayout: {
    top: 15,
    height: 165,
    width: 135,
    borderRadius: Border.br_xs,
  },
  rp337000000Typo: {
    left: 11,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  rp35000000Position: {
    left: 13,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 582,
    height: 279,
    width: 160,
    position: "absolute",
  },
  frameViewPosition: {
    width: 360,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  bag6Layout: {
    height: 30,
    top: 20,
    width: 30,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  groupChild13Layout: {
    height: 54,
    width: 302,
    position: "absolute",
  },
  home11ParentLayout: {
    height: 41,
    position: "absolute",
  },
  noteLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  groupChild: {
    borderRadius: Border.br_md,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    left: 0,
    top: 0,
    width: 160,
    backgroundColor: Color.white,
  },
  groupItem: {
    top: 231,
    left: 114,
  },
  groupInner: {
    top: 16,
    left: 9,
  },
  huaweiBand: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text: {
    margin: Margin.m_md,
  },
  huaweiBand7Container: {
    top: 191,
    left: 9,
  },
  rp59900000: {
    top: 237,
    left: 9,
  },
  rectangleParent: {
    top: 291,
  },
  rectangleIcon: {
    top: 9,
    left: 12,
  },
  miBand6: {
    top: 188,
    left: 12,
  },
  rp57900000: {
    top: 227,
    left: 12,
    position: "absolute",
  },
  groupIcon: {
    top: 220,
  },
  rectangleGroup: {
    top: 0,
  },
  groupChild2: {
    left: 8,
    position: "absolute",
  },
  appleWatchSeries: {
    top: 184,
    width: 94,
    left: 11,
    fontSize: FontSize.size_xl,
  },
  rp337000000: {
    top: 225,
    width: 106,
    fontSize: FontSize.size_base,
    left: 11,
  },
  groupChild3: {
    left: 123,
    top: 220,
  },
  rectangleContainer: {
    top: 0,
  },
  miBand5: {
    top: 191,
    left: 15,
  },
  rp35000000: {
    top: 237,
  },
  groupChild6: {
    top: 232,
  },
  groupView: {
    top: 291,
  },
  groupChild8: {
    top: 12,
    left: 12,
  },
  huaweiBand7Container1: {
    top: 177,
    left: 12,
  },
  rp19500000: {
    top: 229,
    left: 12,
  },
  groupChild9: {
    top: 806,
    left: 110,
  },
  rectangleParent1: {
    left: 0,
  },
  groupChild12: {
    top: 805,
    left: 282,
  },
  rectangleParent2: {
    left: 172,
  },
  groupParent: {
    height: 861,
    left: 0,
    top: 0,
  },
  smartwatchInner: {
    top: 149,
    height: 570,
    left: 15,
  },
  frameChild: {
    top: 82,
    backgroundColor: Color.gray_500,
    width: 320,
    height: 40,
    left: 20,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  searchForBrand: {
    top: 93,
    left: 79,
    fontSize: FontSize.size_2xl,
    color: Color.gray_600,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  searchIcon: {
    top: 91,
    left: 35,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    overflow: "hidden",
  },
  arrowLeft1: {
    left: 20,
  },
  bag6: {
    left: 302,
  },
  smartwatch1: {
    top: 22,
    left: 141,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  frameView: {
    height: 144,
    top: 0,
    overflow: "hidden",
  },
  groupChild13: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.black,
    left: 0,
    top: 0,
  },
  vectorIcon: {
    height: "7.5%",
    width: "26.25%",
    top: "63.96%",
    right: "36.88%",
    bottom: "28.54%",
    left: "36.88%",
    position: "absolute",
  },
  vector: {
    left: "4.58%",
    top: "4.58%",
    right: "4.58%",
    bottom: "4.58%",
    width: "90.83%",
    height: "90.83%",
    position: "absolute",
  },
  home11: {
    left: 8,
    top: 0,
    overflow: "hidden",
  },
  home: {
    top: 23,
    width: 36,
    height: 18,
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    left: 0,
    position: "absolute",
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
  groupContainer: {
    left: 45,
    width: 215,
    top: 7,
  },
  rectangleParent3: {
    left: 29,
    top: 7,
  },
  smartwatchChild: {
    top: 733,
    height: 67,
  },
  smartwatch: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Smartwatch;
