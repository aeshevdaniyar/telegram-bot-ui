import { HStack } from "@components/atoms/HStack";
import { Progress } from "@components/atoms/Progess";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { FC } from "react";
export interface BotProgressProps {
  value: number;
  text: string;
}
export const BotProgress: FC<BotProgressProps> = (props) => {
  const { value, text } = props;
  return (
    <Stack>
      <HStack className="gap-4.5 items-center">
        <Progress value={value} className="w-full" />
        <Text size={"xs"} className="font-normal">
          {value}%
        </Text>
      </HStack>
      <Text size={"sm"} className="font-normal">
        {text}
      </Text>
    </Stack>
  );
};
