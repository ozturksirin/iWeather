import React from "react";
import { ImageBackground, StatusBar } from "react-native";
import { styles } from "./router.style";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Detail from "../screens/WeatherDetail";

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_300Light,
  Nunito_200ExtraLight,
} from "@expo-google-fonts/nunito";

const Stack = createNativeStackNavigator();
export default function Router() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_300Light,
    Nunito_200ExtraLight,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <ImageBackground
          source={require("../assets/images/Background.png")}
          style={{
            flex: 1,
            justifyContent: "center",
          }}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: "transparent",
                paddingHorizontal: 12,
                paddingVertical: 12,
              },
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
          </Stack.Navigator>
        </ImageBackground>
      </NavigationContainer>
    </>
  );
}
