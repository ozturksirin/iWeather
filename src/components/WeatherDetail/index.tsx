import React from "react";
import { View } from "react-native";
import AppText from "../AppText";
import Thermometer from "../../assets/icons/Type=thermometer-simple-light.svg";
import { styles } from "./index.style";
import AppTheme from "../../thema";

const WeatherDetail = (props: Props) => {
  const { title, value, svg } = props;
  return (
    <View style={styles.area}>
      <View style={styles.inner}>
        <View style={styles.titleArea}>
          {svg ? svg : <Thermometer width={24} height={24} />}
          <AppText
            text={title}
            size="text_sm"
            type="bold"
            color={AppTheme.colors.base.gray_200}
            vAlign="center"
          />
        </View>
        <AppText
          text={value}
          size="text_md"
          type="bold"
          color={"#FAFAFA"}
          vAlign="center"
        />
      </View>
    </View>
  );
};

export default WeatherDetail;
