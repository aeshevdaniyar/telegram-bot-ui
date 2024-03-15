import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import { ImportIcon } from "@components/atoms/Icon";

export const ImageActions = () => {
  return (
    <HStack className="absolute right-0 left-0 bottom-0 p-1 md:p-4 w-full gap-1 md:gap-2">
      <Button className="w-full p-0 shrink text-[8px] md:text-sm">
        Сделать похожую
      </Button>
      <Button
        className="bg-white/20 min-w-8 md:min-w-10  h-8 md:h-10 p-0"
        variant={"ghost"}
      >
        <ImportIcon />
      </Button>
    </HStack>
  );
};
