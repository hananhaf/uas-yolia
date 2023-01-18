import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Margin } from "../GlobalStyles";

const Checkout = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.checkout, styles.iconLayout]}>
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
      <Text style={[styles.notifikasi, styles.notifikasiTypo]}>Notifikasi</Text>
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
          <Text style={[styles.akun, styles.akunTypo]}>Akun</Text>
        </View>
      </View>
      <View style={styles.belumAdaNotifikasiParent}>
        <Text style={[styles.belumAdaNotifikasi, styles.notifikasiTypo]}>
          Belum Ada Notifikasi
        </Text>
        <Text style={styles.semuaNotifikasiYangContainer}>
          <Text style={styles.semuaNotifikasiYang}>
            Semua notifikasi yang kami kirim akan muncul di sini
          </Text>
          <Text style={styles.supayaAndaBisa}>
            supaya anda bisa mengeceknya
          </Text>
        </Text>
      </View>
      <View style={styles.belumAdaNotifikasiParent}>
        <Text style={[styles.belumAdaNotifikasi, styles.notifikasiTypo]}>
          Belum Ada Notifikasi
        </Text>
        <Text style={styles.semuaNotifikasiYangContainer}>
          <Text style={styles.semuaNotifikasiYang}>
            Semua notifikasi yang kami kirim akan muncul di sini
          </Text>
          <Text style={styles.supayaAndaBisa}>
            supaya anda bisa mengeceknya
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  notifikasiTypo: {
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
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
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    top: 24,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft1: {
    left: 20,
    top: 20,
    height: 30,
    width: 30,
    position: "absolute",
  },
  notifikasi: {
    left: 141,
    top: 24,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.black,
  },
  home11: {
    left: 8,
  },
  home: {
    top: 23,
    width: 36,
    height: 18,
    color: Color.white,
    fontSize: FontSize.size_base,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
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
  },
  home11Parent: {
    width: 210,
  },
  akun: {
    left: 185,
    width: 30,
  },
  groupParent: {
    top: 7,
    left: 45,
    width: 215,
  },
  rectangleParent: {
    top: 736,
    left: 33,
  },
  belumAdaNotifikasi: {
    top: 131,
    left: 64,
  },
  semuaNotifikasiYang: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  supayaAndaBisa: {
    margin: Margin.m_md,
  },
  semuaNotifikasiYangContainer: {
    top: 178,
    left: 13,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    width: 294,
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  belumAdaNotifikasiParent: {
    top: 140,
    left: 22,
    width: 316,
    height: 356,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  checkout: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Checkout;
