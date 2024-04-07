import { Container } from "@components/molecules/container";
import { Card } from "@components/atoms/Card";
import { Text } from "@components/atoms/Text";
import { HStack } from "@components/atoms/HStack";
import { Button } from "@components/atoms/Button";
import { Stack } from "@components/atoms/Stack";
import { PlanItemCard } from "@components/molecules/plan-item-card";
import { LinkHref } from "@components/atoms/Link";
import { PageHeader } from "@components/organisms/page-header";
import { BaseHeaderContent } from "@components/templates/base-header-content";

const PlansPage = () => {
  return (
    <PageHeader pageContent={<BaseHeaderContent title="Тарифы" />}>
      <Container>
        <Card>
          <HStack className="gap-2 justify-between items-center flex-wrap">
            <Text size={"sm"}>С подпиской токены стоят в 2 раза дешевле!</Text>
            <a href="https://robokassa.com/" target="_blank">
              Тестовая ссылка
            </a>

            <Button
              className="max-w-60 w-full justify-center py-2 "
              leftIcon={<p className="text-lg ">💎</p>}
            >
              Купить токен
            </Button>
          </HStack>
        </Card>
        <Stack className="gap-4.5 mt-4">
          <PlanItemCard
            days={3}
            price={100}
            tokens={50}
            text="Пробный тариф:"
          />
          <PlanItemCard
            days={3}
            price={100}
            tokens={50}
            text="Пробный тариф:"
          />
          <PlanItemCard
            days={3}
            price={100}
            tokens={50}
            text="Пробный тариф:"
          />
          <PlanItemCard
            days={3}
            price={100}
            tokens={50}
            text="Пробный тариф:"
          />
        </Stack>
        <Text className="vela-sm-regular mt-4.5">
          Нажимая кнопку "Купить подписку", я даю согласие на регулярные
          списания, на обработку персональных данных и принимаю условия
          <LinkHref to={"/"}>публичной оферты</LinkHref>
        </Text>
      </Container>
    </PageHeader>
  );
};

export default PlansPage;
