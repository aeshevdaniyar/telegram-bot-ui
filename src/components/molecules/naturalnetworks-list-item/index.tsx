import { Box } from "@components/atoms/Box";
import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import { ArrowRight } from "@components/atoms/Icon";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { Card } from "@components/atoms/Card";
import { FC } from "react";
import { QuestionMark } from "../question-mark";
import { useNavigate } from "react-router-dom";
import { AiModel } from "@/lib/api/types";
import qs from "qs";
//TODO:Fix font-family classname
export interface NaturalnetworksListItemProps extends AiModel {}
export const NaturalnetworksListItem: FC<NaturalnetworksListItemProps> = (
  props
) => {
  const { description, name, code, hint, icon, pk } = props;
  const navigate = useNavigate();

  const goNewChat = () => {
    const query = qs.stringify({
      code,
      pk,
      icon,
      name,
      amount: 120,
    });
    navigate(`/new-chat?${query}`);
  };
  return (
    <Card className="relative overflow-hidden">
      {/* {isNew && (
        <Box className="absolute top-0 -left-0 text-accent-green bg-accent-green/15 font-semibold font-vela py-1.5 px-5 rounded-br-xl ">
          NEW
        </Box>
      )} */}
      <Stack className="gap-5 mt-6">
        <HStack className="gap-3 items-center">
          <Box className="min-w-20 h-20">
            <img src={icon} className="min-w-full h-full" />
          </Box>

          <Stack className="gap-1">
            <Text className="inter-2xl-semibold text-heading-color">
              {name}
            </Text>
            <Text className="text-sm md:text-lg font-normal ">
              {description}
            </Text>
            <Text className="text-sm md:text-lg font-normal ">
              💎 Стоимость: 100 токенов
            </Text>
          </Stack>
        </HStack>
        <HStack>
          <Button
            className="w-full justify-center"
            rightIcon={<ArrowRight />}
            onClick={goNewChat}
          >
            Начать чат
          </Button>
        </HStack>
      </Stack>
      <Box className="absolute top-4.5 right-4.5">
        <QuestionMark popoverText={hint || ""} />
      </Box>
    </Card>
  );
};
