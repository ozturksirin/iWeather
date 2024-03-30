import React, { useEffect, useState } from "react";
import { TextInput, View, FlatList, ActivityIndicator } from "react-native";
import { styles } from "./index.style";
import AppText from "../AppText";
import { Props } from "./types";
import Spinner from "../../assets/icons/Type=spinner-gap-regular.svg";

const AppInput = (props: Props) => {
  const {
    navigate,
    placeholder = "Search location",
    onChange,
    value,
    filterData = [],
    showLoading = false,
  } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = async (value: string | null) => {
    setLoading(true);
    if (!value) {
      onChange("");
    } else {
      onChange(value);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [navigate]);

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
      {showLoading && loading && (
        <Spinner
          style={{
            position: "absolute",
            right: 14,
            top: 78,
            zIndex: 1,
          }}
          width={28}
          height={28}
        />
      )}
      {/* --- filterData --- */}
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
