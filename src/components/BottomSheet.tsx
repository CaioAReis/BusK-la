import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { ReactElement, useCallback, useRef } from "react";

import { makeStyles } from "@/theme";
import { height } from "@/utils/constants/device";

type BottomSheetProps = {
  snapPoints?: number[];
  children: ReactElement;
  trigger: JSX.ElementType;
};

export function BottomSheet({ children, snapPoints, trigger: Trigger }: BottomSheetProps) {
  const styles = useStyles();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleShowModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const backdrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={1} />
    ),
    []
  );

  return (
    <>
      <Trigger onPress={handleShowModalPress} />

      <BottomSheetModal
        index={0}
        style={styles.teste}
        ref={bottomSheetModalRef}
        backdropComponent={backdrop}
        backgroundStyle={styles.container}
        handleIndicatorStyle={styles.handle}
        snapPoints={snapPoints || [height / 1.8, height / 1.2]}
      >
        <BottomSheetView style={{ flex: 1 }}>{children}</BottomSheetView>
      </BottomSheetModal>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: theme.borderRadii.ml,
    backgroundColor: theme.colors.bg200,
  },
  teste: {
    paddingHorizontal: theme.spacing.md,
  },
  handle: {
    height: 6,
    width: 60,
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.ms,
    backgroundColor: theme.colors.bg400,
  },
}));
