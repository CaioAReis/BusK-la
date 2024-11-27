import { Control, Controller, FieldErrors } from "react-hook-form";

import { SelectVehicleForm } from "./SelectVehicleForm";

import { Box, Icon, Input, Button, SelectPicture } from "@/components";
import { CPFMask, dateMask } from "@/utils/constants/masks";
import { validate } from "@/utils/constants/validations";
import { UserData } from "@/utils/types";

type CreateUserFormProps = {
  onSubmit: VoidFunction;
  errors: FieldErrors<UserData>;
  control: Control<UserData, any>;
};

export function CreateUserForm({ control, errors, onSubmit }: CreateUserFormProps) {
  return (
    <Box px="ml" py="md" gap="ml" mb="xl">
      <Controller
        name="picture"
        control={control}
        render={({ field: { onChange, value } }) => (
          <SelectPicture value={value} onChange={onChange} />
        )}
      />

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

      <SelectVehicleForm control={control} errors={errors} />

      <Button onPress={onSubmit} marginTop="lg">
        Criar conta
      </Button>
    </Box>
  );
}
