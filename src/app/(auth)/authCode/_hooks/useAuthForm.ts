import { useForm } from "react-hook-form";

import { AuthPhone } from "@/utils/types";

export function useAuthForm() {
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthPhone>({ defaultValues: { phone: "", code: "" } });

  return { watch, control, handleSubmit, errors };
}
