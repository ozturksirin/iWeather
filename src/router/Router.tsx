import React from "react";
import { StatusBar, Text, View } from "react-native";
import { styles } from "./router.style";

import { Stack } from "expo-router";

import Home from "../screens/Home/Home";

export default function Router() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Stack>
          <Home />
        </Stack>
      </View>
    </>
  );
}
