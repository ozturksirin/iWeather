import React from "react";
import { View } from "react-native";
import AppText from "../AppText";
import Cloud from "../../assets/icons/Weather=Storm, Moment=Day.svg";
import AppTheme from "../../thema";
import { styles } from "./index.style";

type Props = {};

const WeeklyInfo = (props: Props) => {
  return (
    <>
      <View style={styles.body}>
        <AppText
          text="Mon"
          size="heading_sm"
          type="regular"
          color={AppTheme.colors.base.gray_200}
          vAlign="center"
          hAlign="center"
        />
        <Cloud width={80} height={56} />
        <AppText
          text="32°c"
          size="text_sm"
          type="bold"
          vAlign="center"
          hAlign="center"
        />
        <AppText
          text="26°c"
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
