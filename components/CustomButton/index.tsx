import type { Ref } from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { colors, spacing } from "@/constants/theme";

interface CustomButtonProps extends PressableProps {
  title: string;
  variant?: "primary" | "secondary";
  ref?: Ref<View>;
}

export function CustomButton({
  title,
  variant = "primary",
  style,
  ref,
  ...rest
}: CustomButtonProps) {
  return (
    <Pressable
      ref={ref}
      accessibilityRole="button"
      style={(state) => [
        styles.button,
        variant === "secondary" && styles.buttonSecondary,
        state.pressed && styles.buttonPressed,
        typeof style === "function" ? style(state) : style,
      ]}
      {...rest}
    >
      <Text
        style={[styles.text, variant === "secondary" && styles.textSecondary]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: spacing.lg,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: spacing.sm,
    width: "100%",
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  text: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },
  textSecondary: {
    color: colors.primary,
  },
});
