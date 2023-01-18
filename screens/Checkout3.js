import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Checkout3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.checkout, styles.iconLayout]}>
      <Text style={[styles.detailAnda, styles.textTypo]}>Detail Anda :</Text>
      <Text
        style={[styles.lokasiPengiriman, styles.textTypo, styles.textTypo1]}
      >
        Lokasi Pengiriman
      </Text>
      <Text style={[styles.totalPesanan, styles.textTypo, styles.textTypo1]}>
        Total Pesanan
      </Text>
      <Text style={styles.rp872900000}>Rp. 8.729.000,00</Text>
      <Text
        style={[styles.detailAnda1, styles.pembayaranPosition, styles.textTypo]}
      >
        Detail Anda
      </Text>
      <Text style={[styles.simpanAlamatUntuk, styles.textTypo]}>
        Simpan alamat untuk pembelian selanjutnya
      </Text>
      <Text
        style={[
          styles.pembayaran,
          styles.checkOutPosition,
          styles.pembayaranPosition,
        ]}
      >
        Pembayaran
      </Text>
      <Text
        style={[
          styles.pesananSelesai,
          styles.pembayaranPosition,
          styles.textTypo,
        ]}
      >
        Pesanan Selesai
      </Text>
      <Pressable
        style={styles.arrowLeft1}
        onPress={() => navigation.navigate("Keranjang")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/36arrowleft1.png")}
        />
      </Pressable>
      <Text style={[styles.checkOut, styles.checkOutPosition]}>Check Out</Text>
      <View style={styles.groupParent}>
        <Image
          style={[
            styles.groupChild,
            styles.groupLayout,
            styles.groupChildPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.groupInner, styles.text1Position, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={styles.text}>1</Text>
        <Text
          style={[
            styles.text1,
            styles.text1Position,
            styles.textTypo,
            styles.textTypo1,
          ]}
        >
          2
        </Text>
        <Text style={[styles.text2, styles.textTypo, styles.textTypo1]}>3</Text>
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <View style={[styles.groupChild1, styles.lineViewLayout]} />
      </View>
      <View
        style={[
          styles.namaLengkapWrapper,
          styles.alamatWrapperBorder,
          styles.alamatWrapperLayout,
          styles.wrapperPosition,
        ]}
      >
        <Text style={[styles.namaLengkap, styles.alamatTypo]}>
          Nama Lengkap
        </Text>
      </View>
      <View
        style={[
          styles.alamatEmailWrapper,
          styles.alamatWrapperBorder,
          styles.alamatWrapperLayout,
          styles.wrapperPosition,
        ]}
      >
        <Text style={[styles.alamatEmail, styles.alamatTypo]}>
          Alamat Email
        </Text>
      </View>
      <View
        style={[
          styles.alamatWrapper,
          styles.alamatWrapperBorder,
          styles.alamatWrapperLayout,
        ]}
      >
        <Text style={[styles.alamat, styles.alamatTypo]}>Alamat</Text>
      </View>
      <View style={[styles.provinsiWrapper, styles.wrapperLayout]}>
        <Text style={[styles.provinsi, styles.alamatTypo]}>Provinsi</Text>
      </View>
      <View style={[styles.nomorHanphoneWrapper, styles.alamatWrapperBorder]}>
        <Text style={[styles.nomorHanphone, styles.alamatTypo]}>
          Nomor Hanphone
        </Text>
      </View>
      <View style={[styles.kodePosWrapper, styles.wrapperLayout]}>
        <Text style={[styles.kodePos, styles.alamatTypo]}>Kode Pos</Text>
      </View>
      <Image
        style={styles.tickCircleIcon}
        resizeMode="cover"
        source={require("../assets/88tickcircle3.png")}
      />
      <Pressable
        style={[styles.vectorParent, styles.vectorParentLayout]}
        onPress={() => navigation.navigate("Checkout2")}
      >
        <Image
          style={[
            styles.rectangleIcon,
            styles.vectorParentLayout,
            styles.groupChildPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/rectangle-44.png")}
        />
        <Text style={styles.lanjutkan}>Lanjutkan</Text>
      </Pressable>
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
    color: Color.black,
    fontFamily: FontFamily.roboto,
  },
  textTypo1: {
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.roboto,
  },
  pembayaranPosition: {
    top: 87,
    fontSize: FontSize.size_base,
  },
  checkOutPosition: {
    left: 138,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  groupLayout: {
    height: 20,
    width: 20,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  text1Position: {
    top: 6,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#a2a2a2",
    borderStyle: "solid",
    width: 106,
    position: "absolute",
  },
  alamatWrapperBorder: {
    height: 37,
    borderWidth: 1,
    borderRadius: Border.br_sm,
    borderColor: "#a2a2a2",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  alamatWrapperLayout: {
    width: 309,
    height: 37,
    borderWidth: 1,
    borderRadius: Border.br_sm,
  },
  wrapperPosition: {
    left: 23,
    width: 309,
  },
  alamatTypo: {
    color: Color.gray_200,
    top: 11,
    left: 20,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  wrapperLayout: {
    width: 142,
    top: 309,
    height: 37,
    borderWidth: 1,
    borderRadius: Border.br_sm,
    borderColor: "#a2a2a2",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  vectorParentLayout: {
    height: 40,
    width: 116,
    position: "absolute",
  },
  detailAnda: {
    top: 126,
    width: 76,
    fontWeight: "700",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    left: 27,
    position: "absolute",
  },
  lokasiPengiriman: {
    top: 238,
    left: 43,
    width: 112,
    fontWeight: "500",
    position: "absolute",
  },
  totalPesanan: {
    top: 440,
    left: 37,
    fontWeight: "500",
    position: "absolute",
  },
  rp872900000: {
    top: 444,
    left: 230,
    width: 106,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  detailAnda1: {
    width: 68,
    left: 27,
    top: 87,
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  simpanAlamatUntuk: {
    top: 408,
    left: 63,
    fontSize: FontSize.size_2xs,
    width: 200,
    position: "absolute",
  },
  pembayaran: {
    width: 73,
  },
  pesananSelesai: {
    left: 243,
    width: 98,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft1: {
    top: 20,
    width: 30,
    height: 30,
    left: 20,
    position: "absolute",
  },
  checkOut: {
    top: 23,
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
  },
  groupChild: {
    position: "absolute",
  },
  groupItem: {
    left: 124,
    top: 3,
    height: 20,
    width: 20,
    position: "absolute",
  },
  groupInner: {
    left: 248,
  },
  text: {
    left: 6,
    color: Color.white,
    top: 3,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  text1: {
    left: 130,
  },
  text2: {
    top: 9,
    left: 254,
    position: "absolute",
  },
  lineView: {
    top: 13,
    left: 20,
  },
  groupChild1: {
    top: 14,
    left: 144,
  },
  groupParent: {
    top: 58,
    left: 46,
    width: 268,
    height: 26,
    position: "absolute",
  },
  namaLengkap: {
    width: 90,
  },
  namaLengkapWrapper: {
    top: 147,
  },
  alamatEmail: {
    width: 79,
  },
  alamatEmailWrapper: {
    top: 190,
  },
  alamat: {
    width: 44,
  },
  alamatWrapper: {
    top: 264,
    left: 25,
  },
  provinsi: {
    width: 49,
  },
  provinsiWrapper: {
    left: 25,
  },
  nomorHanphone: {
    width: 104,
  },
  nomorHanphoneWrapper: {
    top: 357,
    left: 26,
    width: 171,
    height: 37,
    borderWidth: 1,
    borderRadius: Border.br_sm,
  },
  kodePos: {
    width: 60,
  },
  kodePosWrapper: {
    left: 190,
  },
  tickCircleIcon: {
    top: 402,
    left: 34,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    borderRadius: Border.br_md,
  },
  lanjutkan: {
    left: 28,
    fontSize: FontSize.size_xl,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
    top: 11,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  vectorParent: {
    top: 671,
    left: 122,
  },
  checkout: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default Checkout3;
