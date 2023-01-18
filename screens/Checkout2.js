import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Checkout2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.checkout, styles.iconLayout1]}>
      <Image
        style={[styles.arrowLeft1Icon, styles.checkoutChildLayout]}
        resizeMode="cover"
        source={require("../assets/36arrowleft18.png")}
      />
      <Text style={[styles.ubah, styles.textTypo, styles.ubahPosition]}>
        Ubah
      </Text>
      <Text style={[styles.detailProduk, styles.textTypo]}>
        Detail Produk :
      </Text>
      <Text style={[styles.detailAnda, styles.textTypo, styles.ubahPosition]}>
        Detail Anda
      </Text>
      <Image
        style={[styles.arrowLeft1Icon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/36arrowleft19.png")}
      />
      <Text style={[styles.cupsell, styles.cupsellTypo]}>CUPSELL</Text>
      <Image
        style={[styles.starIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/77star.png")}
      />
      <Pressable
        style={[styles.groupParent, styles.groupLayout]}
        onPress={() => navigation.navigate("Checkout1")}
      >
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-41.png")}
        />
        <Text style={[styles.bayar, styles.bayarTypo]}>Bayar</Text>
      </Pressable>
      <Text style={[styles.pembayaran, styles.pembayaranTypo]}>Pembayaran</Text>
      <Text style={[styles.pesananSelesai, styles.pembayaranTypo]}>
        Pesanan Selesai
      </Text>
      <Image
        style={[
          styles.checkoutChild,
          styles.checkoutChildPosition,
          styles.checkoutChildLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.checkoutItem, styles.checkoutPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.checkoutInner, styles.checkoutPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.detailAnda1, styles.pembayaranTypo]}>
        Detail Anda
      </Text>
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.checkoutChild1, styles.lineViewLayout]} />
      <Pressable
        style={styles.arrowLeft1}
        onPress={() => navigation.navigate("Checkout3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/36arrowleft110.png")}
        />
      </Pressable>
      <Text style={[styles.pembayaran1, styles.cupsellTypo]}>Pembayaran</Text>
      <View style={styles.alamatEmailWrapper}>
        <Text style={[styles.alamatEmail, styles.alamatTypo]}>
          Alamat Email
        </Text>
      </View>
      <View style={[styles.detailAlamatWrapper, styles.rectangleParentBorder]}>
        <Text style={[styles.detailAlamat, styles.alamatTypo]}>
          Detail Alamat
        </Text>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleParentBorder]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-47.png")}
        />
        <Text style={[styles.xGalaxyS20, styles.bayarTypo]}>
          1 x Galaxy S20, Could pink,128 GB
        </Text>
      </View>
      <View
        style={[styles.kartuKreditWrapper, styles.kartuKreditWrapperLayout]}
      >
        <Text style={[styles.alamatEmail, styles.alamatTypo]}>
          Kartu Kredit
        </Text>
      </View>
      <View
        style={[styles.transferBankParent, styles.kartuKreditWrapperLayout]}
      >
        <Text style={[styles.transferBank, styles.alamatTypo]}>
          Transfer bank
        </Text>
        <Image
          style={[styles.tickCircleIcon, styles.tickIconLayout]}
          resizeMode="cover"
          source={require("../assets/88tickcircle1.png")}
        />
      </View>
      <Text
        style={[
          styles.metodePembayaran,
          styles.checkoutChildPosition,
          styles.textTypo,
        ]}
      >
        Metode Pembayaran :
      </Text>
      <Image
        style={[
          styles.tickCircleIcon1,
          styles.totalPesananPosition,
          styles.tickIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/88tickcircle2.png")}
      />
      <View style={styles.bcaParent}>
        <Text style={[styles.bca, styles.bcaTypo]}>BCA</Text>
        <Text style={[styles.text3, styles.bcaTypo]}>**** ******* 9876</Text>
        <Text style={[styles.immaculataYoliaDewi, styles.bcaTypo]}>
          IMMACULATA YOLIA DEWI W
        </Text>
        <Image
          style={styles.frameItem}
          resizeMode="cover"
          source={require("../assets/rectangle-51.png")}
        />
      </View>
      <Text style={styles.rp872900000}>Rp. 8.729.000,00</Text>
      <Text
        style={[
          styles.totalPesanan,
          styles.totalPesananPosition,
          styles.textTypo,
        ]}
      >
        Total Pesanan
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  checkoutChildLayout: {
    height: 20,
    width: 20,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
  },
  ubahPosition: {
    top: 120,
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    top: 20,
    position: "absolute",
    overflow: "hidden",
  },
  cupsellTypo: {
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 109,
    position: "absolute",
  },
  bayarTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  pembayaranTypo: {
    top: 84,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  checkoutChildPosition: {
    left: 42,
    position: "absolute",
  },
  checkoutPosition: {
    top: 59,
    height: 20,
    width: 20,
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
  alamatTypo: {
    color: Color.gray_200,
    top: 11,
    fontWeight: "500",
    left: 20,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleParentBorder: {
    width: 309,
    borderWidth: 1,
    borderRadius: Border.br_sm,
    left: 19,
    borderColor: "#a2a2a2",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  kartuKreditWrapperLayout: {
    width: 232,
    height: 37,
    borderWidth: 1,
    borderRadius: Border.br_sm,
    left: 19,
    borderColor: "#a2a2a2",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  tickIconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  totalPesananPosition: {
    left: 29,
    position: "absolute",
  },
  bcaTypo: {
    fontSize: FontSize.size_sm,
    left: 14,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  arrowLeft1Icon: {
    top: 117,
    left: 309,
    position: "absolute",
    overflow: "hidden",
  },
  ubah: {
    left: 266,
    width: 31,
    color: Color.black,
  },
  detailProduk: {
    top: 257,
    left: 39,
    width: 87,
    color: Color.black,
    position: "absolute",
  },
  detailAnda: {
    width: 68,
    fontWeight: "700",
    left: 62,
    color: Color.black,
  },
  arrowLeft1Icon1: {
    left: 20,
  },
  cupsell: {
    left: 138,
    color: Color.white,
    top: 23,
  },
  starIcon: {
    left: 306,
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  bayar: {
    left: 35,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
    top: 11,
    color: Color.white,
    fontWeight: "700",
  },
  groupParent: {
    top: 672,
    left: 119,
  },
  pembayaran: {
    left: 139,
    width: 73,
  },
  pesananSelesai: {
    left: 247,
    width: 98,
  },
  checkoutChild: {
    top: 57,
  },
  checkoutItem: {
    left: 166,
  },
  checkoutInner: {
    left: 291,
  },
  detailAnda1: {
    left: 20,
    width: 68,
  },
  text: {
    top: 60,
    left: 48,
    color: Color.black,
    position: "absolute",
  },
  text1: {
    top: 61,
    left: 172,
    color: Color.white,
    position: "absolute",
  },
  text2: {
    top: 62,
    left: 297,
    color: Color.black,
    position: "absolute",
  },
  lineView: {
    top: 69,
    left: 62,
  },
  checkoutChild1: {
    top: 68,
    left: 186,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft1: {
    top: 14,
    left: 19,
    height: 30,
    width: 30,
    position: "absolute",
  },
  pembayaran1: {
    top: 18,
    left: 137,
    width: 113,
    color: Color.black,
  },
  alamatEmail: {
    width: 78,
  },
  alamatEmailWrapper: {
    top: 150,
    height: 37,
    width: 309,
    borderWidth: 1,
    borderRadius: Border.br_sm,
    left: 19,
    borderColor: "#a2a2a2",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  detailAlamat: {
    width: 81,
  },
  detailAlamatWrapper: {
    top: 196,
    height: 55,
  },
  frameChild: {
    left: 36,
    width: 60,
    height: 60,
    top: 11,
    position: "absolute",
  },
  xGalaxyS20: {
    left: 127,
    width: 148,
    top: 23,
    color: Color.black,
  },
  rectangleParent: {
    top: 278,
    height: 78,
  },
  kartuKreditWrapper: {
    top: 385,
  },
  transferBank: {
    width: 83,
  },
  tickCircleIcon: {
    top: 7,
    left: 196,
    position: "absolute",
  },
  transferBankParent: {
    top: 428,
  },
  metodePembayaran: {
    top: 362,
    width: 126,
    color: Color.black,
  },
  tickCircleIcon1: {
    top: 116,
  },
  bca: {
    width: 34,
    top: 11,
  },
  text3: {
    top: 37,
    width: 100,
  },
  immaculataYoliaDewi: {
    top: 58,
    width: 161,
  },
  frameItem: {
    top: 5,
    left: 218,
    width: 25,
    height: 25,
    position: "absolute",
  },
  bcaParent: {
    top: 473,
    left: 51,
    borderRadius: Border.br_xs,
    backgroundColor: Color.black,
    width: 258,
    height: 87,
    position: "absolute",
    overflow: "hidden",
  },
  rp872900000: {
    top: 596,
    left: 216,
    width: 106,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  totalPesanan: {
    top: 593,
    width: 86,
    fontWeight: "700",
    color: Color.black,
  },
  checkout: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default Checkout2;
