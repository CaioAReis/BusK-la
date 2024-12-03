import { ScrollView } from "react-native";

import {
  LogOutModal,
  LogoVersion,
  HeaderProfile,
  GeralSettings,
  OthersSettings,
} from "./_components";
import { useProfile } from "./_hooks/useProfile";

import { Box } from "@/components";

export default function Profile() {
  const { cities, defaultCity, getCities, isDark, session, setDefaultCity, setIsDark } =
    useProfile();

  return (
    <Box flex={1} backgroundColor="bg200">
      <ScrollView>
        <Box px="md" gap="lg" mt="ml">
          <HeaderProfile session={session!} />

          <GeralSettings
            cities={cities}
            isDark={isDark}
            getCities={getCities}
            setIsDark={setIsDark}
            defaultCity={defaultCity}
            setDefaultCity={setDefaultCity}
          />

          <OthersSettings />

          <LogOutModal />

          <LogoVersion />

          <Box height={100} />
        </Box>
      </ScrollView>
    </Box>
  );
}
