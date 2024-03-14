import { Button } from "@components/atoms/Button";
import { Card } from "@components/atoms/Card";
import { HStack } from "@components/atoms/HStack";
import { LinkHref } from "@components/atoms/Link";
import { Text } from "@components/atoms/Text";
import { Container } from "@components/molecules/container";
import { PlanItemCard } from "@components/molecules/plan-item-card";

const TokensPage = () => {
  return (
    <Container>
      <Card>
        <HStack className="gap-2 justify-between items-center flex-col md:flex-row">
          <Text size={"sm"}>
            ⚠️ С подпиской стоимость токенов будет в 2 раза дешевле. Оформить
            подписку выгодно!
          </Text>
          <Button
            className="md:max-w-60 w-full justify-center py-2"
            leftIcon={<p className="text-lg ">💎</p>}
          >
            💸 Оформить подписку
          </Button>
        </HStack>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 mt-4">
        <PlanItemCard price={100} tokens={50} />
        <PlanItemCard price={100} tokens={50} />
        <PlanItemCard price={100} tokens={50} />
        <PlanItemCard price={100} tokens={50} />
      </div>
      <Text className="vela-sm-regular mt-4.5">
        Нажимая кнопку (купить токены), я даю согласие на обработку персональных
        данных и принимаю условия <LinkHref to={"/"}>публичной оферты</LinkHref>
      </Text>
    </Container>
  );
};

export default TokensPage;
