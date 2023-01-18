import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Checkout1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.checkout, styles.iconLayout]}>
      <Image
        style={styles.tickCircleIcon}
        resizeMode="cover"
        source={require("../assets/88tickcircle.png")}
      />
      <Text
        style={[
          styles.detailAnda,
          styles.textTypo,
          styles.textTypo1,
          styles.detailAndaPosition,
        ]}
      >
        Detail Anda
      </Text>
      <Text
        style={[
          styles.pembayaran,
          styles.textTypo,
          styles.textTypo1,
          styles.detailAndaPosition,
        ]}
      >
        Pembayaran
      </Text>
      <Text
        style={[
          styles.pesananSelesai,
          styles.textTypo,
          styles.textTypo1,
          styles.detailAndaPosition,
        ]}
      >
        Pesanan Selesai
      </Text>
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
      <Text style={[styles.cupsell, styles.textTypo, styles.textTypo1]}>
        CUPSELL
      </Text>
      <Image
        style={styles.checkoutChild}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.checkoutItem, styles.checkoutPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.checkoutInner, styles.checkoutPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.text, styles.textTypo, styles.textTypo1]}>1</Text>
      <Text style={[styles.text1, styles.textTypo, styles.textTypo1]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.checkoutChild1, styles.lineViewLayout]} />
      <Text style={[styles.pesananSelesai1, styles.pesananTypo]}>
        PESANAN SELESAI
      </Text>
      <Text style={[styles.nomorPesanan, styles.nomorPesananTypo]}>
        Nomor Pesanan :
      </Text>
      <Text style={[styles.id23011037274281, styles.nomorPesananTypo]}>
        ID230110-37274281
      </Text>
      <View style={styles.lineParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/line-3.png")}
        />
        <Text style={[styles.ringkasanPesanan, styles.pesananTypo]}>
          RINGKASAN PESANAN
        </Text>
        <Text style={[styles.totalPembayaran, styles.totalPembayaranTypo]}>
          Total Pembayaran
        </Text>
        <Text style={[styles.rp872900000, styles.textTypo, styles.textTypo1]}>
          Rp. 8.729.000,00
        </Text>
        <Text style={[styles.januari2023, styles.textTypo, styles.textTypo1]}>
          17 Januari 2023
        </Text>
        <Text style={[styles.noVirtualAccount, styles.totalPembayaranTypo]}>
          No. Virtual Account
        </Text>
        <Text
          style={[styles.tanggalKadaluarsa, styles.textTypo, styles.textTypo1]}
        >
          Tanggal Kadaluarsa
        </Text>
        <Text
          style={[styles.id230110372742811, styles.textTypo, styles.textTypo1]}
        >
          ID230110-37274281
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
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  textTypo1: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  detailAndaPosition: {
    top: 94,
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  checkoutPosition: {
    top: 64,
    height: 20,
    width: 20,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 106,
    borderTopWidth: 1,
    borderColor: "#a2a2a2",
    borderStyle: "solid",
    position: "absolute",
  },
  pesananTypo: {
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  nomorPesananTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  totalPembayaranTypo: {
    left: 18,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  tickCircleIcon: {
    top: 304,
    width: 35,
    height: 35,
    left: 92,
    position: "absolute",
    overflow: "hidden",
  },
  detailAnda: {
    left: 30,
    width: 68,
    fontSize: FontSize.size_base,
  },
  pembayaran: {
    left: 143,
    width: 73,
    fontSize: FontSize.size_base,
  },
  pesananSelesai: {
    left: 241,
    width: 98,
    fontSize: FontSize.size_base,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft1: {
    left: 20,
    top: 20,
    width: 30,
    height: 30,
    position: "absolute",
  },
  cupsell: {
    top: 23,
    left: 138,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
  },
  checkoutChild: {
    top: 62,
    left: 50,
    height: 20,
    width: 20,
    position: "absolute",
  },
  checkoutItem: {
    left: 174,
  },
  checkoutInner: {
    left: 298,
  },
  text: {
    top: 65,
    left: 56,
    fontSize: FontSize.size_base,
  },
  text1: {
    top: 67,
    left: 181,
    fontSize: FontSize.size_base,
  },
  text2: {
    top: 68,
    left: 304,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
  },
  lineView: {
    top: 74,
    left: 70,
  },
  checkoutChild1: {
    top: 73,
    left: 194,
  },
  pesananSelesai1: {
    top: 214,
    fontSize: FontSize.size_3xl,
    left: 92,
  },
  nomorPesanan: {
    top: 270,
    left: 128,
    width: 112,
  },
  id23011037274281: {
    top: 313,
    left: 137,
    width: 130,
  },
  frameChild: {
    top: 30,
    left: 0,
    width: 303,
    height: 2,
    position: "absolute",
  },
  ringkasanPesanan: {
    top: 8,
    left: 84,
    fontSize: FontSize.size_base,
  },
  totalPembayaran: {
    top: 46,
    width: 120,
  },
  rp872900000: {
    top: 49,
    left: 188,
    width: 102,
    fontSize: FontSize.size_base,
  },
  januari2023: {
    top: 111,
    left: 191,
    width: 96,
    fontSize: FontSize.size_base,
  },
  noVirtualAccount: {
    top: 81,
    width: 124,
  },
  tanggalKadaluarsa: {
    top: 116,
    left: 16,
    width: 128,
    fontSize: FontSize.size_base,
  },
  id230110372742811: {
    top: 79,
    left: 169,
    width: 121,
    fontSize: FontSize.size_base,
  },
  lineParent: {
    top: 360,
    left: 31,
    borderRadius: Border.br_md,
    borderColor: "#000",
    borderWidth: 1,
    width: 305,
    height: 158,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  checkout: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default Checkout1;
