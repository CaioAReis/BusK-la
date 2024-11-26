import { router } from "expo-router";
import { useContext, useRef, useState } from "react";
import { ScrollView } from "react-native";

import { API } from "@/services/api";
import { width } from "@/utils/constants/device";
import { unMask } from "@/utils/constants/masks";
import AppContext from "@/utils/contexts/AppContext";
import { AuthPhone } from "@/utils/types";

export function useAuthCode() {
  const { setIsLoading, setSession } = useContext(AppContext);

  const __scrollRef = useRef<ScrollView | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);

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

  return { onSubmit, updateStep, jumpStep, currentStep, __scrollRef };
}
