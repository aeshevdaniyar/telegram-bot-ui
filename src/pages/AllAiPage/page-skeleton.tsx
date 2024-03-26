import { Skeleton } from "@components/atoms/Skeleton";
import { Stack } from "@components/atoms/Stack";

export const PageSkeleton = () => {
  return (
    <Stack className="gap-4.5">
      <AiModelSkeleton />
      <AiModelSkeleton />
      <AiModelSkeleton />
      <AiModelSkeleton />
      <AiModelSkeleton />
      <AiModelSkeleton />
      <AiModelSkeleton />
      <AiModelSkeleton />
      <AiModelSkeleton />
      <AiModelSkeleton />
      <AiModelSkeleton />
      <AiModelSkeleton />
    </Stack>
  );
};

const AiModelSkeleton = () => {
  return <Skeleton className="w-full rounded-xl h-46" />;
};
