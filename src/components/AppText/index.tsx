import React from "react";
import { Text, TextStyle } from "react-native";
import AppTheme from "../../thema/index";
import { Props } from "./types";

const { font, colors } = AppTheme;

const AppText = (props: Props) => {
  const {
    type = "regular",
    size = "text_lg",
    text = "TEXT NOT FOUND",
    hAlign = "left",
    vAlign = "top",
    color = colors.white,
    margin = {},
    multiText,
    newStyle,
    onPress,
  } = props;

  let style: TextStyle;
  style = {
    fontFamily: font.types[type],
    fontSize: font.size[size],
    textAlign: hAlign,
    textAlignVertical: vAlign,
    color,
    ...margin,
    ...newStyle,
  };

  return (
    <Text disabled={!onPress} onPress={onPress} style={style}>
      {`${text}`}
      {multiText && (
        <Text
          disabled={!onPress}
          onPress={onPress}
          style={{
            ...style,
            fontFamily: font.types[multiText.type],
            fontSize: font.size[multiText.size],
          }}>
          {`${multiText.text}`}
        </Text>
      )}
    </Text>
  );
};

export default AppText;
