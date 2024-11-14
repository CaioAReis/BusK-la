import { useRef } from "react";
import { TextInput } from "react-native";

import Box from "./Box";
import Text from "./Text";

import { makeStyles } from "@/theme";
import { InputProps } from "@/utils/types";

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
        gap="sm"
        overflow="hidden"
        borderRadius="ms"
        flexDirection="row"
        alignItems="center"
        backgroundColor="bg100"
        pl={Right ? "md" : "xs"}
        borderWidth={isInvalid ? 1.5 : 0}
        borderColor={isInvalid ? "error300" : "bg100"}
      >
        {Right}
        <TextInput
          ref={__inputRef}
          {...textInputProps}
          cursorColor={styles.cursorColor}
          placeholderTextColor={styles.place}
          style={[
            styles.input,
            textInputProps.style,
            { color: isInvalid ? styles.colorError : styles.color },
          ]}
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
  place: theme.colors.bg500,
  color: theme.colors.color300,
  colorError: theme.colors.error300,
  cursorColor: theme.colors.secondary100,
}));
