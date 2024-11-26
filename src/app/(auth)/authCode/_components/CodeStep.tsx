import { Controller } from "react-hook-form";
import { Image } from "react-native";

import { Box, Input, Text } from "@/components";
import { width } from "@/utils/constants/device";
import { phoneMask } from "@/utils/constants/masks";
import { StepProps } from "@/utils/types";

const imageSize = width / 1.4;

export function CodeStep({ control, watch, errors, isHidden }: StepProps) {
  return (
    <Box px="ml" gap="lg" flex={1} width={width}>
      <Image
        resizeMode="contain"
        source={require("@/assets/images/Cybersecurity.png")}
        style={{ alignSelf: "center", width: imageSize, height: imageSize }}
      />

      <Box width="100%" gap="md">
        <Text fontSize={22} variant={600} color="color200">
          Código enviado
        </Text>
        <Text color="color200">
          {"O código foi enviado para "}
          <Text color="primary300" variant={700}>
            {phoneMask(watch!("phone"))}
          </Text>
        </Text>
      </Box>

      {!isHidden && (
        <Controller
          name="code"
          control={control}
          rules={{
            required: "Seu telefone é obrigatório",
            minLength: { value: 6, message: "O código deve ter 6 dígitos" },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              maxLength={6}
              value={value}
              onBlur={onBlur}
              placeholder="******"
              keyboardType="numeric"
              autoComplete="sms-otp"
              isInvalid={errors.code?.message}
              style={{ textAlign: "center", letterSpacing: 12 }}
              onChangeText={(v) => onChange(v.replace(/\D/g, ""))}
            />
          )}
        />
      )}

      <Text textAlign="center" color="color300">
        Não recebeu o código?{" "}
        <Text color="primary300" variant={700}>
          Envie novamente
        </Text>
      </Text>
    </Box>
  );
}
