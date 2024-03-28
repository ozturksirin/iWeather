import React, { useEffect } from "react";
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
    filterData = [],
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
      {filterData !== undefined &&
        filterData !== null &&
        filterData?.length !== 0 && (
          <FlatList
            style={styles.list}
            data={
              filterData?.name
                ? [filterData]
                : filterData?.list
                ? filterData.list
                : []
            }
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <View style={styles.search}>
                  <AppText
                    text={item?.name + ", " + item.sys?.country}
                    size="text_md"
                    vAlign="center"
                    onPress={() => navigate(item)}
                  />
                </View>
              );
            }}
          />
        )}
    </>
  );
};

export default AppInput;
