import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bgArea: {
    flex: 1.6,
  },
  bigState: {
    flex: 1,
    backgroundColor: "#16161F",
    padding: 12,
    borderRadius: 12,
  },
  bgState: {
    flex: 1,
    borderRadius: 8,
    padding: 20,
    resizeMode: "contain",
  },
  infoArea: {
    flex: 1,
  },
  infoHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dailyDegreeArea: {
    alignItems: "flex-start",
  },
  weekly: {
    flex: 0.5,
    marginTop: 8,
    paddingHorizontal: 12,
    backgroundColor: "#16161F",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
