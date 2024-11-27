import { Control, Controller, FieldErrors } from "react-hook-form";
import { Pressable } from "react-native";

import { BottomSheet, Box, Divider, Icon, Input, Option } from "@/components";
import { UserData } from "@/utils/types";

enum VehicleTypes {
  BIKE = "Bicicleta",
  MOTORCYCLE = "Moto",
  CAR = "Carro",
  TRUCK = "Caminhão",
}

type SelectVehicleFormProps = {
  errors: FieldErrors<UserData>;
  control: Control<UserData, any>;
};

export function SelectVehicleForm({ control, errors }: SelectVehicleFormProps) {
  return (
    <Controller
      name="vehicleType"
      control={control}
      rules={{ required: "Selecione um tipo" }}
      render={({ field: { onChange, onBlur, value } }) => (
        <BottomSheet
          trigger={(props) => (
            <Pressable style={{ position: "relative" }} {...props}>
              <Input
                value={value}
                onBlur={onBlur}
                editable={false}
                onChangeText={onChange}
                label="Tipo de veículo"
                placeholder="Tipo de veículo"
                isInvalid={errors.vehicleType?.message}
                right={<Icon icon="Car" color="primary300" my="ms" />}
                {...props}
              />
              <Icon
                my="ms"
                top="42%"
                size={24}
                right={12}
                color="color500"
                icon="ChevronDown"
                position="absolute"
              />
            </Pressable>
          )}
        >
          {() => (
            <Box borderRadius="md" overflow="hidden" mt="md">
              <Option
                selected={value === VehicleTypes.BIKE}
                onPress={() => onChange(VehicleTypes.BIKE)}
              >
                Bicicleta
              </Option>

              <Divider />

              <Option
                selected={value === VehicleTypes.MOTORCYCLE}
                onPress={() => onChange(VehicleTypes.MOTORCYCLE)}
              >
                Moto
              </Option>

              <Divider />

              <Option
                selected={value === VehicleTypes.CAR}
                onPress={() => onChange(VehicleTypes.CAR)}
              >
                Carro
              </Option>

              <Divider />

              <Option
                selected={value === VehicleTypes.TRUCK}
                onPress={() => onChange(VehicleTypes.TRUCK)}
              >
                Caminhão
              </Option>
            </Box>
          )}
        </BottomSheet>
      )}
    />
  );
}
