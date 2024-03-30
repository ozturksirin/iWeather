import React from "react";
import { View } from "react-native";
import AppText from "../AppText";
import AppTheme from "../../thema";
import { styles } from "./index.style";
import { Props } from "./types";

const WeeklyInfo = (props: Props) => {
  const { day, maxDegree, minDegree, svg } = props;
  return (
    <>
      <View style={styles.body}>
        <AppText
          text={day ? day : ""}
          size="heading_sm"
          type="regular"
          color={AppTheme.colors.base.gray_200}
          vAlign="center"
          hAlign="center"
        />
        {svg ? svg : null}
        <AppText
          text={maxDegree ? maxDegree : ""}
          size="text_sm"
          type="bold"
          vAlign="center"
          hAlign="center"
        />
        <AppText
          text={minDegree ? minDegree : ""}
          size="text_sm"
          type="regular"
          color={AppTheme.colors.base.gray_200}
          vAlign="center"
          hAlign="center"
        />
      </View>
    </>
  );
};

export default WeeklyInfo;
