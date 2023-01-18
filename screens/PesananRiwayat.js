import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PesananRiwayat = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pesananRiwayat, styles.iconLayout]}>
      <View style={[styles.groupParent, styles.parentLayout2]}>
        <View style={[styles.frameParent, styles.parentLayout2]}>
          <View
            style={[
              styles.samsungGalaxyS20Parent,
              styles.parentLayout,
              styles.parentLayout1,
            ]}
          >
            <Text style={[styles.samsungGalaxyS20, styles.samsungTypo]}>
              Samsung Galaxy S20
            </Text>
            <Text
              style={[styles.couldPink258Gb, styles.x1Typo, styles.x1Position]}
            >
              Could Pink/258 GB
            </Text>
            <Text style={[styles.produk, styles.produkTypo]}>1 Produk</Text>
            <Text style={[styles.x1, styles.x1Typo, styles.x1Position]}>
              x1
            </Text>
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
          <View
            style={[
              styles.iphone11ProParent,
              styles.parentLayout,
              styles.parentLayout1,
            ]}
          >
            <Text style={[styles.samsungGalaxyS20, styles.samsungTypo]}>
              Iphone 11 Pro
            </Text>
            <Text
              style={[styles.couldPink258Gb, styles.x1Typo, styles.x1Position]}
            >
              Black/258 GB
            </Text>
            <Text style={[styles.produk, styles.produkTypo]}>1 Produk</Text>
            <Text style={[styles.x1, styles.x1Typo, styles.x1Position]}>
              x1
            </Text>
            <Text style={[styles.rp872900000, styles.x1Typo]}>
              Rp. 13.729.000,00
            </Text>
            <Text style={[styles.totalPesanan, styles.x1Typo]}>
              Total Pesanan : Rp. 13.729.000,00
            </Text>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-681.png")}
            />
          </View>
          <View
            style={[
              styles.huaweiBand7Parent,
              styles.parentLayout,
              styles.parentLayout1,
            ]}
          >
            <Text style={[styles.huaweiBand7, styles.samsungTypo]}>
              Huawei Band 7
            </Text>
            <Text
              style={[styles.couldPink258Gb, styles.x1Typo, styles.x1Position]}
            >
              Red
            </Text>
            <Text style={[styles.produk, styles.produkTypo]}>1 Produk</Text>
            <Text style={[styles.x1, styles.x1Typo, styles.x1Position]}>
              x1
            </Text>
            <Text style={[styles.rp872900000, styles.x1Typo]}>
              Rp. 599.000,00
            </Text>
            <Text style={[styles.totalPesanan, styles.x1Typo]}>
              Total Pesanan : Rp. 599.000,00
            </Text>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-682.png")}
            />
          </View>
          <View
            style={[
              styles.vivobookPro16xOledParent,
              styles.parentLayout,
              styles.parentLayout1,
            ]}
          >
            <Text style={[styles.vivobookPro16x, styles.samsungTypo]}>
              VivoBook Pro 16x OLED
            </Text>
            <Text
              style={[styles.couldPink258Gb, styles.x1Typo, styles.x1Position]}
            >
              Black
            </Text>
            <Text style={[styles.produk3, styles.produkTypo]}>1 Produk</Text>
            <Text style={[styles.x1, styles.x1Typo, styles.x1Position]}>
              x1
            </Text>
            <Text style={[styles.rp872900000, styles.x1Typo]}>
              Rp. 33.499.000,00
            </Text>
            <Text style={[styles.totalPesanan, styles.x1Typo]}>
              Total Pesanan : Rp. 33.499.000,00
            </Text>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-683.png")}
            />
          </View>
          <View
            style={[styles.samsungGalaxyS22UltraParent, styles.samsungPosition]}
          >
            <Text style={[styles.samsungGalaxyS22, styles.samsungTypo]}>
              Samsung Galaxy S22 Ultra
            </Text>
            <Text
              style={[styles.couldPink258Gb, styles.x1Typo, styles.x1Position]}
            >
              Black
            </Text>
            <Text style={[styles.produk, styles.produkTypo]}>1 Produk</Text>
            <Text style={[styles.x1, styles.x1Typo, styles.x1Position]}>
              x1
            </Text>
            <Text style={[styles.rp872900000, styles.x1Typo]}>
              Rp. 18.259.000,00
            </Text>
            <Text style={[styles.totalPesanan, styles.x1Typo]}>
              Total Pesanan : Rp. 18.259.000,00
            </Text>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-684.png")}
            />
          </View>
          <View
            style={[
              styles.appleWatchSeries3Parent,
              styles.parentLayout,
              styles.parentLayout1,
            ]}
          >
            <Text style={[styles.samsungGalaxyS22, styles.samsungTypo]}>
              Apple Watch Series 3
            </Text>
            <Text
              style={[styles.couldPink258Gb, styles.x1Typo, styles.x1Position]}
            >
              Black
            </Text>
            <Text style={[styles.produk, styles.produkTypo]}>1 Produk</Text>
            <Text style={[styles.x1, styles.x1Typo, styles.x1Position]}>
              x1
            </Text>
            <Text style={[styles.rp872900000, styles.x1Typo]}>
              Rp. 3.270.000,00
            </Text>
            <Text style={[styles.totalPesanan, styles.x1Typo]}>
              Total Pesanan : Rp. 3.270.000,00
            </Text>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-685.png")}
            />
          </View>
          <View style={[styles.redminNote105gParent, styles.parentLayout]}>
            <Text style={[styles.samsungGalaxyS22, styles.samsungTypo]}>
              Redmin Note 10 5G
            </Text>
            <Text
              style={[styles.couldPink258Gb, styles.x1Typo, styles.x1Position]}
            >
              Blue
            </Text>
            <Text style={[styles.produk, styles.produkTypo]}>1 Produk</Text>
            <Text style={[styles.x1, styles.x1Typo, styles.x1Position]}>
              x1
            </Text>
            <Text style={[styles.rp872900000, styles.x1Typo]}>
              Rp. 2.499.000,00
            </Text>
            <Text style={[styles.totalPesanan, styles.x1Typo]}>
              Total Pesanan : Rp. 2.499.000,00
            </Text>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-686.png")}
            />
          </View>
        </View>
        <View
          style={[styles.samsungGalaxyS22UltraGroup, styles.samsungPosition]}
        >
          <Text style={[styles.samsungGalaxyS22, styles.samsungTypo]}>
            Samsung Galaxy S22 Ultra
          </Text>
          <Text
            style={[styles.couldPink258Gb, styles.x1Typo, styles.x1Position]}
          >
            Black
          </Text>
          <Text style={[styles.produk, styles.produkTypo]}>1 Produk</Text>
          <Text style={[styles.x1, styles.x1Typo, styles.x1Position]}>x1</Text>
          <Text style={[styles.rp872900000, styles.x1Typo]}>
            Rp. 18.259.000,00
          </Text>
          <Text style={[styles.totalPesanan, styles.x1Typo]}>
            Total Pesanan : Rp. 18.259.000,00
          </Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-684.png")}
          />
        </View>
      </View>
      <View style={[styles.pesananRiwayatInner, styles.pesananPosition]}>
        <View style={styles.arrowLeft1Parent}>
          <Image
            style={styles.arrowLeft1Icon}
            resizeMode="cover"
            source={require("../assets/36arrowleft1.png")}
          />
          <Text style={styles.pesanan}>Pesanan</Text>
          <Pressable
            style={[styles.dikirim, styles.dikirimPosition]}
            onPress={() => navigation.navigate("PesananDikirim")}
          >
            <Text style={styles.riwayatTypo}>Dikirim</Text>
          </Pressable>
          <Text
            style={[styles.riwayat, styles.riwayatTypo, styles.dikirimPosition]}
          >
            Riwayat
          </Text>
          <View style={styles.groupChild} />
        </View>
      </View>
      <View style={[styles.pesananRiwayatChild, styles.pesananPosition]}>
        <View style={[styles.rectangleParent, styles.groupItemLayout]}>
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <View style={[styles.groupContainer, styles.home11ParentLayout]}>
            <View style={[styles.home11Parent, styles.home11ParentLayout]}>
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
              <Text style={[styles.pesanan1, styles.akunTypo]}>Pesanan</Text>
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
  parentLayout2: {
    width: 319,
    position: "absolute",
  },
  parentLayout: {
    height: 122,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  parentLayout1: {
    width: 318,
    height: 122,
  },
  samsungTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansHebrewCondensed,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    left: 110,
    top: 20,
    position: "absolute",
  },
  x1Typo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansHebrewCondensed,
    position: "absolute",
  },
  x1Position: {
    top: 42,
    fontSize: FontSize.size_xs,
  },
  produkTypo: {
    left: 35,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansHebrewCondensed,
    position: "absolute",
  },
  samsungPosition: {
    top: 475,
    height: 122,
    width: 318,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  pesananPosition: {
    width: 360,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  dikirimPosition: {
    top: 59,
    position: "absolute",
  },
  riwayatTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
  },
  groupItemLayout: {
    height: 54,
    width: 302,
    top: 0,
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
  akunTypo: {
    height: 15,
    top: 24,
    color: Color.white,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  samsungGalaxyS20: {
    width: 99,
  },
  couldPink258Gb: {
    left: 110,
  },
  produk: {
    top: 100,
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
    left: 0,
    top: 0,
  },
  iphone11ProParent: {
    top: 122,
    left: 1,
  },
  huaweiBand7: {
    width: 75,
  },
  huaweiBand7Parent: {
    top: 244,
    left: 1,
  },
  vivobookPro16x: {
    width: 112,
  },
  produk3: {
    top: 94,
  },
  vivobookPro16xOledParent: {
    top: 366,
    left: 1,
  },
  samsungGalaxyS22: {
    width: 127,
  },
  samsungGalaxyS22UltraParent: {
    left: 1,
  },
  appleWatchSeries3Parent: {
    top: 588,
    left: 1,
  },
  redminNote105gParent: {
    top: 698,
    left: 10,
    width: 300,
  },
  frameParent: {
    height: 820,
    left: 0,
    top: 0,
  },
  samsungGalaxyS22UltraGroup: {
    left: -4,
  },
  groupParent: {
    top: 106,
    left: 20,
    height: 608,
  },
  arrowLeft1Icon: {
    height: 30,
    width: 30,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  pesanan: {
    top: 5,
    left: 121,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  dikirim: {
    left: 26,
  },
  riwayat: {
    left: 114,
  },
  groupChild: {
    top: 78,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 55,
    height: 1,
    left: 110,
    position: "absolute",
  },
  arrowLeft1Parent: {
    top: 34,
    width: 199,
    height: 78,
    left: 26,
    position: "absolute",
  },
  pesananRiwayatInner: {
    height: 112,
    top: 0,
  },
  groupItem: {
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
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  note: {
    left: 96,
    top: 1,
  },
  pesanan1: {
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
  groupContainer: {
    top: 7,
    left: 45,
    width: 215,
  },
  rectangleParent: {
    left: 29,
  },
  pesananRiwayatChild: {
    top: 739,
    height: 61,
  },
  pesananRiwayat: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default PesananRiwayat;
