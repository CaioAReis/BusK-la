import * as ImagePicker from "expo-image-picker";
import { Image, TouchableOpacity } from "react-native";

import { BottomSheet } from "./BottomSheet";
import Box from "./Box";
import { Divider } from "./Divider";
import { Icon } from "./Icon";
import { Option } from "./Option";

import { width } from "@/utils/constants/device";
import { SelectPictureProps } from "@/utils/types";

const configImagePicker: ImagePicker.ImagePickerOptions = {
  base64: true,
  aspect: [4, 3],
  allowsEditing: true,
  allowsMultipleSelection: false,
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
};

export function SelectPicture({ value, onChange }: SelectPictureProps) {
  const [permissionCamera, requestPermissionCamera] = ImagePicker.useCameraPermissions();
  const [permissionMediaLibrary, requestPermissionMediaLibrary] =
    ImagePicker.useMediaLibraryPermissions();

  const handleTakePicture = async (onClose: () => void) => {
    if (!permissionCamera?.granted) {
      const { canAskAgain, granted } = await requestPermissionCamera();
      if (!granted && !canAskAgain) return alert("Permissão de câmera negada!");
      if (!granted) return handleTakePicture(onClose);
    }

    ImagePicker.launchCameraAsync(configImagePicker)
      .then(async ({ assets, canceled }) => {
        if (canceled) return;
        const { base64 } = assets[0];

        const result = "data:image/jpeg;base64," + base64;

        onClose();
        return onChange(result);
      })
      .catch(() => alert("A Câmera não pôde ser acessada!"));
  };

  const handleGetPicture = async (onClose: () => void) => {
    if (!permissionMediaLibrary?.granted) {
      const { canAskAgain, granted } = await requestPermissionMediaLibrary();
      if (!granted && !canAskAgain) return alert("Permissão de galeria negada!");
      if (!granted) return handleGetPicture(onClose);
    }

    ImagePicker.launchImageLibraryAsync(configImagePicker)
      .then(async ({ assets, canceled }) => {
        if (canceled) return;
        const { base64 } = assets[0];

        const result = "data:image/jpeg;base64," + base64;

        onClose();
        return onChange(result);
      })
      .catch(() => alert("A Imagem não pôde ser acessada!"));
  };

  const handleRemoveImage = (onClose: () => void) => {
    onChange("");
    onClose();
  };

  return (
    <>
      <BottomSheet
        trigger={(props) => (
          <Box alignSelf="flex-start" flexDirection="row">
            <TouchableOpacity {...props}>
              <Box
                borderRadius="xl"
                overflow="hidden"
                alignItems="center"
                width={width / 4.1}
                height={width / 4.1}
                justifyContent="center"
                backgroundColor="primary300"
              >
                {value ? (
                  <Image src={value} style={{ width: "100%", height: "100%" }} />
                ) : (
                  <Icon icon="Camera" size={30} color="bg100" />
                )}
              </Box>
            </TouchableOpacity>

            <Icon
              p="xs"
              size={18}
              right={0}
              bottom={0}
              icon="Plus"
              color="bg100"
              borderWidth={2}
              borderRadius="md"
              borderColor="bg200"
              position="absolute"
              backgroundColor="success300"
            />
          </Box>
        )}
      >
        {({ handleCloseSheet }) => (
          <Box borderRadius="md" overflow="hidden" mt="md">
            <Option
              selected={false}
              leftIcon="Camera"
              onPress={() => handleTakePicture(handleCloseSheet)}
            >
              Tirar foto
            </Option>

            <Divider />

            <Option
              leftIcon="Image"
              selected={false}
              onPress={() => handleGetPicture(handleCloseSheet)}
            >
              Buscar foto
            </Option>

            <Divider />

            <Option
              selected={false}
              disabled={!value}
              leftIcon="ImageOff"
              onPress={() => handleRemoveImage(handleCloseSheet)}
            >
              Remover foto
            </Option>
          </Box>
        )}
      </BottomSheet>
    </>
  );
}
