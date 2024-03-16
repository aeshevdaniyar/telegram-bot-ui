import { HStack } from "@components/atoms/HStack";
import { Popover, PopoverContent } from "@components/atoms/Popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { FC } from "react";
export interface QuestionMarkProps {
  popoverText: string;
  
}
export const QuestionMark: FC<QuestionMarkProps> = (props) => {
  const { popoverText } = props;
  return (
    <Popover>
      <PopoverTrigger>
        <HStack className="bg-muted w-7 h-7 rounded-full items-center justify-center">
          ?
        </HStack>
      </PopoverTrigger>
      <PopoverContent side="left">{popoverText}</PopoverContent>
    </Popover>
  );
};
