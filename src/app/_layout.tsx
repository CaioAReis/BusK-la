import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Box } from "@/components";
import { darkTheme, lightTheme } from "@/theme";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "(tabs)",
// };

export default function RootLayout() {
  const [isDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;
  const bgColor = theme.colors.bg200;

  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} backgroundColor="bg200">
        <SafeAreaView style={{ flex: 1 }}>
          <Stack initialRouteName="(auth)" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          </Stack>
          <StatusBar backgroundColor={bgColor} style={isDark ? "light" : "dark"} />
        </SafeAreaView>
      </Box>
    </ThemeProvider>
  );
}
