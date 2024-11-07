import { ReactElement, useRef } from "react";
import { TextInput, TextInputProps } from "react-native";

import Box from "./Box";
import Text from "./Text";

import { makeStyles } from "@/theme";

type InputProps = { right?: ReactElement; label?: string; isInvalid?: string } & TextInputProps;

export function Input({ right: Right, label, isInvalid, ...textInputProps }: InputProps) {
  const styles = useStyles();
  const __inputRef = useRef<TextInput>(null);

  return (
    <Box gap="sm">
      {label && (
        <Text
          mb="xs"
          variant={500}
          fontSize={16}
          color="color300"
          onPress={() => __inputRef.current?.focus()}
        >
          {label}
        </Text>
      )}

      <Box
        pl="md"
        gap="sm"
        overflow="hidden"
        borderRadius="ms"
        flexDirection="row"
        alignItems="center"
        backgroundColor="bg100"
        borderWidth={isInvalid ? 1.5 : 0}
        borderColor={isInvalid ? "error300" : "bg100"}
      >
        {Right}
        <TextInput
          ref={__inputRef}
          {...textInputProps}
          placeholderTextColor={styles.place.color}
          style={[styles.input, textInputProps.style, isInvalid ? styles.colorError : styles.color]}
        />
      </Box>
      {isInvalid && (
        <Text px="sm" variant={500} color="error300" fontSize={12}>
          {isInvalid}
        </Text>
      )}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Rubik_400Regular",
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.sm,
    backgroundColor: theme.colors.bg100,
  },
  place: {
    color: theme.colors.bg500,
  },
  colorError: {
    color: theme.colors.error300,
  },
  color: {
    color: theme.colors.color300,
  },
}));
