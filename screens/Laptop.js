import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Laptop = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.laptop, styles.iconLayout]}>
      <View style={[styles.laptopInner, styles.laptopPosition]}>
        <View style={styles.frameParent}>
          <View style={[styles.rectangleParent, styles.rectanglePosition]}>
            <View style={[styles.frameChild, styles.frameChildShadowBox1]} />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-52.png")}
            />
            <Text
              style={[
                styles.vivobookPro16,
                styles.laptop1Typo,
                styles.vivobookPro16Typo,
              ]}
            >
              VivoBook Pro 16 X OLED
            </Text>
            <Text style={[styles.rp3357900000, styles.rp3357900000Typo]}>
              Rp. 33.579.000,00
            </Text>
            <Image
              style={[
                styles.frameInner,
                styles.frameChildLayout,
                styles.groupIconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/group-241.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
            <View style={[styles.rectangleView, styles.frameChildShadowBox1]} />
            <Image
              style={[styles.rectangleIcon, styles.frameChild5Layout]}
              resizeMode="cover"
              source={require("../assets/rectangle-53.png")}
            />
            <Text
              style={[
                styles.thinkbook16pGen,
                styles.laptop1Typo,
                styles.vivobookPro16Typo,
              ]}
            >
              ThinkBook 16p Gen 3
            </Text>
            <Text style={[styles.rp2267000000, styles.rp3357900000Typo]}>
              Rp. 22.670.000,00
            </Text>
            <Image
              style={[
                styles.groupIcon,
                styles.frameChildLayout,
                styles.groupIconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/group-241.png")}
            />
          </View>
          <View style={[styles.rectangleContainer, styles.frameViewPosition]}>
            <View style={[styles.frameChild, styles.frameChildShadowBox1]} />
            <Image
              style={[styles.frameChild2, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/group-241.png")}
            />
            <Image
              style={[styles.frameChild3, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-54.png")}
            />
            <Text style={[styles.vivo15A1502, styles.vivo15A1502Typo]}>
              Vivo 15 (A1502)
            </Text>
            <Text style={[styles.rp859900000, styles.rp859900000Typo]}>
              Rp. 8.599.000,00
            </Text>
          </View>
          <View style={[styles.frameView, styles.frameViewPosition]}>
            <View style={[styles.frameChild4, styles.frameChildShadowBox]} />
            <Image
              style={[styles.frameChild5, styles.frameChild5Layout]}
              resizeMode="cover"
              source={require("../assets/rectangle-55.png")}
            />
            <Text
              style={[
                styles.ideapadSlim3i,
                styles.frameChildPosition,
                styles.vivo15A1502Typo,
              ]}
            >
              IdeaPad Slim 3i 12th Gen (15 Intel)
            </Text>
            <Text style={[styles.rp499000000, styles.rp859900000Typo]}>
              Rp. 4.990.000,00
            </Text>
            <Image
              style={[styles.frameChild6, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/group-241.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent1, styles.rectangleParentPosition]}
          >
            <View style={[styles.frameChild7, styles.frameChildShadowBox]} />
            <Image
              style={styles.frameChild8}
              resizeMode="cover"
              source={require("../assets/rectangle-57.png")}
            />
            <Text
              style={[
                styles.vivobookPro16,
                styles.laptop1Typo,
                styles.vivobookPro16Typo,
              ]}
            >
              Huawei MateBook 14
            </Text>
            <Text style={[styles.rp3357900000, styles.rp3357900000Typo]}>
              Rp. 17.579.000,00
            </Text>
            <Image
              style={[
                styles.frameInner,
                styles.frameChildLayout,
                styles.groupIconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/group-242.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent2, styles.rectangleParentPosition]}
          >
            <View style={[styles.frameChild, styles.frameChildShadowBox1]} />
            <Image
              style={[styles.frameChild11, styles.frameChildPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-66.png")}
            />
            <Text
              style={[
                styles.vivobookPro16,
                styles.laptop1Typo,
                styles.vivobookPro16Typo,
              ]}
            >
              VivoBook Pro 15 OLED
            </Text>
            <Text style={[styles.rp3357900000, styles.rp3357900000Typo]}>
              Rp. 14.579.000,00
            </Text>
            <Image
              style={[
                styles.frameInner,
                styles.frameChildLayout,
                styles.groupIconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/group-242.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.laptopChild, styles.laptopPosition]}>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupParent, styles.parentLayout]}>
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
              <Text style={styles.pesanan}>Pesanan</Text>
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
            <Text style={styles.akun}>Akun</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent3, styles.laptopPosition]}>
        <View style={[styles.frameChild13, styles.frameChildPosition]} />
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
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/36arrowleft1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.bag6, styles.bag6Layout]}
          onPress={() => navigation.navigate("Keranjang")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/24bag6.png")}
          />
        </Pressable>
        <Text style={[styles.laptop1, styles.laptop1Typo]}>Laptop</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  laptopPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  rectanglePosition: {
    height: 310,
    top: 0,
    position: "absolute",
  },
  frameChildShadowBox1: {
    height: 279,
    width: 160,
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
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  frameLayout: {
    height: 165,
    width: 135,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  laptop1Typo: {
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  vivobookPro16Typo: {
    fontSize: FontSize.size_xl,
    color: Color.black,
    fontWeight: "500",
  },
  rp3357900000Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  frameChildLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  groupIconPosition: {
    top: 220,
    width: 25,
  },
  frameChild5Layout: {
    height: 180,
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
  },
  frameViewPosition: {
    top: 294,
    height: 310,
    position: "absolute",
  },
  vivo15A1502Typo: {
    top: 191,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  rp859900000Typo: {
    top: 237,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  frameChildShadowBox: {
    width: 158,
    height: 279,
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
    position: "absolute",
    backgroundColor: Color.white,
  },
  frameChildPosition: {
    left: 18,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 591,
    height: 310,
    position: "absolute",
  },
  groupLayout: {
    height: 54,
    width: 302,
    top: 0,
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
  bag6Layout: {
    height: 30,
    top: 20,
    width: 30,
    position: "absolute",
  },
  frameChild: {
    left: 0,
  },
  frameItem: {
    top: 13,
    left: 11,
  },
  vivobookPro16: {
    top: 188,
    width: 130,
    left: 12,
  },
  rp3357900000: {
    top: 227,
    width: 108,
    left: 12,
  },
  frameInner: {
    left: 124,
  },
  rectangleParent: {
    width: 163,
    left: 0,
  },
  rectangleView: {
    left: 9,
  },
  rectangleIcon: {
    width: 182,
    top: 4,
  },
  thinkbook16pGen: {
    top: 184,
    width: 132,
    left: 20,
  },
  rp2267000000: {
    top: 225,
    width: 112,
    left: 20,
  },
  groupIcon: {
    left: 132,
  },
  rectangleGroup: {
    left: 165,
    width: 185,
  },
  frameChild2: {
    top: 231,
    left: 114,
  },
  frameChild3: {
    top: 16,
    left: 9,
  },
  vivo15A1502: {
    width: 98,
    left: 9,
    position: "absolute",
  },
  rp859900000: {
    width: 103,
    left: 9,
  },
  rectangleContainer: {
    width: 163,
    left: 0,
  },
  frameChild4: {
    left: 3,
    top: 0,
  },
  frameChild5: {
    width: 169,
    top: 1,
  },
  ideapadSlim3i: {
    width: 127,
  },
  rp499000000: {
    left: 16,
    width: 104,
  },
  frameChild6: {
    top: 232,
    left: 120,
  },
  frameView: {
    width: 172,
    left: 174,
  },
  frameChild7: {
    top: 4,
    left: 0,
  },
  frameChild8: {
    top: 28,
    width: 137,
    height: 147,
    left: 12,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  rectangleParent1: {
    width: 171,
    left: 0,
  },
  frameChild11: {
    top: 36,
    width: 124,
    height: 141,
    borderRadius: Border.br_xs,
  },
  rectangleParent2: {
    left: 174,
    width: 163,
  },
  frameParent: {
    left: 14,
    width: 350,
    height: 901,
    top: 0,
    position: "absolute",
  },
  laptopInner: {
    top: 147,
    height: 571,
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.black,
    left: 0,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
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
    height: 15,
    top: 24,
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  profile: {
    left: 190,
    top: 0,
  },
  home11Parent: {
    width: 210,
    top: 0,
    left: 0,
  },
  akun: {
    left: 185,
    width: 30,
    height: 15,
    top: 24,
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  groupParent: {
    top: 7,
    left: 45,
    width: 215,
  },
  groupView: {
    left: 25,
  },
  laptopChild: {
    top: 735,
    height: 65,
    backgroundColor: Color.white,
  },
  frameChild13: {
    top: 81,
    backgroundColor: Color.gray_500,
    width: 320,
    height: 40,
    borderRadius: Border.br_xs,
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
  arrowLeft1: {
    left: 20,
  },
  bag6: {
    left: 302,
  },
  laptop1: {
    top: 27,
    left: 145,
    fontSize: FontSize.size_3xl,
  },
  rectangleParent3: {
    height: 144,
    top: 0,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  laptop: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Laptop;
