import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Margin } from "../GlobalStyles";

const SmartPhone = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.smartphone, styles.iconLayout]}>
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <View style={[styles.frameChild, styles.childPosition]} />
        <Text style={styles.searchForBrand}>Search for brand</Text>
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/38search.png")}
        />
        <Text style={styles.smartphone1}>SmartPhone</Text>
        <Pressable
          style={[styles.arrowLeft1, styles.bag6Position]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/36arrowleft1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.bag6, styles.bag6Position]}
          onPress={() => navigation.navigate("Keranjang")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/24bag6.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.smartphoneInner, styles.groupParentLayout]}>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <View
            style={[
              styles.rectangleGroup,
              styles.groupLayout2,
              styles.rectangleLayout,
            ]}
          >
            <View
              style={[
                styles.groupChild,
                styles.groupChildShadowBox,
                styles.groupLayout2,
              ]}
            />
            <Image
              style={[styles.groupItem, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-58.png")}
            />
            <Text style={styles.iphone11Pro}>Iphone 11 Pro</Text>
            <Text
              style={[
                styles.rp972900000,
                styles.rp972900000Typo,
                styles.rp972900000Position,
              ]}
            >
              Rp. 9.729.000,00
            </Text>
            <Image
              style={[styles.groupInner, styles.groupLayout1]}
              resizeMode="cover"
              source={require("../assets/group-241.png")}
            />
          </View>
          <View
            style={[
              styles.rectangleContainer,
              styles.groupLayout2,
              styles.rectangleLayout,
            ]}
          >
            <View
              style={[
                styles.groupChild,
                styles.groupChildShadowBox,
                styles.groupLayout2,
              ]}
            />
            <Image
              style={[styles.groupItem, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-60.png")}
            />
            <Text style={styles.iphone11Pro}>Samsung S22 Ultra</Text>
            <Text
              style={[
                styles.rp1852900000,
                styles.rp972900000Typo,
                styles.rp972900000Position,
              ]}
            >
              Rp. 18.529.000,00
            </Text>
            <Image
              style={[styles.groupIcon, styles.groupLayout1]}
              resizeMode="cover"
              source={require("../assets/group-241.png")}
            />
          </View>
          <Pressable
            style={[styles.groupContainer, styles.groupChildPosition2]}
            onPress={() => navigation.navigate("Detail")}
          >
            <Image
              style={[styles.groupChild1, styles.groupChildPosition1]}
              resizeMode="cover"
              source={require("../assets/group-13.png")}
            />
            <View
              style={[
                styles.groupChild2,
                styles.groupChildPosition2,
                styles.groupChildShadowBox,
              ]}
            />
            <Image
              style={[styles.groupChild3, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-29.png")}
            />
            <Text
              style={[styles.samsungGalaxyS20Container, styles.redmiNote10Typo]}
            >
              <Text style={styles.samsungGalaxy}>Samsung Galaxy</Text>
              <Text style={styles.s20}>S20</Text>
            </Text>
            <Text style={[styles.rp872900000, styles.rp872900000Typo]}>
              Rp. 8.729.000,00
            </Text>
            <Image
              style={[styles.groupChild4, styles.groupChildPosition1]}
              resizeMode="cover"
              source={require("../assets/group-26.png")}
            />
          </Pressable>
          <View style={[styles.groupView, styles.groupChildPosition2]}>
            <View
              style={[
                styles.groupChild5,
                styles.groupChildPosition2,
                styles.groupChildShadowBox,
              ]}
            />
            <Image
              style={[styles.groupChild6, styles.childPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-56.png")}
            />
            <Text style={[styles.redmiNote10, styles.redmiNote10Typo]}>
              Redmi Note 10 5G
            </Text>
            <Text style={[styles.rp337000000, styles.rp872900000Typo]}>
              Rp. 3.370.000,00
            </Text>
            <Image
              style={styles.groupChild7}
              resizeMode="cover"
              source={require("../assets/group-27.png")}
            />
          </View>
          <View style={[styles.groupParent1, styles.groupLayout]}>
            <Image
              style={[styles.groupChild8, styles.groupChildPosition1]}
              resizeMode="cover"
              source={require("../assets/group-19.png")}
            />
            <View
              style={[
                styles.groupChild9,
                styles.groupLayout,
                styles.groupChildShadowBox,
              ]}
            />
            <Image
              style={[styles.groupChild10, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-252.png")}
            />
            <Image
              style={styles.groupChild11}
              resizeMode="cover"
              source={require("../assets/rectangle-63.png")}
            />
            <Text style={[styles.rp1439900000, styles.rp972900000Typo]}>
              Rp. 14.399.000,00
            </Text>
            <Text style={[styles.samsungZFlip, styles.redmiNote12Typo]}>
              Samsung Z Flip 4 5G
            </Text>
          </View>
          <View style={[styles.rectangleParent1, styles.groupLayout2]}>
            <View
              style={[
                styles.groupChild,
                styles.groupChildShadowBox,
                styles.groupLayout2,
              ]}
            />
            <Image
              style={styles.groupChild13}
              resizeMode="cover"
              source={require("../assets/rectangle-64.png")}
            />
            <Text style={[styles.rp1299900000, styles.rp972900000Typo]}>
              Rp. 12.999.000,00
            </Text>
            <Text style={[styles.redmiNote12, styles.redmiNote12Typo]}>
              Redmi Note 12 Pro
            </Text>
            <Image
              style={[styles.groupChild14, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-242.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.smartphoneChild, styles.rectangleParentPosition]}>
        <View style={[styles.rectangleParent2, styles.groupChild15Layout]}>
          <View style={[styles.groupChild15, styles.groupChild15Layout]} />
          <View style={[styles.groupParent2, styles.parentLayout]}>
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
              <Text style={styles.home}>Home</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  rectangleParentPosition: {
    width: 360,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  childPosition: {
    borderRadius: Border.br_xs,
    left: 18,
    position: "absolute",
  },
  bag6Position: {
    top: 20,
    height: 30,
    width: 30,
    position: "absolute",
  },
  groupParentLayout: {
    width: 333,
    position: "absolute",
  },
  groupLayout2: {
    height: 279,
    position: "absolute",
  },
  rectangleLayout: {
    width: 161,
    top: 286,
    height: 279,
  },
  groupChildShadowBox: {
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_md,
    left: 0,
    backgroundColor: Color.white,
  },
  groupPosition: {
    left: 2,
    top: 0,
    position: "absolute",
  },
  rp972900000Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  rp972900000Position: {
    top: 235,
    fontSize: FontSize.size_base,
    left: 6,
  },
  groupLayout1: {
    height: 25,
    top: 231,
    width: 25,
    position: "absolute",
  },
  groupChildPosition2: {
    height: 272,
    top: 0,
    position: "absolute",
  },
  groupChildPosition1: {
    left: 114,
    position: "absolute",
  },
  redmiNote10Typo: {
    height: 35,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  rp872900000Typo: {
    height: 15,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  groupLayout: {
    width: 155,
    height: 279,
    position: "absolute",
  },
  groupChildPosition: {
    top: 805,
    height: 25,
    position: "absolute",
  },
  redmiNote12Typo: {
    top: 181,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  groupChild15Layout: {
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
    top: 24,
    color: Color.white,
    height: 15,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  frameChild: {
    top: 81,
    backgroundColor: Color.gray_500,
    width: 320,
    height: 40,
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
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  smartphone1: {
    top: 27,
    left: 124,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft1: {
    left: 20,
    height: 30,
    width: 30,
  },
  bag6: {
    left: 302,
    height: 30,
    width: 30,
  },
  rectangleParent: {
    height: 144,
    top: 0,
    overflow: "hidden",
  },
  groupChild: {
    width: 160,
    top: 0,
  },
  groupItem: {
    height: 187,
    width: 159,
  },
  iphone11Pro: {
    top: 187,
    width: 145,
    fontSize: FontSize.size_xl,
    left: 6,
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  rp972900000: {
    width: 100,
  },
  groupInner: {
    left: 115,
  },
  rectangleGroup: {
    left: 0,
  },
  rp1852900000: {
    width: 111,
  },
  groupIcon: {
    left: 121,
  },
  rectangleContainer: {
    left: 172,
  },
  groupChild1: {
    top: 214,
    height: 29,
    width: 30,
  },
  groupChild2: {
    width: 159,
  },
  groupChild3: {
    width: 158,
    height: 182,
  },
  samsungGalaxy: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  s20: {
    margin: Margin.m_md,
  },
  samsungGalaxyS20Container: {
    top: 182,
    width: 144,
    left: 6,
  },
  rp872900000: {
    width: 99,
    top: 229,
    left: 6,
  },
  groupChild4: {
    top: 216,
    width: 25,
    height: 24,
  },
  groupContainer: {
    left: 1,
    width: 160,
  },
  groupChild5: {
    width: 160,
  },
  groupChild6: {
    top: 34,
    width: 124,
    height: 118,
  },
  redmiNote10: {
    top: 183,
    width: 115,
    left: 11,
  },
  rp337000000: {
    top: 230,
    width: 106,
    left: 11,
  },
  groupChild7: {
    top: 224,
    left: 122,
    width: 25,
    height: 24,
    position: "absolute",
  },
  groupView: {
    left: 172,
    width: 160,
  },
  groupChild8: {
    top: 802,
    width: 29,
    height: 30,
  },
  groupChild9: {
    top: 0,
  },
  groupChild10: {
    left: 122,
    width: 24,
  },
  groupChild11: {
    top: 18,
    width: 133,
    height: 169,
    left: 11,
    position: "absolute",
  },
  rp1439900000: {
    width: 108,
    left: 9,
    top: 229,
  },
  samsungZFlip: {
    width: 119,
    left: 11,
  },
  groupParent1: {
    left: 3,
    top: 582,
  },
  groupChild13: {
    top: 15,
    width: 141,
    height: 162,
    left: 9,
    position: "absolute",
  },
  rp1299900000: {
    top: 232,
    width: 109,
    left: 9,
  },
  redmiNote12: {
    width: 120,
    left: 9,
  },
  groupChild14: {
    left: 294,
    width: 25,
  },
  rectangleParent1: {
    left: 170,
    top: 582,
    width: 160,
  },
  groupParent: {
    height: 861,
    left: 0,
    top: 0,
  },
  smartphoneInner: {
    top: 149,
    left: 17,
    height: 574,
  },
  groupChild15: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.black,
    left: 0,
    top: 0,
  },
  home11: {
    left: 8,
    top: 0,
  },
  home: {
    top: 23,
    width: 36,
    height: 18,
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
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
  },
  groupParent2: {
    left: 45,
    width: 215,
    top: 7,
  },
  rectangleParent2: {
    left: 29,
    top: 7,
  },
  smartphoneChild: {
    top: 733,
    height: 67,
  },
  smartphone: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default SmartPhone;
