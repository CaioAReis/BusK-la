import { Controller } from "react-hook-form";
import { Image } from "react-native";

import { Box, Input, Text } from "@/components";
import { width } from "@/utils/constants/device";
import { phoneMask } from "@/utils/constants/masks";
import { validate } from "@/utils/constants/validations";
import { StepProps } from "@/utils/types";

const imageSize = width / 1.4;

export function PhoneStep({ control, errors, isHidden }: StepProps) {
  return (
    <Box px="ml" gap="lg" flex={1} width={width}>
      <Image
        resizeMode="contain"
        source={require("@/assets/images/Influencer.png")}
        style={{ alignSelf: "center", width: imageSize, height: imageSize }}
      />

      <Box width="100%" gap="md">
        <Text variant={600} fontSize={22} color="color200">
          Informe seu número
        </Text>
        <Text color="color200">
          Enviaremos um código de verificação de{" "}
          <Text color="primary300" variant={700}>
            6 dígitos
          </Text>
        </Text>
      </Box>

      <Controller
        name="phone"
        control={control}
        rules={{
          required: "Seu telefone é obrigatório",
          pattern: { value: validate.PHONE, message: "Tefelone Inválido" },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            maxLength={15}
            onBlur={onBlur}
            onChangeText={onChange}
            value={phoneMask(value)}
            keyboardType="number-pad"
            placeholder="Número de Telefone"
            isInvalid={errors.phone?.message}
            right={
              <Text fontSize={14} variant={600} color="primary300">
                +55
              </Text>
            }
          />
        )}
      />

      <Text textAlign="center" color="color300">
        Trocou de número?{" "}
        <Text color="primary300" variant={700}>
          Recupere sua conta
        </Text>
      </Text>
    </Box>
  );
}
