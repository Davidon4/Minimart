import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { fontSizes, spacing } from "../../utils/sizes";

export const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: spacing.md,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.secondary,
    fontSize: fontSizes.xl,
    textAlign: "center",
  },
});
