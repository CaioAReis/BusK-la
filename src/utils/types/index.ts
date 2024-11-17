import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BoxProps, ResponsiveValue } from "@shopify/restyle";
import { icons } from "lucide-react-native";
import { ReactElement } from "react";
import { Control, FieldErrors } from "react-hook-form";
import { DimensionValue, TextInputProps, TouchableOpacityProps } from "react-native";

import { Theme } from "@/theme";

export type AuthPhone = {
  phone: string;
  code: string;
};

export type StepProps = {
  isHidden?: boolean;
  control: Control<AuthPhone>;
  errors: FieldErrors<AuthPhone>;
};

export type UserData = {
  _id: string;
  doc: string;
  name: string;
  email: string;
  picture: string;
  birthDate: string;
  vehicleType: string;
  phone: string;

  cityToWork: string;

  totalDeliveries: number;
  deliveryTime: number;
  totalKM: number;

  AVGRating: number;
  totalRatings: number;
};

export type AvatarProps = {
  size?: number;
  name: string;
};

export type BottomSheetProps = {
  onOpen?: () => void;
  onClose?: () => void;
  snapPoints?: number[];
  ref?: BottomSheetModal;
  trigger: JSX.ElementType;
  children: JSX.ElementType;
};

export type DeliveryCardProps = {
  code: string;
  createdAt: Date;
  address: string;
  started: boolean;
  status: 0 | 1 | 2;
} & BoxProps<Theme>;

export type DeliveriesStartedProps = {
  list: DeliveryCardProps[];
};

export type DividerProps = {
  color?: keyof Theme["colors"];
  width?: ResponsiveValue<DimensionValue | undefined, undefined>;
} & BoxProps<Theme>;

export type DotProps = {
  width?: number;
  height?: number;
  selected: boolean;
};

export type IconProps = {
  size?: number;
  icon: keyof typeof icons;
  color?: keyof Theme["colors"];
} & BoxProps<Theme>;

export type ButtonProps = {
  size?: number;
  icon: keyof typeof icons;
  color?: keyof Theme["colors"];
  boxProps?: BoxProps<Theme>;
} & TouchableOpacityProps;

export type InputProps = {
  label?: string;
  isInvalid?: string;
  right?: ReactElement;
} & TextInputProps;

export type NotificationCardProps = {
  _id?: string;
  body: string;
  title: string;
  isNew?: boolean;
  createdAt: Date;
};

export type OptionProps = {
  children: string;
  selected?: boolean;
  right?: ReactElement;
  leftIcon?: keyof typeof icons;
  color?: keyof Theme["colors"];
} & TouchableOpacityProps;

export type SectionTitleProps = {
  title: string;
  icon: keyof typeof icons;
};

export type SelectPictureProps = {
  value: string;
  onChange: (value: string) => void;
};

export type StepsLineProps = {
  status: 0 | 1 | 2;
};

export type TabBarIconProps = {
  name: string;
  focused: boolean;
  icon: keyof typeof icons;
};
