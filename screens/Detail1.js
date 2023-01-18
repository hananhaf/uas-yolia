import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Detail1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detail}>
      <View style={[styles.detailChild, styles.frameViewPosition]} />
      <Image
        style={[styles.arrowLeft1Icon, styles.iconLayout1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/36arrowleft19.png")}
      />
      <Image
        style={[styles.trollyIcon, styles.iconLayout1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/25trolly1.png")}
      />
      <Text style={styles.detail1}>Detail</Text>
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
      <View
        style={[
          styles.rectangleView,
          styles.groupLayout,
          styles.groupItemBorder,
          styles.groupItemShadowBox,
        ]}
      />
      <Text style={[styles.keranjang, styles.keranjangTypo]}>Keranjang</Text>
      <Text style={[styles.samsungGalaxyS201, styles.rearCameraTypo]}>
        Samsung Galaxy S20 menggunakan chipset seri terbaru Exynos 990. Samsung
        Galaxy S20 hadir dengan kualitas layar yang memanjakan dan set kamera
        yang komplet dan dapat diandalkan untuk fotografi.
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Pressable
          style={styles.note}
          onPress={() => navigation.navigate("PesananDikirim")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/8note.png")}
          />
        </Pressable>
        <Image
          style={[styles.home11Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/2home117.png")}
        />
        <Text style={[styles.home, styles.homeTypo, styles.homePosition]}>
          Home
        </Text>
        <Text style={[styles.pesanan, styles.homeTypo]}>Pesanan</Text>
        <Text style={[styles.keranjang1, styles.homeTypo, styles.homePosition]}>
          Keranjang
        </Text>
        <Text
          style={[
            styles.chat,
            styles.chatPosition,
            styles.homeTypo,
            styles.homePosition,
          ]}
        >
          Chat
        </Text>
        <Image
          style={[styles.bag6Icon, styles.bag6IconPosition, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/24bag63.png")}
        />
        <Image
          style={[styles.chat20Icon, styles.chatPosition, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/47chat20.png")}
        />
      </View>
      <Image
        style={styles.trollyIcon1}
        resizeMode="cover"
        source={require("../assets/25trolly2.png")}
      />
      <View style={[styles.frameView, styles.frameViewPosition]} />
      <View
        style={[
          styles.closeParent,
          styles.groupItemBorder,
          styles.frameViewPosition,
        ]}
      >
        <Pressable
          style={[styles.close, styles.closePosition, styles.iconLayout1]}
          onPress={() => navigation.navigate("Detail")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/85close.png")}
          />
        </Pressable>
        <Text style={[styles.samsungGalaxyS202, styles.warnaTypo]}>
          Samsung Galaxy S20
        </Text>
        <Text style={[styles.warna, styles.warnaTypo, styles.warnaPosition]}>
          Warna :
        </Text>
        <Text
          style={[styles.fiturUnggulan, styles.warnaTypo, styles.warnaPosition]}
        >
          Fitur Unggulan :
        </Text>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.frameItemPosition, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Text style={[styles.weightG190, styles.weightG190Typo]}>
          Weight (g) 190
        </Text>
        <Text style={styles.cpuSpeed28ghz24ghz18ghz}>
          CPU Speed 2.8GHz.2/4GHz,1.8GHz
        </Text>
        <Text style={[styles.superAmoled, styles.weightG190Typo]}>
          Super AMOLED
        </Text>
        <Text
          style={[
            styles.rearCamera,
            styles.frameItemPosition,
            styles.rearCameraTypo,
          ]}
        >
          Rear Camera - Resolution (Multiple) 12.0 MP + 12.0 MP + 8.0 MP
        </Text>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={() => navigation.navigate("Keranjang")}
        >
          <View
            style={[
              styles.groupItem,
              styles.groupLayout,
              styles.groupItemBorder,
              styles.groupItemShadowBox,
            ]}
          />
          <Text style={[styles.beliSekarang, styles.keranjangTypo]}>
            Beli Sekarang
          </Text>
        </Pressable>
      </View>
      <View style={styles.detailInner1}>
        <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
          <Image
            style={[styles.groupInner, styles.groupInnerLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-40.png")}
          />
          <Image
            style={styles.groupChild1}
            resizeMode="cover"
            source={require("../assets/rectangle-401.png")}
          />
          <Image
            style={[styles.groupChild2, styles.bag6IconPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Image
            style={[styles.groupChild3, styles.closePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-291.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameViewPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 30,
    width: 30,
  },
  iconPosition: {
    top: 18,
    width: 30,
    position: "absolute",
  },
  tersediaWarnaTypo: {
    textAlign: "center",
    color: Color.gray_300,
    fontSize: FontSize.size_2xl,
    fontWeight: "700",
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
  groupLayout: {
    height: 40,
    width: 128,
    position: "absolute",
  },
  groupItemBorder: {
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
  },
  groupItemShadowBox: {
    borderRadius: Border.br_xs,
    width: 128,
    borderColor: "#fff",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.black,
  },
  keranjangTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  rearCameraTypo: {
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  groupChildLayout: {
    height: 68,
    width: 360,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 27,
    overflow: "hidden",
  },
  homeTypo: {
    height: 21,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  homePosition: {
    top: 39,
    height: 21,
  },
  chatPosition: {
    left: 297,
    position: "absolute",
  },
  bag6IconPosition: {
    top: 8,
    position: "absolute",
  },
  closePosition: {
    top: 19,
    position: "absolute",
  },
  warnaTypo: {
    left: 27,
    textAlign: "center",
    color: Color.gray_300,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  warnaPosition: {
    left: 27,
    fontWeight: "500",
  },
  frameLayout: {
    top: 242,
    height: 20,
    width: 20,
  },
  weightG190Typo: {
    width: 109,
    left: 37,
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  frameItemPosition: {
    left: 38,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 149,
    position: "absolute",
  },
  detailChild: {
    height: 319,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.black,
    width: 360,
    top: 0,
  },
  arrowLeft1Icon: {
    left: 11,
    overflow: "hidden",
  },
  trollyIcon: {
    left: 305,
  },
  detail1: {
    top: 21,
    left: 154,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
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
    top: 465,
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
  rectangleView: {
    top: 668,
    left: 116,
  },
  keranjang: {
    top: 679,
    left: 167,
  },
  samsungGalaxyS201: {
    top: 400,
    left: 28,
    width: 320,
    height: 58,
    position: "absolute",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    borderColor: "#000",
    borderTopWidth: 1,
    borderStyle: "solid",
    height: 68,
    backgroundColor: Color.black,
    top: 0,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  note: {
    height: 20,
    width: 20,
    top: 7,
    left: 124,
    position: "absolute",
  },
  home11Icon: {
    left: 35,
    width: 29,
    top: 7,
    position: "absolute",
  },
  home: {
    left: 32,
    width: 35,
    position: "absolute",
  },
  pesanan: {
    top: 40,
    left: 111,
    width: 53,
    position: "absolute",
  },
  keranjang1: {
    left: 195,
    width: 61,
    position: "absolute",
  },
  chat: {
    width: 40,
  },
  bag6Icon: {
    left: 211,
    width: 26,
  },
  chat20Icon: {
    top: 7,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 732,
  },
  trollyIcon1: {
    top: 676,
    left: 135,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  frameView: {
    backgroundColor: "rgba(0, 0, 0, 0.33)",
    top: 0,
    width: 360,
    overflow: "hidden",
    height: 800,
  },
  close: {
    left: 315,
  },
  samsungGalaxyS202: {
    top: 188,
    fontWeight: "700",
    left: 27,
  },
  warna: {
    top: 215,
  },
  fiturUnggulan: {
    top: 270,
  },
  frameChild: {
    left: 124,
    top: 242,
    position: "absolute",
  },
  frameInner: {
    left: 82,
    position: "absolute",
  },
  weightG190: {
    top: 297,
  },
  cpuSpeed28ghz24ghz18ghz: {
    top: 320,
    width: 228,
    left: 37,
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  superAmoled: {
    top: 343,
  },
  rearCamera: {
    top: 364,
    width: 170,
  },
  groupItem: {
    left: 0,
    borderRadius: Border.br_xs,
    top: 0,
  },
  beliSekarang: {
    top: 11,
    left: 18,
  },
  rectangleGroup: {
    top: 450,
    left: 116,
  },
  closeParent: {
    top: 251,
    borderTopLeftRadius: Border.br_lg,
    borderTopRightRadius: Border.br_lg,
    height: 549,
    overflow: "hidden",
    borderColor: "#fff",
    width: 360,
    backgroundColor: Color.white,
  },
  groupInner: {
    top: 14,
    left: -4,
    width: 123,
    borderRadius: Border.br_sm,
  },
  groupChild1: {
    top: 4,
    left: 310,
    width: 106,
    height: 113,
    position: "absolute",
  },
  groupChild2: {
    left: 458,
    width: 114,
    height: 106,
  },
  groupChild3: {
    left: 136,
    width: 108,
    height: 126,
  },
  rectangleContainer: {
    top: -14,
    left: 33,
    width: 539,
  },
  detailInner1: {
    top: 294,
    left: 73,
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: 201,
    height: 135,
    position: "absolute",
  },
  detail: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Detail1;
