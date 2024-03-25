import { StyleSheet } from "react-native";

import AppTheme from "../../thema";

const {
  colors,
  device: { width, height },
} = AppTheme;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    paddingHorizontal: 12,
    borderRadius: 8,
    paddingVertical: 12,
    color: colors.white,
  },
  search: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#1E1E29",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  list: {
    flex: 1,
    marginTop: 12,
    minHeight: height / 2.4,
    backgroundColor: "#3B3B54",
    borderRadius: 8,
  },
});
