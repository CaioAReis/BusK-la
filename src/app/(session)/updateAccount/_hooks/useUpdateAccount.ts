import { router } from "expo-router";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { API } from "@/services/api";
import { CPFMask } from "@/utils/constants/masks";
import AppContext from "@/utils/contexts/AppContext";
import { UserData } from "@/utils/types";

export function useUpdateAccount() {
  const { setIsLoading, session, setSession } = useContext(AppContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    defaultValues: {
      name: session?.name ?? "",
      email: session?.email ?? "",
      picture: session?.picture ?? "",
      doc: CPFMask(session!.doc) ?? "",
      birthDate: session?.birthDate ?? "",
      vehicleType: session?.vehicleType ?? "",
    },
  });

  const handleGoBack = () => router.back();

  const onSubmit = (data: UserData) => {
    setIsLoading(true);
    API.createAccount(data)
      .then(() => {
        setSession({ ...session, ...data });
        //  Salvar usuário no localStorage
        router.back();
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  return { control, errors, handleSubmit, handleGoBack, onSubmit };
}
