import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { ScrollView } from "react-native";

import { BottomSheet, Box, Button, Icon, IconButton, Input, Option, Text } from "@/components";
import { CPFMask, dateMask } from "@/utils/constants/masks";
import { validate } from "@/utils/constants/validations";

type FormData = {
  doc: string;
  name: string;
  email: string;
  picture: string;
  birthDate: string;
  vehicleType: string;
};

enum VehicleTypes {
  BIKE = "Bicicleta",
  MOTORCYCLE = "Moto",
  CAR = "Carro",
  TRUCK = "Caminhão",
}

export default function CreateAccount() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { doc: "", name: "", email: "", picture: "", birthDate: "", vehicleType: "" },
  });

  const onSubmit = (data: FormData) => {
    console.warn(data);
    // router.push("/createAccount");
  };

  return (
    <ScrollView>
      <Box backgroundColor="bg200" flex={1}>
        <Box p="md" gap="ms">
          <IconButton icon="ArrowLeft" onPress={() => router.back()} />

          <Box gap="sm">
            <Text variant={500} color="color200" fontSize={32}>
              Criar conta
            </Text>
            <Text color="color300">Preencha com suas informações pessoais</Text>
          </Box>
        </Box>

        <Box px="ml" py="md" gap="ml" mb="xl">
          <Box alignSelf="flex-start">
            <IconButton
              size={30}
              icon="Camera"
              color="bg100"
              boxProps={{ backgroundColor: "primary300", p: "lg" }}
            />
            <Icon
              p="xs"
              size={18}
              right={0}
              bottom={0}
              icon="Plus"
              color="bg100"
              borderWidth={2}
              borderRadius="md"
              borderColor="bg200"
              position="absolute"
              backgroundColor="success300"
            />
          </Box>

          <Controller
            name="name"
            control={control}
            rules={{
              required: "Seu nome é obrigatório",
              pattern: { value: validate.NAME, message: "Nome inválido" },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                onBlur={onBlur}
                label="Nome completo"
                onChangeText={onChange}
                placeholder="Nome completo"
                isInvalid={errors.name?.message}
                right={<Icon icon="UserRound" color="primary300" my="ms" />}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: "Seu email é obrigatório",
              pattern: { value: validate.EMAIL, message: "Email inválido" },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                label="Email"
                onBlur={onBlur}
                placeholder="Email"
                onChangeText={onChange}
                keyboardType="email-address"
                isInvalid={errors.email?.message}
                right={<Icon icon="Mail" color="primary300" my="ms" />}
              />
            )}
          />

          <Controller
            name="doc"
            control={control}
            rules={{
              required: "Seu CPF é obrigatório",
              minLength: { value: 14, message: "CPF inválido" },
              pattern: { value: validate.CPF, message: "CPF inválido" },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="CPF"
                value={value}
                maxLength={14}
                onBlur={onBlur}
                placeholder="CPF"
                keyboardType="numeric"
                isInvalid={errors.doc?.message}
                onChangeText={(doc) => onChange(CPFMask(doc))}
                right={<Icon icon="IdCard" color="primary300" my="ms" />}
              />
            )}
          />

          <Controller
            name="birthDate"
            control={control}
            rules={{
              required: "Data de nascimento é obrigatória",
              minLength: { value: 10, message: "Data inválida" },
              pattern: { value: validate.DATE, message: "Data inválida" },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                maxLength={10}
                onBlur={onBlur}
                keyboardType="numeric"
                label="Data de nascimento"
                placeholder="Data de nascimento"
                isInvalid={errors.birthDate?.message}
                onChangeText={(date) => onChange(dateMask(date))}
                right={<Icon icon="Calendar" color="primary300" my="ms" />}
              />
            )}
          />

          <Controller
            name="vehicleType"
            control={control}
            rules={{ required: "Selecione um tipo" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <BottomSheet
                trigger={(props) => (
                  <Box position="relative">
                    <Input
                      {...props}
                      value={value}
                      onBlur={onBlur}
                      editable={false}
                      onChangeText={onChange}
                      label="Tipo de veículo"
                      placeholder="Tipo de veículo"
                      isInvalid={errors.vehicleType?.message}
                      right={<Icon icon="Car" color="primary300" my="ms" />}
                    />
                    <Icon
                      my="ms"
                      top={32}
                      size={24}
                      right={12}
                      icon="ChevronDown"
                      color="color500"
                      position="absolute"
                    />
                  </Box>
                )}
              >
                <Box borderRadius="md" overflow="hidden" mt="md">
                  <Option
                    selected={value === VehicleTypes.BIKE}
                    onPress={() => onChange(VehicleTypes.BIKE)}
                  >
                    Bicicleta
                  </Option>

                  <Option
                    selected={value === VehicleTypes.MOTORCYCLE}
                    onPress={() => onChange(VehicleTypes.MOTORCYCLE)}
                  >
                    Moto
                  </Option>

                  <Option
                    selected={value === VehicleTypes.CAR}
                    onPress={() => onChange(VehicleTypes.CAR)}
                  >
                    Carro
                  </Option>

                  <Option
                    selected={value === VehicleTypes.TRUCK}
                    onPress={() => onChange(VehicleTypes.TRUCK)}
                  >
                    Caminhão
                  </Option>
                </Box>
              </BottomSheet>
            )}
          />

          <Button onPress={handleSubmit(onSubmit)} marginTop="lg">
            Criar conta
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
}
