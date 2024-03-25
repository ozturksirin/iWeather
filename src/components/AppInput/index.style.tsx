import { StyleSheet } from "react-native";

import AppTheme from "../../thema";

const { font, colors } = AppTheme;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    paddingHorizontal: 12,
    borderRadius: 8,
    paddingVertical: 12,
    color: colors.white,
  },
});
