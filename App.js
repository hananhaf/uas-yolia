const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splashscreen from "./screens/Splashscreen";
import Dashboard from "./screens/Dashboard";
import AkunSaya from "./screens/AkunSaya";
import Login from "./screens/Login";
import PesananRiwayat from "./screens/PesananRiwayat";
import PesananDikirim from "./screens/PesananDikirim";
import SmartPhone from "./screens/SmartPhone";
import Laptop from "./screens/Laptop";
import Smartwatch from "./screens/Smartwatch";
import Checkout from "./screens/Checkout";
import Checkout1 from "./screens/Checkout1";
import Checkout2 from "./screens/Checkout2";
import Checkout3 from "./screens/Checkout3";
import Keranjang from "./screens/Keranjang";
import Detail from "./screens/Detail";
import Detail1 from "./screens/Detail1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    "Open Sans Hebrew Condensed": require("./assets/fonts/Open_Sans_Hebrew_Condensed.ttf"),
    Roboto: require("./assets/fonts/Roboto.ttf"),
    Oswald: require("./assets/fonts/Oswald.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splashscreen"
              component={Splashscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AkunSaya"
              component={AkunSaya}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PesananRiwayat"
              component={PesananRiwayat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PesananDikirim"
              component={PesananDikirim}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SmartPhone"
              component={SmartPhone}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Laptop"
              component={Laptop}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Smartwatch"
              component={Smartwatch}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout1"
              component={Checkout1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout2"
              component={Checkout2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout3"
              component={Checkout3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Keranjang"
              component={Keranjang}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detail1"
              component={Detail1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splashscreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
