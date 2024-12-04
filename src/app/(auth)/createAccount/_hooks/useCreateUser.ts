import { router } from "expo-router";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { API } from "@/services/api";
import AppContext from "@/utils/contexts/AppContext";
import { UserData } from "@/utils/types";

export function useCreateUser() {
  const { setIsLoading, setSession } = useContext(AppContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    defaultValues: { doc: "", name: "", email: "", picture: "", birthDate: "", vehicleType: "" },
  });

  const handleGoBack = () => router.back();

  const onSubmit = (data: UserData) => {
    setIsLoading(true);
    API.createAccount(data)
      .then((result) => {
        setSession(result.user);
        //  Save user on localStorage
        router.push("/(tabs)");
      })
      .catch()
      .finally(() => setIsLoading(false));
  };

  return { handleGoBack, onSubmit, control, handleSubmit, errors };
}
