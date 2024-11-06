import Box from "./Box";

type Props = {
  selected: boolean;
};

export function Dot({ selected }: Props) {
  return (
    <Box
      width={8}
      height={8}
      borderRadius="lg"
      backgroundColor={selected ? "primary300" : "bg400"}
    />
  );
}
