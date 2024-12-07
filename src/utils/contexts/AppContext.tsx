import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import { Dispatch, ReactElement, createContext, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { DATA } from "../data";
import { City, UserData } from "../types";

import { ThemeProvider } from "@/theme";

interface ContextData {
  isLoading: boolean;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;

  session: UserData | null;
  setSession: Dispatch<React.SetStateAction<UserData | null>>;

  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;

  defaultCity: City;
  setDefaultCity: React.Dispatch<React.SetStateAction<City>>;
}

const AppContext = createContext<ContextData>({} as ContextData);

export function AppProvider({ children }: { children: ReactElement }) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [session, setSession] = useState<UserData | null>(null);
  const [defaultCity, setDefaultCity] = useState<City>(DATA.citiesToWork[0]);

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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppContext.Provider value={providerValue}>
        <ThemeProvider isDark={isDark}>
          <BottomSheetModalProvider>
            {children}
            <StatusBar style={isDark ? "light" : "dark"} />
          </BottomSheetModalProvider>
        </ThemeProvider>
      </AppContext.Provider>
    </GestureHandlerRootView>
  );
}
