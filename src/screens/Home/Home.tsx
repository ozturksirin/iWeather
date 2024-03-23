import React from "react";
import { Text, View } from "react-native";
import { AppText } from "../../components";

type Props = {};

const Home = (props: Props) => {
  return (
    <View style={{ backgroundColor: "grey" }}>
      <Text>Home-Home-Home-Home-Home-Home-Home-</Text>
      <AppText />
    </View>
  );
};

export default Home;
