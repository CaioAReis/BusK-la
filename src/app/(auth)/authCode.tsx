import { router } from "expo-router";
import { useContext, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { Box, Button, IconButton, Input, Text } from "@/components";
import { API } from "@/services/api";
import { isAndroid, width } from "@/utils/constants/device";
import { phoneMask, unMask } from "@/utils/constants/masks";
import { validate } from "@/utils/constants/validations";
import AppContext from "@/utils/contexts/AppContext";
import { AuthPhone, StepProps } from "@/utils/types";

const imageSize = width / 1.4;

const Step1 = ({ control, errors }: StepProps) => (
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

const Step2 = ({ control, watch, errors, isHidden }: StepProps) => (
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

export default function AuthCode() {
  const { setIsLoading, setSession } = useContext(AppContext);

  const __scrollRef = useRef<ScrollView | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthPhone>({ defaultValues: { phone: "", code: "" } });

  const onSubmit = (data: AuthPhone) => {
    if (currentStep === 0) {
      setIsLoading(true);
      return API.sendAuthCode(unMask(data.phone))
        .then(() => {
          return setCurrentStep((prev) => {
            const result = prev + 1;
            jumpStep(result);
            return result;
          });
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }

    setIsLoading(true);
    API.verifyCode({ phone: unMask(data.phone), code: data.code })
      .then((result) => {
        if (result?.error) return alert(result.message);

        if (result?.user) {
          setSession(result.user);
          //  Salvar usuário no localStorage
          router.push("/(tabs)");
          return result?.user;
        }

        router.push("/createAccount");
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  const updateStep = (scrollPosition: number) => {
    const result = (scrollPosition / width).toFixed(0);
    setCurrentStep(parseInt(result, 10));
  };

  const jumpStep = (to: number) => {
    __scrollRef.current?.scrollTo({ x: width * to, animated: true });
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={isAndroid ? "height" : "padding"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box backgroundColor="bg200" flex={1} mt="ml">
          <Box
            px="md"
            py="sm"
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
          >
            {currentStep === 0 ? (
              <Box width={43} />
            ) : (
              <IconButton icon="ArrowLeft" onPress={() => jumpStep(currentStep - 1)} />
            )}

            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("@/assets/images/logo.png")}
            />

            <Box width={43} />
          </Box>

          <Box flex={1}>
            <ScrollView
              horizontal
              pagingEnabled
              ref={__scrollRef}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={(e) => updateStep(e.nativeEvent.contentOffset.x)}
            >
              <Step1 control={control} errors={errors} />
              <Step2 watch={watch} control={control} errors={errors} isHidden={currentStep === 0} />
            </ScrollView>

            <Box px="md" flex={1}>
              <Button onPress={handleSubmit(onSubmit)}>
                {currentStep === 0 ? "Enviar" : "Continuar"}
              </Button>
            </Box>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: width / 2.5,
    marginHorizontal: 16,
  },
});
