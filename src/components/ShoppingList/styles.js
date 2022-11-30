import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { fontSizes, spacing } from "../../utils/sizes";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  listItems: {
    margin: 4,
    padding: spacing.lg,
    borderRadius: spacing.lg,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.section,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  listItemText: {
    fontSize: fontSizes.md,
  },
  textItem: {
    height: 50,
    marginTop: spacing.sm,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
});
