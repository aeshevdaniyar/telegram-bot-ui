import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { Card } from "@components/atoms/Card";
import { FC } from "react";

export interface PlanItemCardProps {
  price: number;
  tokens: number;
  days: number;
  text: string;
}

export const PlanItemCard: FC<PlanItemCardProps> = (props) => {
  const { days, price, tokens, text } = props;

  return (
    <Card>
      <Stack className="gap-4">
        <HStack className="items-center gap-4 md:gap-9 flex-wrap">
          <Text size={"xl"}>{text}</Text>
          <HStack className="gap-3 md:gap-6 flex-wrap">
            <Text>💸 {price}₽</Text>
            <Text>💎 {tokens} токенов</Text>
            <Text>🗓 {days} дня</Text>
          </HStack>
        </HStack>
        <HStack>
          <Button className="w-full">Выбрать этот тариф</Button>
          <Button variant={"secondary"}>?</Button>
        </HStack>
      </Stack>
    </Card>
  );
};
