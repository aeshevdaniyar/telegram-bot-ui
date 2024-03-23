import { Box } from "@components/atoms/Box";
import { HStack } from "@components/atoms/HStack";
import { Skeleton } from "@components/atoms/Skeleton";
import { Stack } from "@components/atoms/Stack";

export const PageSkeleton = () => {
  return (
    <Stack className="gap-4.5">
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Stack className="gap-4.5">
          <HStack className="items-center gap-6">
            <Skeleton className="rounded-full w-20 h-20" />
            <Stack className="w-full">
              <Skeleton />
              <Skeleton className="p-2" />
            </Stack>
          </HStack>
          <Box className="bg-muted p-4 rounded-md w-full">
            <Skeleton className="w-full h-36" />
          </Box>
        </Stack>
        <Stack className="gap-4.5">
          <Stack>
            <Skeleton className="h-14" />
            <Skeleton className="h-14" />
          </Stack>
          <Stack>
            <Skeleton className="h-14" />
            <Skeleton className="h-14" />
          </Stack>
        </Stack>
      </Box>
      <Skeleton className="w-full h-28" />
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
      </Box>
    </Stack>
  );
};
