import { Avatar, Box, Icon, Text } from "@/components";

type UserRatingProps = {
  name: string;
  picture: string;
  AVGRating: number;
  totalRatings: number;
};

export function UserRating({ name, picture, AVGRating, totalRatings }: UserRatingProps) {
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Box flex={1} alignItems="center" gap="md">
        <Avatar name={name || ""} picture={picture || ""} />
        <Text variant={500} fontSize={16}>
          {name || ""}
        </Text>
      </Box>

      <Box flex={1} alignItems="center">
        <Text variant={500} fontSize={40} color="color200" mb="ms">
          {AVGRating ?? 0.0}
        </Text>

        <Box gap="sm" flexDirection="row" width="100%" justifyContent="center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Icon
              size={20}
              key={star}
              icon="Star"
              color={AVGRating >= star ? "secondary300" : "bg400"}
            />
          ))}
        </Box>

        <Text fontSize={12} color="bg500" mt="sm">
          {totalRatings ? totalRatings : "Sem "} avaliações
        </Text>
      </Box>
    </Box>
  );
}
