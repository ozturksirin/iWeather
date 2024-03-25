import React from "react";
import { View } from "react-native";
import { AppInput, AppText } from "../../components";
import LongLogo from "../../assets/icons/logoLong.svg";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <LongLogo
        style={{
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 50,
        }}
        width={186}
        height={32}
      />
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignSelf: "center" }}>
        <AppText
          text="Welcome to "
          size="text_lg"
          type="bold"
          hAlign="center"
          multiText={{
            text: "TypeWeather",
            type: "bold",
            size: "text_xl",
          }}
        />
        <AppText
          text="Choose a location to see the weather forecast"
          size="text_sm"
          type="regular"
          newStyle={{ marginBottom: 20 }}
        />
        <AppInput />
      </View>
      <View style={{ flex: 1 }} />
    </>
  );
};

export default Home;
