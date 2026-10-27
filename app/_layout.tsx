import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { colors } from "@/constants/theme";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.header },
          headerTintColor: colors.primary,
          headerTitleStyle: { fontWeight: "bold" },
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Clube de Cinema" }} />
        <Stack.Screen name="home" options={{ title: "Bilheteria" }} />
        <Stack.Screen name="movie/[id]" options={{ title: "Detalhes" }} />
      </Stack>
    </>
  );
}
