import { Container } from "@components/molecules/container";
import { Card } from "@components/atoms/Card";
import { Text } from "@components/atoms/Text";
import { HStack } from "@components/atoms/HStack";
import { Button } from "@components/atoms/Button";
import { Stack } from "@components/atoms/Stack";
import { PlanItemCard } from "@components/molecules/plan-item-card";

const PlansPage = () => {
  return (
    <Container>
      <Card>
        <HStack className="gap-2 justify-between items-center flex-wrap">
          <Text size={"sm"}>С подпиской токены стоят в 2 раза дешевле!</Text>
          <Button
            className="max-w-60 w-full justify-center py-2 "
            leftIcon={<p className="text-lg ">💎</p>}
          >
            Купить токен
          </Button>
        </HStack>
      </Card>
      <Stack className="gap-4.5 mt-4">
        <PlanItemCard days={3} price={100} tokens={50} text="Пробный тариф:" />
        <PlanItemCard days={3} price={100} tokens={50} text="Пробный тариф:" />
        <PlanItemCard days={3} price={100} tokens={50} text="Пробный тариф:" />
        <PlanItemCard days={3} price={100} tokens={50} text="Пробный тариф:" />
      </Stack>
    </Container>
  );
};

export default PlansPage;
