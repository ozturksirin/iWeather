import React from "react";
import { TextInput, View, FlatList } from "react-native";
import { styles } from "./index.style";
import AppText from "../AppText";
import { Props } from "./types";

const AppInput = (props: Props) => {
  const {
    navigate,
    placeholder = "Search location",
    onChange,
    value,
    filterData,
  } = props;

  const handleChange = async (value: string | null) => {
    if (!value) {
      return onChange("");
    }
    onChange(value);
  };

  return (
    <>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#7F7F98"
        onChangeText={(value) => handleChange(value)}
        value={
          value === null || value === undefined || value === "null" ? "" : value
        }
        style={styles.container}
      />
      <FlatList
        style={{
          ...styles.list,
        }}
        data={filterData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.search}>
            <AppText
              text={item.name}
              size="text_md"
              type="regular"
              onPress={() => navigate(item)}
            />
          </View>
        )}
      />
    </>
  );
};

export default AppInput;
