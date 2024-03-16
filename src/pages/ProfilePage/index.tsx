import { Avatar, AvatarFallback, AvatarImage } from "@components/atoms/Avatar";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@components/templates/global-dialog";
import StarIcon from "@assets/star.svg";
import { X } from "lucide-react";
const ProfilePage = () => {
  return (
    <PageHeader pageContent={<BaseHeaderContent title="Мой аккаунт" />}>
      <Container>
        <Stack className="gap-4.5">
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Stack className="gap-4.5">
              <HStack className="items-center gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SR</AvatarFallback>
                </Avatar>
                <Stack className="w-full">
                  <Text className="text-2xl font-semibold">Sergey Romanov</Text>
                  <Box className="bg-muted p-2 rounded-md text-center">
                    <Text className="text-lg font-medium">
                      Stenix7@yandex.ru
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
                    <Text className="text-xl">💎 0 токенов</Text>
                    <QuestionMark popoverText="Тут текст" />
                  </HStack>
                </Card>
                <Button>Купить токены</Button>
              </Stack>
              <Stack>
                <Card>
                  <HStack className="justify-between items-center">
                    <Text className="text-xl">Подписка FREE</Text>
                    <QuestionMark popoverText="Тут текст" />
                  </HStack>
                </Card>
                <Button>Купить токены</Button>
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
              <Button className="bg-white w-full md:max-w-56 text-primary h-max hover:bg-white hover:text-primary">
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
        <HStack className="mt-4">
          <Dialog>
            <DialogTrigger>
              <Button>Открыть окно</Button>
            </DialogTrigger>
            <DialogContent className="text-center">
              <AdModalContent />
              <DialogClose className="absolute pointer-events-auto bottom-0 translate-y-[150%] left-[50%] -translate-x-[50%] rounded-sm   transition-opacity  disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <HStack className=" text-white items-center justify-center w-max text-nowrap gap-1 ">
                  <X />
                  <Text className="text-sm md:text-2xl text-white">
                    Предложить позже
                  </Text>
                </HStack>
              </DialogClose>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <Button>Открыть окно</Button>
            </DialogTrigger>
            <DialogContent className="text-center">
              <NotEnoughTokenModalContent />
              <DialogClose className="absolute pointer-events-auto bottom-0 translate-y-[150%] left-[50%] -translate-x-[50%] rounded-sm   transition-opacity  disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <HStack className=" text-white items-center justify-center w-max text-nowrap gap-1 ">
                  <X />
                  <Text className="text-sm md:text-2xl text-white">
                    Нет спасибо
                  </Text>
                </HStack>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </HStack>
      </Container>
    </PageHeader>
  );
};

const AdModalContent = () => {
  return (
    <>
      <Text className="text-2xl text-white">Безлимит ChatGPT 3.5 Tubo</Text>
      <Box className="w-full flex justify-center">
        <Box className="w-full relative">
          <div className="absolute top-0 left-2/4 -translate-x-2/4 -z-10 trnas filter blur-2xl bg-white w-52 h-52 rounded-full" />
          <Box className="flex w-full relative justify-center animate-jump-in h-36 md:h-56">
            <img src={StarIcon} className="animate-spin duration-20 " />

            <Box className="absolute top-6 md:top-14">
              <Stack className="gap-0">
                <Text className="text-primary font-bold  text-2xl md:text-5xl">
                  3
                </Text>
                <Text className="text-primary font-medium text-lg md:text-2xl leading-none">
                  дня
                </Text>
              </Stack>
              <Text className="text-primary text-xs font-normal mt-3">
                за 100 ₽
              </Text>
            </Box>
          </Box>

          <Box className="mt-10">
            <Stack className="w-full">
              <Button className="border-dashed justify-center border-white bg-white/20 w-full">
                💎 50 токенов на счёт
              </Button>
              <Button className="justify-center text-primary bg-white hover:text-primary hover:bg-white">
                Попробовать
              </Button>
              <Text className="text-sm md:text-lg font-medium text-white text-center">
                Более 50 разных нейросетей доступны вам в каталоге!
              </Text>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const NotEnoughTokenModalContent = () => {
  return (
    <>
      <Box className="w-full flex justify-center">
        <Box className="w-full relative">
          <div className="absolute top-4 left-2/4 -translate-x-2/4 -z-10 trnas filter blur-2xl bg-white w-52 h-52 rounded-full" />
          <Box className="flex w-full relative justify-center animate-jump-in h-36 md:h-56">
            <img src={StarIcon} className="animate-spin duration-20 " />
            <Box className="absolute top-8 md:top-16">
              <Text className="text-7xl md:text-8xl">💎</Text>
            </Box>
          </Box>

          <Box className="mt-5">
            <Text className="text-2xl text-white">
              У вас недостаточно токенов
            </Text>
            <Text className="text-lg font-medium text-white mt-2">
              Чтобы продолжить
            </Text>
            <Stack className="w-full mt-6 md:mt-10">
              <Button className="justify-center text-primary bg-white hover:text-primary hover:bg-white">
                Купить токены
              </Button>
              <HStack className="items-center w-full">
                <span className="flex-grow bg-white/50 rounded h-[1px]"></span>
                <Text className="font-normal text-white/50">Или</Text>
                <span className="flex-grow bg-white/50 rounded h-[1px]"></span>
              </HStack>
              <Button className="justify-center text-primary bg-white hover:text-primary hover:bg-white">
                Подписку за 100₽
              </Button>
              <Text className="text-sm md:text-lg font-medium text-white text-center">
                *С подпиской токены стоят дешевле
              </Text>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfilePage;
