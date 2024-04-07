import { useProfile } from "@/lib/query/hooks/profile/query";
import { useTelegram } from "@/telegram";
import { Avatar, AvatarFallback } from "@components/atoms/Avatar";
import { Box } from "@components/atoms/Box";
import { Button } from "@components/atoms/Button";
import { Card } from "@components/atoms/Card";
import { HStack } from "@components/atoms/HStack";
import {
  MagicStarIcon,
  MessageProgrammingIcon,
  MessageQuestionIcon,
} from "@components/atoms/Icon";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { Container } from "@components/molecules/container";
import { QuestionMark } from "@components/molecules/question-mark";
import { PageHeader } from "@components/organisms/page-header";
import { BaseHeaderContent } from "@components/templates/base-header-content";
import { useNavigate } from "react-router-dom";
import { PageSkeleton } from "./page-skeleton";
const ProfilePage = () => {
  const navigate = useNavigate();
  const { user } = useTelegram();
  const { profile, isLoading } = useProfile(1605368953);

  if (isLoading) {
    return (
      <PageHeader pageContent={<BaseHeaderContent title="Мой аккаунт" />}>
        <Container>
          <PageSkeleton />
        </Container>
      </PageHeader>
    );
  }
  return (
    <PageHeader pageContent={<BaseHeaderContent title="Мой аккаунт" />}>
      <Container>
        <Stack className="gap-4.5">
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Stack className="gap-4.5">
              <HStack className="items-center gap-6">
                <Avatar className="w-20 h-20">
                  {/* <AvatarImage src={webApp?.initDataUnsafe?.user.photo_url} /> */}
                  <AvatarFallback>SR</AvatarFallback>
                </Avatar>
                <Stack className="w-full">
                  <Text className="text-2xl font-semibold">
                    {user?.first_name} {user?.last_name}
                  </Text>
                  <Box className="bg-muted p-2 rounded-md text-center">
                    <Text className="text-lg font-medium">
                      @{user?.username}
                    </Text>
                  </Box>
                </Stack>
              </HStack>
              <Box className="bg-muted p-4 rounded-md w-full">
                <Stack>
                  <Text className="text-xl">Что дает ваша подписка?</Text>
                  <ul className="list-disc pl-4">
                    <li>
                      <Text size={"xs"}>
                        Ежемесячно начисляется 500 токенов
                      </Text>
                    </li>
                    <li>
                      <Text size={"xs"}>Безлимит к ChatGPT 3.5 turbo</Text>
                    </li>
                    <li>
                      <Text size={"xs"}>
                        Токены в магазине теперь стоят в X2 раза дешевле!
                      </Text>
                    </li>
                  </ul>
                </Stack>
              </Box>
            </Stack>
            <Stack className="gap-4.5">
              <Stack>
                <Card>
                  <HStack className="justify-between items-center">
                    <Text className="text-xl">
                      💎 {profile?.token_balance} токенов
                    </Text>
                    <QuestionMark popoverText="Тут текст" />
                  </HStack>
                </Card>
                <Button onClick={() => navigate("/tokens")}>
                  Купить токены
                </Button>
              </Stack>
              <Stack>
                <Card>
                  <HStack className="justify-between items-center">
                    <Text className="text-xl">
                      Подписка {profile?.tariff.name}
                    </Text>
                    <QuestionMark popoverText="Тут текст" />
                  </HStack>
                </Card>
                <Button onClick={() => navigate("/plans")}>
                  Купить токены
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box className="rounded-xl p-4.5 bg-primary">
            <HStack className="items-center flex-col md:flex-row">
              <Text className="text-white text-[15px] font-normal text-center md:text-left">
                Нейросети.com это профессиональный инструмент по работе с
                нейросетями, у нас уже более 50 разных нейросетей, и более 1000
                вариаций моделей в них!
              </Text>

              <Button
                className="bg-white w-full md:max-w-56 text-primary h-max hover:bg-white hover:text-primary"
                onClick={() => navigate("/natural-network")}
              >
                Перейти к нейросетям {">"}
                {">"}
              </Button>
            </HStack>
          </Box>
          <Box className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button
              className="bg-primary-foreground/10 border-2 md:pl-8 text-sm border-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              leftIcon={<MagicStarIcon className="md:absolute md:left-4" />}
            >
              Хочу такой-же бот
            </Button>
            <Button
              className="bg-primary-foreground/10 border-2 md:pl-12 text-sm border-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              leftIcon={
                <MessageQuestionIcon className="md:absolute md:left-4" />
              }
            >
              Как работает сервис?
            </Button>
            <Button
              className="bg-primary-foreground/10 border-2 md:pl-8 text-sm border-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              leftIcon={
                <MessageProgrammingIcon className="md:absolute md:left-4" />
              }
            >
              АPI для разраб-ов
            </Button>
          </Box>
        </Stack>
      </Container>
    </PageHeader>
  );
};

export default ProfilePage;
