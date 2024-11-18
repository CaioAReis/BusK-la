import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { Box } from "@/components";
import { darkTheme, lightTheme } from "@/theme";
import AppContext from "@/utils/contexts/AppContext";
import { DATA } from "@/utils/data";
import { City, UserData } from "@/utils/types";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "(tabs)",
// };

export default function RootLayout() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [session, setSession] = useState<UserData | null>(null);
  const [defaultCity, setDefaultCity] = useState<City>(DATA.citiesToWork[0]);

  const theme = isDark ? darkTheme : lightTheme;
  const bgColor = theme.colors.bg200;

  const providerValue = {
    isDark,
    setIsDark,

    isLoading,
    setIsLoading,

    session,
    setSession,

    defaultCity,
    setDefaultCity,
  };

  const [loaded, error] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={providerValue}>
          <BottomSheetModalProvider>
            <Box flex={1} backgroundColor="bg200">
              <SafeAreaView style={{ flex: 1 }}>
                <Stack initialRouteName="(auth)" screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="(auth)" />
                  <Stack.Screen name="(tabs)" />
                </Stack>
                <StatusBar backgroundColor={bgColor} style={isDark ? "light" : "dark"} />
              </SafeAreaView>
            </Box>
          </BottomSheetModalProvider>
        </AppContext.Provider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
