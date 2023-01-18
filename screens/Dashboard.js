import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Margin } from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboard}>
      <Text style={styles.hello}>Hello,</Text>
      <Text style={[styles.yoliaDewi, styles.homeTypo]}>Yolia Dewi</Text>
      <View style={styles.dashboardChild} />
      <Pressable
        style={styles.notification}
        onPress={() => navigation.navigate("Checkout")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/76notification.png")}
        />
      </Pressable>
      <Text style={[styles.searchForBrand, styles.allProductTypo]}>
        Search for brand
      </Text>
      <Image
        style={styles.searchIcon}
        resizeMode="cover"
        source={require("../assets/38search.png")}
      />
      <Text style={[styles.allProduct, styles.allProductTypo]}>
        All Product
      </Text>
      <Text style={[styles.newArrival, styles.homeTypo]}>New Arrival</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.groupParent, styles.parentLayout]}>
          <View style={[styles.home11Parent, styles.parentLayout]}>
            <Image
              style={[styles.home11Icon, styles.noteLayout]}
              resizeMode="cover"
              source={require("../assets/2home11.png")}
            />
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
          <Text style={[styles.akun, styles.akunLayout, styles.akunTypo]}>
            Akun
          </Text>
        </View>
      </View>
      <View style={styles.dashboardInner}>
        <View style={[styles.groupContainer, styles.groupContainerLayout]}>
          <View style={[styles.rectangleGroup, styles.groupContainerLayout]}>
            <View
              style={[
                styles.groupItem,
                styles.groupLayout2,
                styles.groupShadowBox,
              ]}
            />
            <Image
              style={[
                styles.groupInner,
                styles.groupLayout1,
                styles.groupInnerLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/rectangle-24.png")}
            />
            <Text style={[styles.samsungGalaxyS21Container, styles.homeTypo]}>
              <Text style={styles.samsungGalaxy}>Samsung Galaxy</Text>
              <Text style={styles.s21}>S21</Text>
            </Text>
            <Text style={[styles.rp872900000, styles.homeTypo]}>
              Rp. 8.729.000,00
            </Text>
            <Image
              style={[styles.groupIcon, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-24.png")}
            />
          </View>
          <View
            style={[styles.rectangleContainer, styles.groupContainerLayout]}
          >
            <View
              style={[
                styles.groupItem,
                styles.groupLayout2,
                styles.groupShadowBox,
              ]}
            />
            <Image
              style={[
                styles.rectangleIcon,
                styles.groupLayout1,
                styles.groupInnerLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/rectangle-25.png")}
            />
            <Text style={[styles.redmiNote10Container, styles.rp249900000Typo]}>
              <Text style={styles.samsungGalaxy}>Redmi Note 10</Text>
              <Text style={styles.s21}>5G</Text>
            </Text>
            <Text style={[styles.rp249900000, styles.rp249900000Typo]}>
              Rp. 2.499.000,00
            </Text>
            <Image
              style={[styles.groupChild1, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-25.png")}
            />
          </View>
          <View style={[styles.groupView, styles.groupLayout2]}>
            <View
              style={[
                styles.groupItem,
                styles.groupLayout2,
                styles.groupShadowBox,
              ]}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-28.png")}
            />
            <Image
              style={[styles.groupChild4, styles.groupChild4Layout]}
              resizeMode="cover"
              source={require("../assets/rectangle-31.png")}
            />
            <Text
              style={[styles.vivobook1412042Typo, styles.groupChild4Layout]}
            >
              VivoBook 14 (12042 12th Gen Intel
            </Text>
            <Text
              style={[
                styles.rp1065500000,
                styles.groupChild6Position,
                styles.homeTypo,
              ]}
            >
              Rp. 10.655.000,00
            </Text>
          </View>
          <View style={[styles.rectangleParent1, styles.groupContainerLayout]}>
            <View
              style={[
                styles.groupItem,
                styles.groupLayout2,
                styles.groupShadowBox,
              ]}
            />
            <Image
              style={[styles.groupChild6, styles.groupChild6Position]}
              resizeMode="cover"
              source={require("../assets/rectangle-32.png")}
            />
            <Text
              style={[styles.asusUltra15Container, styles.vivobook1412042Typo]}
            >
              <Text style={styles.samsungGalaxy}>Asus Ultra 15</Text>
              <Text style={styles.s21}>OLED</Text>
            </Text>
            <Text style={[styles.rp871280000, styles.rp59900000Typo]}>
              Rp. 8.712.800,00
            </Text>
            <Image
              style={[styles.groupChild7, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-28.png")}
            />
          </View>
          <View style={[styles.rectangleParent2, styles.groupContainerLayout]}>
            <View
              style={[
                styles.groupChild8,
                styles.groupShadowBox,
                styles.groupContainerLayout,
              ]}
            />
            <Image
              style={[styles.groupChild9, styles.groupLayout1]}
              resizeMode="cover"
              source={require("../assets/rectangle-35.png")}
            />
            <Text
              style={[styles.huaweiBand7Container, styles.huaweiContainerTypo]}
            >
              <Text style={styles.samsungGalaxy}>Huawei Band</Text>
              <Text style={styles.s21}>7</Text>
            </Text>
            <Text
              style={[styles.huaweiBand7Container1, styles.huaweiContainerTypo]}
            >
              <Text style={styles.samsungGalaxy}>Huawei Band</Text>
              <Text style={styles.s21}>7</Text>
            </Text>
            <Text style={[styles.rp59900000, styles.rp59900000Typo]}>
              Rp. 599.000,00
            </Text>
            <Image
              style={[styles.groupChild10, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-29.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameView, styles.frameViewLayout]}>
        <View style={[styles.component1variant3Parent, styles.frameViewLayout]}>
          <View style={styles.component1variant3}>
            <View
              style={[
                styles.component1variant3Child,
                styles.component1variant3Position,
              ]}
            />
            <Text
              style={[styles.allProduct1, styles.allTypo, styles.laptopLayout]}
            >
              All Product
            </Text>
          </View>
          <Pressable
            style={[
              styles.component1variant31,
              styles.component1variantShadowBox,
            ]}
            onPress={() => navigation.navigate("SmartPhone")}
          >
            <View
              style={[
                styles.component1variant3Item,
                styles.component1variant3Position,
              ]}
            />
            <Text style={styles.smartphone}>SmartPhone</Text>
          </Pressable>
          <Pressable
            style={[
              styles.component1variant32,
              styles.component1variantShadowBox,
            ]}
            onPress={() => navigation.navigate("Laptop")}
          >
            <View
              style={[
                styles.component1variant3Item,
                styles.component1variant3Position,
              ]}
            />
            <Text style={[styles.laptop, styles.allTypo, styles.laptopLayout]}>
              Laptop
            </Text>
          </Pressable>
          <Pressable
            style={[styles.component1, styles.component1variantShadowBox]}
            onPress={() => navigation.navigate("Smartwatch")}
          >
            <View
              style={[
                styles.component1variant3Item,
                styles.component1variant3Position,
              ]}
            />
            <Text style={[styles.allProduct2, styles.allTypo]}>
              Smart Watch
            </Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={[styles.trolly, styles.akunLayout]}
        onPress={() => navigation.navigate("Keranjang")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/25trolly.png")}
        />
      </Pressable>
      <View
        style={[
          styles.dashboardInner1,
          styles.groupChild12Layout,
          styles.groupChild12Layout1,
        ]}
      >
        <View style={[styles.rectangleParent3, styles.groupChild12Layout]}>
          <Image
            style={[styles.groupChild11, styles.wrapperLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-18.png")}
          />
          <Image
            style={[
              styles.groupChild12,
              styles.groupChild12Layout,
              styles.groupChild12Layout1,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-5.png")}
          />
          <Pressable
            style={[styles.wrapper, styles.wrapperLayout]}
            onPress={() => navigation.navigate("Detail")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/rectangle-16.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeTypo: {
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    textAlign: "left",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  allProductTypo: {
    textAlign: "center",
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  groupChildLayout: {
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
    fontSize: FontSize.size_base,
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    textAlign: "left",
  },
  akunLayout: {
    width: 30,
    position: "absolute",
  },
  groupContainerLayout: {
    height: 305,
    position: "absolute",
  },
  groupLayout2: {
    width: 165,
    height: 305,
    top: 0,
    position: "absolute",
  },
  groupShadowBox: {
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderColor: "#000",
    left: 0,
    backgroundColor: Color.white,
  },
  groupLayout1: {
    height: 187,
    position: "absolute",
  },
  groupInnerLayout: {
    width: 164,
    height: 187,
  },
  groupLayout: {
    height: 25,
    width: 26,
    position: "absolute",
  },
  rp249900000Typo: {
    left: 17,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  groupChildPosition: {
    top: 248,
    height: 25,
    width: 26,
    position: "absolute",
  },
  groupChild4Layout: {
    width: 152,
    left: 6,
  },
  groupChild6Position: {
    left: 6,
    position: "absolute",
  },
  vivobook1412042Typo: {
    top: 196,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rp59900000Typo: {
    top: 253,
    left: 10,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  huaweiContainerTypo: {
    top: 201,
    left: 10,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  frameViewLayout: {
    height: 33,
    position: "absolute",
  },
  component1variant3Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: "100%",
    borderRadius: Border.br_xs,
    position: "absolute",
    width: "100%",
  },
  allTypo: {
    left: "15.65%",
    top: "18.75%",
    textAlign: "center",
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  laptopLayout: {
    width: "69.57%",
    left: "15.65%",
  },
  component1variantShadowBox: {
    backgroundColor: Color.gray_700,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  groupChild12Layout: {
    height: 162,
    position: "absolute",
  },
  groupChild12Layout1: {
    width: 360,
    height: 162,
  },
  wrapperLayout: {
    width: 365,
    height: 162,
    top: 0,
    position: "absolute",
  },
  hello: {
    fontFamily: FontFamily.openSansHebrewCondensed,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 15,
    top: 14,
    position: "absolute",
  },
  yoliaDewi: {
    top: 37,
    fontSize: 24,
    color: Color.black,
    left: 15,
    fontWeight: "500",
    position: "absolute",
  },
  dashboardChild: {
    top: 69,
    backgroundColor: Color.gray_500,
    width: 320,
    height: 40,
    borderRadius: Border.br_xs,
    left: 15,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  notification: {
    left: 249,
    top: 20,
    width: 35,
    height: 35,
    position: "absolute",
  },
  searchForBrand: {
    top: 80,
    left: 88,
    color: Color.gray_600,
  },
  searchIcon: {
    top: 75,
    left: 37,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  allProduct: {
    top: 319,
    left: 34,
    color: Color.white,
    fontWeight: "700",
    fontSize: FontSize.size_2xl,
  },
  newArrival: {
    top: 368,
    left: 13,
    fontSize: FontSize.size_3xl,
    color: Color.black,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.black,
    left: 0,
    top: 0,
  },
  home11Icon: {
    left: 8,
    top: 0,
    overflow: "hidden",
  },
  home: {
    top: 23,
    width: 36,
    height: 18,
    fontSize: FontSize.size_base,
    left: 0,
    color: Color.white,
    position: "absolute",
  },
  note: {
    left: 96,
    top: 1,
  },
  pesanan: {
    left: 81,
    width: 52,
    position: "absolute",
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
  },
  groupParent: {
    top: 7,
    left: 45,
    width: 215,
  },
  rectangleParent: {
    top: 736,
    left: 29,
  },
  groupItem: {
    borderRadius: Border.br_md,
  },
  groupInner: {
    top: 19,
    left: 2,
  },
  samsungGalaxy: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  s21: {
    margin: Margin.m_md,
  },
  samsungGalaxyS21Container: {
    top: 206,
    width: 149,
    left: 8,
    color: Color.black,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rp872900000: {
    top: 262,
    width: 103,
    fontSize: FontSize.size_base,
    left: 8,
    color: Color.black,
    position: "absolute",
  },
  groupIcon: {
    top: 256,
    left: 120,
  },
  rectangleGroup: {
    width: 166,
    left: 0,
    top: 0,
  },
  rectangleIcon: {
    top: 17,
    left: 8,
  },
  redmiNote10Container: {
    top: 204,
    width: 155,
    fontSize: FontSize.size_xl,
  },
  rp249900000: {
    top: 260,
    width: 105,
    fontSize: FontSize.size_base,
  },
  groupChild1: {
    left: 126,
    top: 255,
  },
  rectangleContainer: {
    left: 180,
    width: 173,
    top: 0,
  },
  groupChild3: {
    left: 120,
  },
  groupChild4: {
    top: 30,
    height: 180,
    position: "absolute",
  },
  rp1065500000: {
    width: 114,
    top: 255,
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  groupView: {
    left: 359,
  },
  groupChild6: {
    top: 62,
    width: 153,
    height: 80,
  },
  asusUltra15Container: {
    left: 10,
    width: 215,
  },
  rp871280000: {
    width: 105,
  },
  groupChild7: {
    left: 118,
  },
  rectangleParent1: {
    left: 538,
    width: 225,
    top: 0,
  },
  groupChild8: {
    borderRadius: Border.br_sm,
    width: 168,
    top: 0,
  },
  groupChild9: {
    width: 167,
    left: 0,
    height: 187,
    top: 14,
  },
  huaweiBand7Container: {
    width: 219,
  },
  huaweiBand7Container1: {
    width: 146,
  },
  rp59900000: {
    width: 96,
  },
  groupChild10: {
    left: 125,
  },
  rectangleParent2: {
    left: 717,
    width: 229,
    top: 0,
  },
  groupContainer: {
    top: 5,
    width: 946,
    left: 0,
  },
  dashboardInner: {
    top: 400,
    width: 339,
    height: 314,
    left: 10,
    position: "absolute",
  },
  component1variant3Child: {
    borderColor: "#fff",
    backgroundColor: Color.black,
  },
  allProduct1: {
    color: Color.white,
  },
  component1variant3: {
    width: 132,
    height: 32,
    top: 1,
    left: 0,
    position: "absolute",
  },
  component1variant3Item: {
    borderColor: "#000",
    bottom: "0%",
    right: "0%",
    backgroundColor: Color.white,
  },
  smartphone: {
    width: "78.26%",
    left: "11.3%",
    top: "18.75%",
    textAlign: "center",
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.roboto,
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  component1variant31: {
    left: 150,
    width: 121,
    height: 32,
    top: 1,
  },
  laptop: {
    color: Color.black,
  },
  component1variant32: {
    left: 441,
    width: 102,
    height: 32,
    top: 0,
  },
  allProduct2: {
    color: Color.black,
  },
  component1: {
    height: "96.97%",
    width: "24.67%",
    right: "22.1%",
    bottom: "3.03%",
    left: "53.24%",
    top: "0%",
    backgroundColor: Color.gray_700,
  },
  component1variant3Parent: {
    width: 543,
    left: 0,
    top: 0,
  },
  frameView: {
    top: 311,
    left: 22,
    width: 338,
  },
  trolly: {
    left: 305,
    top: 22,
    height: 30,
  },
  groupChild11: {
    left: 761,
  },
  groupChild12: {
    left: 383,
    top: 0,
  },
  wrapper: {
    left: 2,
  },
  rectangleParent3: {
    width: 1126,
    left: 0,
    top: 0,
  },
  dashboardInner1: {
    top: 124,
    left: -2,
  },
  dashboard: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Dashboard;
