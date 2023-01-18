import * as React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PesananDikirim = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pesananDikirim, styles.iconLayout]}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupChildLayout,
          ]}
        />
        <View style={[styles.groupParent, styles.parentLayout]}>
          <View
            style={[
              styles.home11Parent,
              styles.parentLayout,
              styles.groupChildPosition,
            ]}
          >
            <Pressable
              style={[styles.home11, styles.noteLayout, styles.home11Position]}
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
              style={[styles.profile, styles.noteLayout, styles.home11Position]}
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
      <View style={[styles.samsungGalaxyS20Parent, styles.groupItemPosition]}>
        <Text style={[styles.samsungGalaxyS20, styles.dikirimClr]}>
          Samsung Galaxy S20
        </Text>
        <Text style={[styles.couldPink258Gb, styles.x1Typo, styles.x1Position]}>
          Could Pink/258 GB
        </Text>
        <Text style={[styles.produk, styles.x1Typo]}>1 Produk</Text>
        <Text style={[styles.sedangDalamProses, styles.x1Typo]}>
          Sedang Dalam Proses Pengiriman
        </Text>
        <Text style={[styles.x1, styles.x1Typo, styles.x1Position]}>x1</Text>
        <Text style={[styles.rp872900000, styles.x1Typo]}>
          Rp. 8.729.000,00
        </Text>
        <Text style={[styles.totalPesanan, styles.x1Typo]}>
          Total Pesanan : Rp. 8.729.000,00
        </Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-68.png")}
        />
      </View>
      <View style={[styles.pesananDikirimInner, styles.groupChildPosition]}>
        <View style={styles.arrowLeft1Parent}>
          <Pressable
            style={[
              styles.arrowLeft1,
              styles.akunLayout,
              styles.groupChildPosition,
            ]}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/36arrowleft1.png")}
            />
          </Pressable>
          <Text
            style={[styles.pesanan1, styles.dikirimClr, styles.dikirimTypo]}
          >
            Pesanan
          </Text>
          <Text
            style={[
              styles.dikirim,
              styles.dikirimPosition,
              styles.dikirimClr,
              styles.dikirimTypo,
              styles.dikirimTypo1,
            ]}
          >
            Dikirim
          </Text>
          <Pressable
            style={[styles.riwayat, styles.dikirimPosition]}
            onPress={() => navigation.navigate("PesananRiwayat")}
          >
            <Text
              style={[
                styles.dikirimClr,
                styles.dikirimTypo,
                styles.dikirimTypo1,
              ]}
            >
              Riwayat
            </Text>
          </Pressable>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
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
  groupChildLayout: {
    height: 54,
    width: 302,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
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
  home11Position: {
    top: 0,
    width: 20,
  },
  akunTypo: {
    height: 15,
    top: 24,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  akunLayout: {
    width: 30,
    position: "absolute",
  },
  groupItemPosition: {
    left: 20,
    position: "absolute",
  },
  dikirimClr: {
    color: Color.black,
    textAlign: "left",
  },
  x1Typo: {
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontFamily: FontFamily.openSansHebrewCondensed,
    textAlign: "left",
    position: "absolute",
  },
  x1Position: {
    top: 42,
    fontSize: FontSize.size_xs,
  },
  dikirimTypo: {
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    color: Color.black,
  },
  dikirimPosition: {
    top: 59,
    position: "absolute",
  },
  dikirimTypo1: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.black,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  home11: {
    left: 8,
  },
  home: {
    top: 23,
    width: 36,
    height: 18,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_base,
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
    position: "absolute",
  },
  profile: {
    left: 190,
  },
  home11Parent: {
    width: 210,
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
    top: 739,
    left: 29,
  },
  samsungGalaxyS20: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    width: 99,
    fontFamily: FontFamily.openSansHebrewCondensed,
    color: Color.black,
    left: 110,
    top: 20,
    position: "absolute",
  },
  couldPink258Gb: {
    left: 110,
    top: 42,
  },
  produk: {
    top: 100,
    left: 35,
  },
  sedangDalamProses: {
    top: 97,
    left: 168,
  },
  x1: {
    left: 286,
  },
  rp872900000: {
    top: 55,
    left: 231,
  },
  totalPesanan: {
    top: 68,
    left: 171,
  },
  frameChild: {
    left: 18,
    width: 70,
    height: 70,
    top: 20,
    position: "absolute",
  },
  samsungGalaxyS20Parent: {
    top: 106,
    width: 318,
    height: 122,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  arrowLeft1: {
    height: 30,
  },
  pesanan1: {
    top: 5,
    left: 121,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  dikirim: {
    left: 26,
  },
  riwayat: {
    left: 114,
  },
  groupItem: {
    top: 78,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 55,
    height: 1,
  },
  arrowLeft1Parent: {
    top: 35,
    width: 199,
    height: 78,
    left: 26,
    position: "absolute",
  },
  pesananDikirimInner: {
    width: 360,
    height: 113,
    position: "absolute",
    backgroundColor: Color.white,
  },
  pesananDikirim: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default PesananDikirim;
