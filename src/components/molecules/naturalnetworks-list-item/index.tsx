import { Box } from "@components/atoms/Box";
import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import { ArrowRight } from "@components/atoms/Icon";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { Card } from "@components/atoms/Card";
import { FC } from "react";

//TODO:Fix font-family classname
export interface NaturalnetworksListItemProps {
  imageLogo: string;
  name: string;
  description: string;
}
export const NaturalnetworksListItem: FC<NaturalnetworksListItemProps> = (
  props
) => {
  const { description, imageLogo, name } = props;
  return (
    <Card>
      <Stack className="gap-5">
        <HStack className="gap-3 items-center">
          <Box className="min-w-20 h-20">
            <img src={imageLogo} className="min-w-full h-full" />
          </Box>

          <Stack className="gap-2">
            <Text className="inter-2xl-semibold text-heading-color">
              {name}
            </Text>
            <Text className="text-heading-color text-sm md:text-lg font-normal ">
              {description}
            </Text>
          </Stack>
        </HStack>
        <HStack>
          <Button className="w-full justify-center" rightIcon={<ArrowRight />}>
            Начать чат
          </Button>
        </HStack>
      </Stack>
    </Card>
  );
};
