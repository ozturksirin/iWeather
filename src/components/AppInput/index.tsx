import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./index.style";

type Props = {};

const AppInput = (props: Props) => {
  return (
    <>
      <View>
        <TextInput
          placeholder="Search location"
          placeholderTextColor="#7F7F98"
          onChangeText={(text) => console.log(text)}
          defaultValue=""
          style={styles.container}
        />
      </View>
    </>
  );
};

export default AppInput;
