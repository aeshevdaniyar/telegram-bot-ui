import { HStack } from "@components/atoms/HStack";
import { Popover, PopoverContent } from "@components/atoms/Popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { FC } from "react";
export interface QuestionMarkProps {
  popoverText: string;
  position?: "left" | "top" | "right" | "bottom";
}
export const QuestionMark: FC<QuestionMarkProps> = (props) => {
  const { popoverText, position } = props;
  return (
    <Popover>
      <PopoverTrigger>
        <HStack className="bg-muted w-7 h-7 rounded-full items-center justify-center">
          ?
        </HStack>
      </PopoverTrigger>
      <PopoverContent side={position || "left"}>{popoverText}</PopoverContent>
    </Popover>
  );
};
