import { router } from "expo-router";
import { Switch } from "react-native-gesture-handler";

import { BottomSheet, Box, Divider, Option, Text } from "@/components";
import { City } from "@/utils/types";

type GeralSettingsProps = {
  cities: City[];
  isDark: boolean;
  defaultCity: City;
  getCities: VoidFunction;
  setIsDark: (value: boolean) => void;
  setDefaultCity: (city: City) => void;
};

export function GeralSettings({
  cities,
  isDark,
  setIsDark,
  getCities,
  defaultCity,
  setDefaultCity,
}: GeralSettingsProps) {
  return (
    <Box gap="md">
      <Text variant={700} fontSize={24} color="color200">
        Geral
      </Text>

      <Box borderRadius="sm" overflow="hidden" backgroundColor="bg100">
        <Option onPress={() => router.push("/(session)/updateAccount")} leftIcon="UserRound">
          Editar Perfil
        </Option>

        <Divider width="85%" alignSelf="flex-end" />

        <Option
          leftIcon="Moon"
          right={<Switch value={isDark} onChange={(e) => setIsDark(e.nativeEvent.value)} />}
        >
          Tema escuro
        </Option>

        <Divider width="85%" alignSelf="flex-end" />

        <BottomSheet
          onOpen={getCities}
          trigger={(props) => (
            <Option
              {...props}
              leftIcon="MapPinHouse"
              right={<Text color="color300">{defaultCity.name}</Text>}
            >
              Cidade
            </Option>
          )}
        >
          {() => (
            <Box borderRadius="md" overflow="hidden" mt="md">
              {cities.map((city) => (
                <Option
                  key={city._id}
                  selected={defaultCity === city}
                  onPress={() => setDefaultCity(city)}
                >
                  {city.name}
                </Option>
              ))}
            </Box>
          )}
        </BottomSheet>
      </Box>
    </Box>
  );
}
